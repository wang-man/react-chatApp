import React from 'react'
import { Link, Route} from 'react-router-dom'

import App from './App'

function Two () {
	return <h2>这是二营</h2>
}
function Three () {
	return <h2>这是骑兵连</h2>
}

class Dashboard extends React.Component{
	// constructor(props) {
	// 	super(props)
	// }
	render(){
		return (
			<div>
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
	}
}

export default Dashboard