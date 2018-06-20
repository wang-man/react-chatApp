import React from 'react'
import Logo from '../../components/logo/logo'
import {List, InputItem, WingBlank, Radio, WhiteSpace, Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {regist} from '../../redux/user-redux'

@connect(
	state=>state.user,
	{regist}
)

class Regist extends React.Component{
	constructor(props){
		super(props)
		// 定义各个状态，存储表单所填信息
		this.state = {
			user: '',
			pwd: '',
			repeatPwd: '',
			type: 'rookie'		// 默认选择
		}
		this.handleRegist = this.handleRegist.bind(this)
	}
	// 设置state的各个属性值
	handleChange(key, val){
		this.setState({
			[key]: val
		})
	}
	// 发送表单信息
	handleRegist(){
		this.props.regist(this.state)
		console.log(this.state)
	}
	render(){
		const RadioItem= Radio.RadioItem
		return (
			<div>
				<Logo></Logo>
				<List>
					{this.props.msg?<p className='error-msg'>{this.props.msg}</p> : null}
					<InputItem onChange={val=>this.handleChange('user', val)}>用户名</InputItem>
					<InputItem onChange={val=>this.handleChange('pwd', val)} type='password'>密码</InputItem>
					<InputItem onChange={val=>this.handleChange('repeatPwd', val)} type='password'>确认密码</InputItem>
					<RadioItem onChange={val=>this.handleChange('type', 'rookie')} checked={this.state.type ==='rookie'}>
						菜鸟
					</RadioItem>
					<RadioItem onChange={val=>this.handleChange('type', 'boss')} checked={this.state.type ==='boss'}>
						老板
					</RadioItem>
					<WhiteSpace /><WhiteSpace />
					<WingBlank>
						<Button type='primary' onClick={this.handleRegist}>注册</Button>
					</WingBlank>
				</List>
			</div>
		
		)
	}
}

export default Regist