

docker run --rm -it -v $PWD/app:/home/bun/app -p 3000:3000 oven/bun:1 bash

bun create next-app .

bun --bun run dev

chown -R 1000:1000 ../app/

# add Dockerfile
# add .dockerignore

docker build -t bun_next .

docker-compose up -d
