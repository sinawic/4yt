
# https://caddyserver.com/docs/caddyfile-tutorial
# https://caddyserver.com/docs/caddyfile/directives/tls

mkdir -p config data certs

cd certs

DOMAIN=pc
openssl genpkey -algorithm RSA -out $DOMAIN.key
openssl req -new -key $DOMAIN.key -out $DOMAIN.csr -subj "/CN=$DOMAIN"
openssl req -x509 -in $DOMAIN.csr -key $DOMAIN.key -out $DOMAIN.crt -days 3650

DOMAIN=sinawic
openssl genpkey -algorithm RSA -out $DOMAIN.key
openssl req -new -key $DOMAIN.key -out $DOMAIN.csr -subj "/CN=$DOMAIN"
openssl req -x509 -in $DOMAIN.csr -key $DOMAIN.key -out $DOMAIN.crt -days 3650
