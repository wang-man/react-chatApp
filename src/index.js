import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import App from './App'
import {counter, addGun, reduceGun, reduceGunAsync} from './index.redux'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () =>{}

// 创建store,注意用createStore
const store = createStore(counter, compose(applyMiddleware(thunk), reduxDevtools)) 

ReactDom.render(
	(<Provider store={store}>
		<App/>
	</Provider>),
	document.getElementById('root')
)