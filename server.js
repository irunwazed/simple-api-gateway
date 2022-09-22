const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express()
const port = 4000

const setProxy = require('./middlewares/proxy');
const ROUTES = require('./config/routes')


setProxy(app, ROUTES);

app.get('/login', (req, res) => {
	res.send('login bro!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})