FROM caddy:builder-alpine AS builder

RUN xcaddy build \
		--with github.com/caddyserver/cache-handler \
                --with github.com/darkweak/storages/redis/caddy

FROM caddy:2.8.4

COPY --from=builder /usr/bin/caddy /usr/bin/caddy
