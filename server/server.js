const express = require('express');
const mongoose = require('mongoose');

// 连接到mongodb
const DB_URL = 'mongodb://127.0.0.1:27018'	// 注意这个是固定的
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function(){
	console.log('mongodb连接成功')
})

// 创建一个文档模型，类似mysql的表
const User = mongoose.model('user', new mongoose.Schema({
	name: {type: String, require: true},
	age: {type: Number, require: true}
}))
// 新增数据
User.create({
	name: '郭靖',
	age: 20
}, function (err, doc) {
	if (!err) {
		console.log(doc);
	}else{
		console.log(err);
	}
})

// User.remove({age: 24}, function (err, doc) {
// 	console.log(doc)
// })

// User.update({'name': 'lion'}, {'$set': {age: 22}}, function (err, doc) {
// 	console.log(doc)
// })



const app = express();


// 返回页面
app.get('/', function(req, res) {
	res.send('<h1>hello express</h1>')
});
// 返回json，相当于定义数据接口
app.get('/data', function(req, res) {
	User.find({name: '穆念慈'}, function (err, doc) {
		res.json(doc)
	})
	// res.json({name: 'lion wang', age: 20})
});


app.listen(8888, function () {
	console.log('服务已经启动，监听在8888端口')
})