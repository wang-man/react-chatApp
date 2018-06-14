import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Auth from './Auth'
import Dashboard from './Dashboard'

// import App from './App'
// import {counter} from './index.redux'
import reducers from './reducers'

// 使用了Chrome的状态UI工具，在其他浏览器中会报错
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () =>{}
// console.log(reduxDevtools)

// 创建store,注意用createStore
const store = window.devToolsExtension ? createStore(reducers, compose(applyMiddleware(thunk), reduxDevtools)) : createStore(reducers, compose(applyMiddleware(thunk))) 

console.log(store.getState())

ReactDom.render(
	(<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path='/login' exact component={Auth}></Route>
				<Route path='/dashboard' component={Dashboard}></Route>
				<Redirect to='/dashboard'></Redirect>{/*未指定路由则定向到dashboard*/}
			
			</Switch>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
)

