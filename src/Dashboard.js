// 导航页

import React from 'react'
import { Link, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from './Auth-redux'
import App from './App'

function Two () {
	return <h2>这是二营</h2>
}
function Three () {
	return <h2>这是骑兵连</h2>
}

@connect(
	state => state.auth,
	{logout}
)

class Dashboard extends React.Component{
	// constructor(props) {
	// 	super(props)
	// }
	render(){
		var that = this
		const redirectToLogin = <Redirect to='/login'></Redirect>
		const nav = (
			<div>
				<h1>独立团</h1>
				{that.props.isAuth ? <button onClick={that.props.logout}>退出登录</button> : null}
				<ul>
					<li>
						<Link to='/dashboard/'>管理页</Link>
					</li>
					<li>
						<Link to='/dashboard/two'>二营</Link>
					</li>
					<li>
						<Link to='/dashboard/three'>骑兵连</Link>
					</li>
				</ul>
				<Route path='/dashboard/' exact component={App}></Route>
				<Route path='/dashboard/two' component={Two}></Route>
				<Route path='/dashboard/three' component={Three}></Route>
			</div>
		)
		// 如果没有登录，跳到登录页
		return this.props.isAuth ? nav : redirectToLogin		
	}
}

export default Dashboard