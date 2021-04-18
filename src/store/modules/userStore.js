import { postcookies } from 'api/utils'
import * as TYPE from '../actionType/userType'
import _ from 'lodash'

const state = {
	userinfo: {},
    token: ""
}

const getters = {
	userinfo: state => state.userinfo
}

const actions = {
    login({commit, state,rootState},data){
        return new Promise((resolve, reject)=>{
            rootState.requesting = true
            let result={
                error:null,
                message:"fail"
            }
        postcookies(data).then((res)=>{ 
            rootState.requesting = false
            if (res.data.code==0){            
                commit(TYPE.USER_LOGIN, res.headers.token)
                resolve(res.headers.token)
            }
            else{
                result.error=res
                result.message="cookies验证失败"
                reject(result)
            }
        },(error)=>{
            rootState.requesting = false
            result.error=error
            result.message="cookies上传失败"
            reject(result)
        })
        } )
        
    },
    logout({commit, state,rootState}){
            commit(TYPE.USER_LOGOUT)  
    },

}

const mutations = {

	[TYPE.USER_LOGIN] (state, data) {
        console.log(data)
		localStorage.token = data;
        state.token = data;
	},
	[TYPE.USER_LOGOUT] (state) {
        localStorage.removeItem('token');
        state.token = ""

	}
}

export default {
	state,
	getters,
	actions,
	mutations
}