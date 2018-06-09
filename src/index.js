import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import App from './App'
import {counter, addGun, reduceGun, reduceGunAsync} from './index.redux'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () =>{}

// 创建store,注意用createStore
const store = createStore(counter, compose(applyMiddleware(thunk), reduxDevtools)) 

function render () {					// 使用父子组件传值的方式传递
	ReactDom.render(<App store={store} addGun={addGun} reduceGun={reduceGun} reduceGunAsync={reduceGunAsync} />, document.getElementById('root'))
}

render()

// 一定要调用subscribe订阅才可以监听到数据变化
store.subscribe(render)
