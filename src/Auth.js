// 登录认证页

import React from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from './Auth-redux'

// 当有多个状态，需要合并
@connect(
	state => state.auth,
	{login}
)

class Auth extends React.Component{
	// constructor(props) {
	// 	super(props)
	// }
	render(){
		var that = this
		return (
			<div>
				{that.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null}
				<h2>认证登录页，区别于dashboard页</h2>
				<button onClick={that.props.login}>登录</button>
			</div>
		) 
	}
}

export default Auth