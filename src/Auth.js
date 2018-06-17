// 登录认证页
import React from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login, getUserData} from './Auth-redux'
import axios from 'axios'


// 当有多个状态，需要合并
@connect(
	state => state.auth,
	{login, getUserData}
)

class Auth extends React.Component{
	// constructor(props){
	// 	super(props)
	// 	this.state = {
	// 		data: {}
	// 	}
	// }
	componentDidMount(){
		// console.log(this.props)
		this.props.getUserData()
		// axios.get('/data').then(res => {
		// 	console.dir(res.data)
		// 	if (res.status === 200) {
		// 		this.setState({data: res.data[0]})
		// 	}
		// })
	}
	render(){
		var that = this
		return (
			<div>
				{<h2>我的名字是{this.props.name}，年龄是{this.props.age}</h2>}
				{that.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null}
				<h2>认证登录页，区别于dashboard页</h2>
				<button onClick={that.props.login}>登录</button>
			</div>
		) 
	}
}

export default Auth