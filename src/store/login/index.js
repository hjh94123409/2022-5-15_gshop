import {reqUserInfo,reqLogout } from '@/api'
const state  = {
    userInfo: {}
}

const mutations = {
    RECEIVE_USER_INFO(state, userInfo){
        state.userInfo = userInfo
    },
    RESET_USER_INFO(state){
        state.userInfo = {}
    }
}

const actions = {
    //同步记录用户信息
    recordUserInfo({commit}, userInfo){
        commit('RECEIVE_USER_INFO', userInfo)
    },

    //异步获取用户信息
    async getUserInfo({commit}){
        const result = await reqUserInfo()
        if(result.code === 0){
            commit('RECEIVE_USER_INFO', result.data)
        }
    },

    //请求退出
    async getLogOut({commit}){
        const result = await reqLogout()
        if(result.code === 0){
            commit('RESET_USER_INFO')
        }
    }
}

const getters = {}

export default {
    state, 
    mutations,
    actions,
    getters
}