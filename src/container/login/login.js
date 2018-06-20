import React from 'react'
import Logo from '../../components/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'

class Login extends React.Component{
	constructor(props){
		super(props);
		this.regist = this.regist.bind(this)
	}
	regist(){
		console.log(this.props)
		this.props.history.push('/regist')
	}
	render(){
		return (
			<div>
				<Logo></Logo>
				<h2>这是登录页</h2>
				<List>
					<InputItem>用户</InputItem>
					<WhiteSpace />
					<InputItem>密码</InputItem>
				</List>
				<WhiteSpace />
				<WingBlank>
					<Button type='primary'>登录</Button>
					<WhiteSpace />
					<Button type='primary' onClick={this.regist}>注册</Button>
				</WingBlank>
			</div>
		)
	}
}

export default Login