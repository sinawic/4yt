
## slide3
A Rate Limiter limits the number of client requests allowed to be sent over a specified period. If the API request count exceeds the threshold defined by the rate limiter, all the excess calls will be blocked.

For example, A user can only post up to 10 times in 1 minute, a user can only create up to 10 accounts per day from the same IP address, etc.


## slide4
- A rate limiter prevents DoS attacks, intentional or unintentional, by blocking the excess calls.
- Reduces cost where the system is using a 3rd-party API service and is charged on a per-call-basis.
- To reduce server load, a rate limiter is used to filter out excess requests caused by bots or users’ misbehaviour.


## slide5
To Implement rate limiter we have generally 3 places: Client-side, Server-side, or middleware.

The client is an unreliable place to enforce rate limiting because client requests can easily be forged by malicious actors.

Even better than placing it on the server side is to use a rate limiter middleware, which will throttle excess requests even to our server side. So, if you are using a microservice architecture and already using functionalities like authentication middleware, a similar basis you can implement rate limiter middleware alongside it.


## slide6
The bucket has tokens with a pre-defined capacity. When a request comes in it takes a token from the bucket and is processed further. If there is no token to be picked, the request is dropped and the user will have to retry.


## slide7
In simple words:

In the Token Bucket algorithm, we process a token from the bucket for every request. New tokens are added to the bucket with rate r. The bucket can hold a maximum of b tokens. If a request comes and the bucket is full it is discarded.

The token bucket algorithm takes two parameters:

Bucket size: the maximum number of tokens allowed in the bucket
Refill rate: number of tokens put into the bucket every second
