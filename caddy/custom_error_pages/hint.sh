
# https://caddyserver.com/docs/caddyfile-tutorial
# https://caddyserver.com/docs/caddyfile/directives/handle_errors
# https://caddyserver.com/docs/caddyfile/directives/error

mkdir config data

curl -i localhost/api/
curl -i localhost/private
curl -i localhost/hidden
docker rm -f custom_error_pages-backend-1
curl -i localhost/api/
