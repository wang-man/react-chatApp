// 跟用户相关的路由接口

const express = require('express')
const Router = express.Router()

Router.get('/info', function (req, res) {
	// 有没有用户cooki校验
	return res.json({code: 0})
})

module.exports = Router