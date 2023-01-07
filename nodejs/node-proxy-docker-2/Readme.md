## dockerizing node proxy app

after running `docker build -t node-proxy:v1 .` in the `./app` directory
<br/>
in the `node-proxy-docker` root directory hit `docker-compose up` command
<br/>
or other way just hit the `docker run --name node-proxy-app -p 3000:3000 node-proxy:v1` command
<br/>
now you have your node app running in a docker container and you can access it by going to `http://localhost:3000`
