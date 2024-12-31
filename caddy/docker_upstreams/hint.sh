
# https://caddyserver.com/docs/caddyfile-tutorial
# https://github.com/invzhi/caddy-docker-upstreams

mkdir config data

docker build -t caddy:2.8.4-docker_upstreams .

curl -i http://pc.com/
curl -i http://example.pc.com/
