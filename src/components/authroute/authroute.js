// 本组件判断路由跳转
/* 根据以下不同条件会有不同跳转：
		 * 是否登录
		 *	用户type
		 *	信息是否完整
		*/	

import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
// 因为本组件不是路由组件，所以无法取得路由相关信息，但使用withRouter就可以做到
@withRouter

class AuthRoute extends React.Component{
	componentDidMount(){
		const publicList = ['/login', '/regist']
		console.log(this.props.location.pathname)
		const pathname = this.props.location.pathname
		// 如果当前页的路由被包含以上两个，就不必再获取下面的用户信息操作
		if (publicList.indexOf(pathname) > -1) {
			return null
		}

		// 获取用户信息，一般在需要使用到用户信息的时候用到
		axios.get('/user/info').then(res=>{
			if (res.status === 200) {
				if (res.data.code === 1) {
					// 已经登陆了
				}else {
					// 未登录则，全部跳到登陆页面去
					this.props.history.push('/login')
				}
			}
		})
	}

	render(){
		return <h2>判断跳转地方</h2>
	}
}

export default AuthRoute