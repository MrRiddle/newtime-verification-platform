const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const favicon = require('serve-favicon')
const config = require('./webpack.config')
const express = require('express')
const mysql = require('mysql')


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

const db;
function connect () {
  db = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    port: ''
  });
  db.connect(handleError);
  db.on('error', handleError);
}
function handleError (err) {
  if (err) {
    // 如果是连接断开，自动重新连接
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      connect();
    } else {
      console.error(err.stack || err);
    }
  }
}


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

app.post("/getToCheckList", (req, res) => {
   if(isLegal(req)){
        const list = [
                {
                    id: '001',
                    name: '尼古拉斯·赵四',
                    gender: '男',
                    address: '广东省深圳市深南大道10000号'
                },
                {
                    id: '002',
                    name: '尼古拉斯·赵四',
                    gender: '男',
                    address: '广东省深圳市深南大道10000号'
                },
                {
                    id: '003',
                    name: '尼古拉斯·赵四',
                    gender: '男',
                    address: '广东省深圳市深南大道10000号'
                },
                {
                    id: '004',
                    name: '尼古拉斯·赵四',
                    gender: '男',
                    address: '广东省深圳市深南大道10000号'
                }
            ];
        res.json({list});
    }else{
        res.send(500, { error: '用户状态有误。' });
    }

});

app.post("/getCheckedList", (req, res) => {
    if(isLegal(req)){
        const list = [
                {
                    id: '001',
                    name: '尼古拉斯·赵四',
                    gender: '男',
                    address: '广东省深圳市深南大道10000号'
                },
                {
                    id: '002',
                    name: '尼古拉斯·赵四',
                    gender: '男',
                    address: '广东省深圳市深南大道10000号'
                },
                {
                    id: '003',
                    name: '尼古拉斯·赵四',
                    gender: '男',
                    address: '广东省深圳市深南大道10000号'
                },
                {
                    id: '004',
                    name: '尼古拉斯·赵四',
                    gender: '男',
                    address: '广东省深圳市深南大道10000号'
                }
            ];
        res.json({list});
    }else{
        res.send(500, { error: '用户状态有误。' });
    }

});

app.post("/getDetailInfo", (req, res) => {
    if(isLegal(req)){
        const id = req.body.id;
        const info = {
                    id,
                    name: '尼古拉斯·赵四',
                    gender: '男',
                    address: '广东省深圳市深南大道10000号'
                };
        res.json({info});
    }else{
        res.send(500, { error: '用户状态有误。' });
    }

});

app.post("/setPass", (req, res) => {
    if(isLegal(req)){
        const id = req.body.id;
        console.log("申请者 %s 通过申请。", id);
        res.json({success: true});
    }else{
        res.send(500, { error: '用户状态有误。' });
    }

});

app.post("/setFail", (req, res) => {
    if(isLegal(req)){
        const id = req.body.id;
        console.log("申请者 %s 未通过申请。", id);
        res.json({success: true});
    }else{
        res.send(500, { error: '用户状态有误。' });
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

function isLegal(req){
    const username = req.cookies.username;
    const signedUsername = req.signedCookies._token;
    
    return (username === signedUsername);
}

