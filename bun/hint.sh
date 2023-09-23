
# https://bun.sh/docs
# https://bun.sh/docs/quickstart
# https://bun.sh/docs/runtime/hot

# https://bun.sh/docs/api/http
# https://bun.sh/docs/runtime/env

# https://bun.sh/docs/api/websockets


# 1) getting started
docker pull oven/bun:1.0
docker run --rm -d -v $PWD/app:/home/bun/app -p 8080:8080 oven/bun:1.0 sleep 36000
bun init
bun run index.ts
chmod -R a+rwx ../app/
# "bun --watch run index.ts" > package.json
bun add axios

# 2) dockerize
docker run --rm -d -v $PWD/app:/home/bun/app -p 8080:8080 oven/bun:1.0 sleep 36000
# "prod": "bun index.ts" > package.json
docker build -t my bun .
docker-compose up -d


