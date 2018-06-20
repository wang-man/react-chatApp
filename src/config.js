import axios from 'axios'
import {Toast} from 'antd-mobile'	//加载的loading效果，全局的

// 给所有的axios请求都加上loading效果。本文件会在index.js中
// 拦截请求,都是axios自带的方法
axios.interceptors.request.use(function (config) {
	Toast.loading('加载中...', 0)
	return config
})

// 拦截响应
axios.interceptors.response.use(function (config) {
	Toast.hide()
	
	return config
})