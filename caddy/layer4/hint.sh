
# https://caddyserver.com/docs/caddyfile-tutorial
# https://caddyserver.com/docs/modules/layer4
# https://github.com/mholt/caddy-l4

mkdir config data

docker build -t sinawic/caddy:2.8.4-ssh .

ssh sinawic@pc.com -p 1080
