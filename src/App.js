import React from 'react'
import {connect} from 'react-redux'
import {addGun, reduceGun, reduceGunAsync} from './index.redux'

class App extends React.Component{
  render(){
    const num = this.props.num
    const addGun = this.props.addGun
    const reduceGun = this.props.reduceGun
    const reduceGunAsync = this.props.reduceGunAsync
    return (
      <div>
        <h1>现在有机枪{num}把</h1>
        <button onClick={addGun}>申请武器</button>
        <button onClick={reduceGun}>上交武器</button>
        <button onClick={reduceGunAsync}>拖两天在上交</button>
      </div>
    ) 
  }
}

const mapStateToProps = state=>{
  return {num: state}     // 将状态给到num变量
}
const actionCreators = {addGun, reduceGun, reduceGunAsync}
// 将state、addGun、reduceGun、reduceGunAsync也塞进props中，这样就可以使用this.props使用
App = connect(mapStateToProps, actionCreators)(App)

export default App