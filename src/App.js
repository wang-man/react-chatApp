import React from 'react'

class App extends React.Component{
  render(){
    const store = this.props.store    // 读取父组件传递来的store
    const mum = store.getState()      // 获取状态
    console.log(store)
    const addGun = this.props.addGun
    const reduceGun = this.props.reduceGun
    const reduceGunAsync = this.props.reduceGunAsync
    return (
      <div>
        <h1>现在有机枪{mum}把</h1>
        <button onClick={()=>store.dispatch(addGun())}>申请武器</button>
        <button onClick={()=>store.dispatch(reduceGun())}>上交武器</button>
        <button onClick={()=>store.dispatch(reduceGunAsync())}>拖两天在上交</button>
      </div>
    ) 
  }
}


export default App