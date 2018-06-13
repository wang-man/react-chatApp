import React from 'react'
import {connect} from 'react-redux'
import {addGun, reduceGun, reduceGunAsync} from './index.redux'


@connect(
  state => {return {num: state.counter}},         // state的什么属性放入props中？
  {addGun, reduceGun, reduceGunAsync}     // 什么方法放入props中
)

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


export default App