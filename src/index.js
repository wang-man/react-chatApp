import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import Login from './container/login/login'
import Regist from './container/regist/regist'
import AuthRoute from './components/authroute/authroute'

import './config'
import './index.css'
// import 'antd-mobile/dist/antd-mobile.css'		// 引入css

// import App from './App'
// import {counter} from './index.redux'
import reducers from './reducers'

// 使用了Chrome的状态UI工具，在其他浏览器中不能使用
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () =>{}
// console.log(reduxDevtools)

// 创建store,注意用createStore
const store = window.devToolsExtension ? createStore(reducers, compose(applyMiddleware(thunk), reduxDevtools)) : createStore(reducers, compose(applyMiddleware(thunk))) 

// console.log(store.getState())

function Success () {
	return <h2>测试登录完成过</h2>
}


ReactDom.render(
	(<Provider store={store}>
		<BrowserRouter>
			<div>
				<AuthRoute></AuthRoute>
				<Route path='/success' component={Success}></Route>
				<Route path='/login' component={Login}></Route>
				<Route path='/regist' component={Regist}></Route>
				{/*<Redirect to='login'></Redirect>*/}
			</div>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
)

