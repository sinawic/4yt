FROM oven/bun:1.0

WORKDIR /home/bun/app

COPY ./package.json .

RUN bun install

COPY . .

CMD [ "bun", "run", "prod" ]
