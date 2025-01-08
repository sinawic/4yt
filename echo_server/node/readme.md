
# node express echo server

## run using docker image

```bash
git clone https://github.com/sinawic/4yt.git
cd 4yt/echo_server/node

docker pull sinawic/echo_server:latest
docker-compose up -d
docker-compose ps
```

access on port 8080 unless you changed the port to something else in docker-compose file

## usage

after making sure of container's up status:

```bash
curl -X POST -i http://localhost:8080/hi?hey=q

curl -k -X GET \
  -X POST \
  http://localhost:8080 \
  -H 'Host: test.com'

curl -X POST -H "Content-Type: application/json" -d '{"key1":"value1", "key2":"value2"}' http://localhost:8080/endpoint
```

## run locally

```bash
git clone https://github.com/sinawic/4yt.git
cd 4yt/echo_server/node

npm i
npm start
```

because the server will try to run on port 80 it might throw permission errors,

the workaround is:

```bash
sudo node index.js
```

or simply change the `port` variable in the `index.js` file


## build locally

after cloning the repo

```bash
git clone https://github.com/sinawic/4yt.git
cd 4yt/echo_server/node

docker build -t sinawic/echo_server:latest .
docker run --rm -p 8080:80 sinawic/echo_server:latest
```
