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

var db;
connect();
function connect() {
  db = mysql.createConnection({
    host: '119.29.233.72',
    port: '3306',
    user: 'root',
    password: 'root',
    database : 'eattimedata'
  });
  db.connect(handleError);
  db.on('error', handleError);
}
function handleError(err) {
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

        db.query('SELECT id,username,location,identity,sex FROM users WHERE confirm=0', (err, results) => {
            if (err){
                console.log(err);
                res.send(500, { error: '数据库查询失败。' });
            }else{
                const list = results.map(item => ({
                    id: item.id,
                    name: item.username,
                    gender: ('M'===(item.sex))?'男':'女',
                    address: item.location,
                    identity: item.identity
                }));

                res.json({list});

            }
        });
        
    }else{
        res.send(500, { error: '用户状态有误。' });
    }

});

app.post("/getCheckedList", (req, res) => {
    if(isLegal(req)){
       db.query('SELECT id,username,location,identity,sex FROM users WHERE confirm=1', (err, results) => {
            if (err){
                console.log(err);
                res.send(500, { error: '数据库查询失败。' });
            }else{
                const list = results.map(item => ({
                    id: item.id,
                    name: item.username,
                    gender: ('M'===(item.sex))?'男':'女',
                    address: item.location,
                    identity: item.identity
                }));

                res.json({list});

            }
        });
    }else{
        res.send(500, { error: '用户状态有误。' });
    }

});

app.post("/getDetailInfo", (req, res) => {
    if(isLegal(req)){
        const id = req.body.id;
        db.query('SELECT username,location,identity,sex,homeimgurl,headimgurl FROM users WHERE id=?', [id], (err, results) => {
            if (err){
                console.log(err);
                res.send(500, { error: '数据库查询失败。' });
            }else{
                const info = results.map(item => ({
                    id: id,
                    name: item.username,
                    gender: ('M'===(item.sex))?'男':'女',
                    address: item.location,
                    identity: item.identity,
                    homeimgurl: item.homeimgurl,
                    headimgurl: item.headimgurl
                }))[0];

                res.json({info});

            }
        });
    }else{
        res.send(500, { error: '用户状态有误。' });
    }

});

app.post("/setPass", (req, res) => {
    if(isLegal(req)){
        const id = req.body.id;

        db.query('UPDATE users SET confirm=1 WHERE id=?', [id], (err, results) => {
            if (err){
                console.log(err);
                res.send(500, { error: '数据更新失败。' });
            }else{
                console.log("申请者 %s 通过申请。", id);
                res.json({success: true});
            }
        });


    }else{
        res.send(500, { error: '用户状态有误。' });
    }

});

app.post("/setFail", (req, res) => {
    if(isLegal(req)){
        const id = req.body.id;
        db.query('UPDATE users SET confirm=0 WHERE id=?', [id], (err, results) => {
            if (err){
                console.log(err);
                res.send(500, { error: '数据更新失败。' });
            }else{
                console.log("申请者 %s 未通过申请。", id);
                res.json({success: true});
            }
        });
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

