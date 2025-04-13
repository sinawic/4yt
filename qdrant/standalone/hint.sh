

# https://qdrant.tech/documentation/quickstart/

mkdir data certs

cd certs
DOMAIN=pc.com
openssl genpkey -algorithm RSA -out $DOMAIN.key
openssl req -new -key $DOMAIN.key -out $DOMAIN.csr -subj "/CN=$DOMAIN"
openssl req -x509 -in $DOMAIN.csr -key $DOMAIN.key -out $DOMAIN.crt -days 3650



mkcert -install
mkcert pc.com localhost 127.0.0.1 ::1
