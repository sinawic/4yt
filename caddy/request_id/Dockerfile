FROM caddy:builder-alpine AS builder

RUN xcaddy build \
		--with github.com/lolPants/caddy-requestid

FROM caddy:2.8.4

COPY --from=builder /usr/bin/caddy /usr/bin/caddy
