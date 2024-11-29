
# https://caddyserver.com/docs/caddyfile-tutorial
# https://github.com/mholt/caddy-ratelimit
# https://caddyserver.com/docs/modules/http.handlers.rate_limit
# https://thedevelopercafe.com/articles/rate-limiting-in-caddy-with-non-standard-modules-7cdedba46785

mkdir config data

docker build -t caddy:2.8.4-ratelimit .

curl -i http://localhost/api/
