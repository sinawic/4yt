const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const preFetch = (req, res, next) => {
  if (req.headers.authorization)
    console.log('authorization exists')
  else
    console.log('authorization does not exist')
  next()
}

app.use('/', preFetch, createProxyMiddleware({
  target: 'https://random-data-api.com/api/users/random_user?size=3', changeOrigin: true
}));
app.listen(3000);