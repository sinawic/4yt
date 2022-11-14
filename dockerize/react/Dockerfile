FROM node:17.0.1-bullseye-slim

WORKDIR /app

# install app dependencies
COPY package.json package-lock.json ./
RUN npm install 
COPY . ./

RUN chown -R node:node node_modules

EXPOSE 3000

# start app
CMD ["npm", "start"]