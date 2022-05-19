import {reqSearchShops } from '@/api'
import msite from '@/store/msite'
    
const state  = {
    searchShops: []
}

const mutations = {
    RECEIVE_SEARCH_SHOPS(state, searchShops){
        state.searchShops = searchShops
    }
}

const actions = {
    async searchShops({commit}, keyword){
        let geohash = msite.state.latitude + ',' + msite.state.longgitude
        const result = await reqSearchShops(geohash, keyword)
        if(result.code === 0){
            commit('RECEIVE_SEARCH_SHOPS', result.data)
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