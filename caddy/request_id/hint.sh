
# https://caddyserver.com/docs/caddyfile-tutorial
# https://github.com/lolPants/caddy-requestid

mkdir config data

docker build -t sinawic/caddy:2.8.4-request_id .

curl -i localhost/api/
