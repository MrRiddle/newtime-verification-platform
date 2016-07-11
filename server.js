const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const favicon = require('serve-favicon')
const config = require('./webpack.config')
const express = require('express')


var app = new express()
const path = require('path')
const port = 3000

const compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use(bodyParser())
app.use(favicon(__dirname + '/favicon.ico'))
app.use(cookieParser('shiguang'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const authMsg = loginAuth(username,password);
    if('' === authMsg){
        res.cookie('_token', username, {
            signed: true
        });
        res.json({auth: true});
        console.log("User %s login.", username);
    }else{
        res.json({auth: false, msg: authMsg});
    }

});

function loginAuth(username, password){
    if('admin' !== username) {
        return '用户名不存在';
    }else if('admin123456' !== password) {
        return '密码错误';
    }else {
        return '';
    }
}

