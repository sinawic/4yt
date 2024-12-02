
# https://caddyserver.com/docs/caddyfile-tutorial
# https://caddyserver.com/docs/modules/http.handlers.cache
# https://github.com/caddyserver/cache-handler?tab=readme-ov-file#redis

mkdir config data

docker build -t caddy:2.8.4-cache .

curl -i http://localhost/api/
