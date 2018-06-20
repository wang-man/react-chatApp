// 管理用户相关的状态

import axios from 'axios'
const REGIST_SUCCESS = 'REGIST_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initstate = {
	isAuth: false,
	msg: '',
	user: '',
	pwd: '',
	type: ''
}
// reducer
export function user (state=initstate, action) {
	switch (action.type) {
		case REGIST_SUCCESS:
			return {...state, msg:'',isAuth: true, ...action.payload}
		case ERROR_MSG:
			return {...state, msg: action.msg, isAuth: false, ...action.payload}
		default:
			return state
	}
}

function registSuccess (data) {
	return {type: REGIST_SUCCESS, payload: data}
}

function errorMsg (msg) {
	return {type: ERROR_MSG, msg: msg}
}

export function regist ({user, pwd, repeatPwd, type}) {
	if(!user || !pwd || !repeatPwd){
		return errorMsg('必填字段')
	}
	if (pwd !== repeatPwd) {
		return errorMsg('密码不一致')
	}

	return dispatch=>{
		axios.post('/user/rigist', {user, pwd, type}).then(res=>{
			if (res.status===200 && res.data.code===0) {
				// 分发数据
				dispatch(registSuccess({user, pwd, type}))
			}else{
				dispatch(errorMsg(res.data.msg))
			}
		})
	}

}
