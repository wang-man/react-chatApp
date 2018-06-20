const express = require('express');
const mongoose = require('mongoose');

const userRoute = require('./user')
const app = express();

// 子路由
app.use('/user', userRoute)


// 连接到mongodb
const DB_URL = 'mongodb://127.0.0.1:27018'	// 注意这个是固定的
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function(){
	console.log('mongodb连接成功')
})


// 返回页面
app.get('/', function(req, res) {
	res.send('<h1>hello express</h1>')
});

app.listen(8888, function () {
	console.log('服务已经启动，监听在8888端口')
})