
# https://caddyserver.com/docs/caddyfile-tutorial
# https://caddyserver.com/docs/caddyfile/directives/forward_auth

mkdir config data

curl -i http://localhost/api/
curl -i -H 'authorization: abc' http://localhost/api/
