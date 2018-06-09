const ADD_GUN = 'add'
const RED_GUN = 'reduce'

export function counter (state=0, action) {
	switch (action.type) {
		case 'add':
			return state+1
		case 'reduce':
			return state-1
		default:
			return 10
	}
}

// 创建提交方法
export function addGun () {
	return {type: ADD_GUN}
}

export function reduceGun () {
	return {type: RED_GUN}
}

export function reduceGunAsync () {
	// 因为使用了thunk，所以可以会直接返回函数
	return dispatch => {
		setTimeout(() => {
			// 手动执行dispatch，执行上交枪支的提交
			dispatch(reduceGun())
		}, 2000)
	}
}