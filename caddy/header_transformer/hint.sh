
# https://caddyserver.com/docs/caddyfile-tutorial
# https://caddyserver.com/docs/caddyfile/directives/header
# https://caddyserver.com/docs/caddyfile/directives/reverse_proxy#header_up

mkdir config data


curl -i -H 'client-header: value' -H 'client-header-persistant: value' localhost/api/
