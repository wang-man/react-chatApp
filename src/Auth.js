import React from 'react'
import { connect } from 'react-redux'
import {login} from './Auth-redux'

// 当有多个状态，需要合并
@connect(
	state => state
)

class Auth extends React.Component{
	// constructor(props) {
	// 	super(props)
	// }
	render(){
		return <h2>认证登录页</h2>
	}
}

export default Auth