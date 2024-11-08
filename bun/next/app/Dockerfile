FROM oven/bun:1 AS base

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile


FROM oven/bun:1 AS release

COPY --from=base /usr/src/app/node_modules node_modules

COPY . .

RUN bun --bun run build

CMD bun --bun run start

EXPOSE 3000
