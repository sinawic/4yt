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

app.use('/api', preFetch, createProxyMiddleware({
  target: 'http://localhost:6969', changeOrigin: true, pathRewrite: {
    '^/api/': '/'
  }
}));
app.listen(3000);