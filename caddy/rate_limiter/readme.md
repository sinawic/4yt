

# Caddy rate limiter

## Rate Limiting Module 

You are going to use https://github.com/mholt/caddy-ratelimit non-standard module to implement rate limiting.

## Building Caddy with Module 
When using non-standard module you have to build Caddy along with the module. I am going to use Docker and build a custom container image that includes the module.

Dockerfile
```
FROM caddy:builder-alpine AS builder

RUN xcaddy build \
		--with github.com/mholt/caddy-ratelimit

FROM caddy:latest

COPY --from=builder /usr/bin/caddy /usr/bin/caddy
```

`docker build -t caddy:custom .`

The above uses the builder image `caddy:builder-alpine`, builds Caddy using the `xcaddy` tool and then copies the built binary in a regular `caddy:latest` image.

`caddy-custom` image contains Caddy along with the rate limiting module.

## Writing Caddyfile 

Set up a simple Caddyfile with basic response.

Caddyfile
```
:80 {
		handle /api* {
				respond "API 200"
		}
}
```

The above returns a simple API 200 response when sending a request to any endpoint starting with `/api`.

```
curl -i localhost:80/api
HTTP/1.1 200 OK
Content-Type: text/plain; charset=utf-8
Server: Caddy
Date: Sun, 16 Jul 2023 08:11:03 GMT
Content-Length: 7

API 200
```

## Add Rate Limiting 

The rate limiting module provides a directive called `rate_limit`.

Caddyfile
```
{
		order rate_limit before basicauth
}

:80 {
		rate_limit {
				zone dynamic_zone {
						key {http.request.remote_ip}
						events 2
						window 5s
				}
		}

		handle /api* {
				respond "API 200"
		}
}
```

Run the above `Caddyfile` using the previously built docker image.

`docker run --rm -v ${PWD}/Caddyfile:/etc/caddy/Caddyfile -p 80:80 caddy:custom`

Let's break down the above `Caddyfile`.

```
Directive Ordering 
{
		order rate_limit before basicauth
}
```

Since this is a non-standard module, you need to tell Caddy in which order to evaluate the `rate_limit` directive. Read more about directive ordering here.

## Rate Limit Directive 

```
rate_limit {
		zone dynamic_zone {
				key {http.request.remote_ip}
				events 2
				window 5s
		}
}
```
The basic configuration of a rate limit includes `key`, `events` and `window`.

- `key` is how you identify/group realted requests together.
- `events` refers to the total number of requests.
- `window` refers to the time period of the rate limit.

You can read the above as "Based on the request `key` allow only `events` requests in a period of `window`."

Fill in the values and it makes more sense, "Based on the request `ip address` allow only `2` request in a period of `5 seconds`".

So if you send more than 2 requests in a period of 5 seconds from the same ip address, you will get back a `429 Too Many Request` error.

Caddy Rate Limiting

```
$ curl -i localhost:80/api
HTTP/1.1 200 OK
Content-Type: text/plain; charset=utf-8
Server: Caddy
Date: Sun, 16 Jul 2023 08:27:30 GMT
Content-Length: 7

API 200

$ curl -i localhost:80/api
HTTP/1.1 200 OK
Content-Type: text/plain; charset=utf-8
Server: Caddy
Date: Sun, 16 Jul 2023 08:27:30 GMT
Content-Length: 7

API 200

$ curl -i localhost:80/api
HTTP/1.1 429 Too Many Requests
Retry-After: 4
Server: Caddy
Date: Sun, 16 Jul 2023 08:27:31 GMT
Content-Length: 0
```