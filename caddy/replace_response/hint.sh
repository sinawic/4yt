
# https://caddyserver.com/docs/caddyfile-tutorial
# https://github.com/caddyserver/replace-response

mkdir config data

docker build -t sinawic/caddy:2.8.4-replace_response .

curl -i http://pc.com/api/
