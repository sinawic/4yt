FROM node:16.13.1-alpine

WORKDIR /app

# install app dependencies
COPY package.json package-lock.json ./
RUN npm install 
COPY . ./

RUN chown -R node:node node_modules

EXPOSE 3000

# start app
CMD ["npm", "start"]
