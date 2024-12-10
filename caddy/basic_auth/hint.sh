
# https://caddyserver.com/docs/caddyfile-tutorial
# https://caddyserver.com/docs/caddyfile/directives/basic_auth

mkdir config data

htpasswd -nbB bob password
htpasswd -nbB alice password
