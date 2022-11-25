commands to use the json server cli:

- `npm install -g json-server`
- `json-server --watch db.json`
- `curl --request DELETE http://localhost:3000/posts/{id}`
- `curl --header "Content-Type: application/json" --request POST --data '{"id": 4,"title": "json-server4","author": "typicode4"}' http://localhost:3000/posts`