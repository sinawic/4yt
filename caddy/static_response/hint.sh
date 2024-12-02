
# https://caddyserver.com/docs/caddyfile-tutorial
# https://caddyserver.com/docs/caddyfile/directives/respond

mkdir config data

curl -i http://localhost/api/
curl -i http://localhost/custom-header
curl -i http://localhost/json
curl -i http://localhost/html
