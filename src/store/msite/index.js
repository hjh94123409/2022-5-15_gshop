import {reqAddress, reqFoodCategorys, reqShopList } from '@/api'

const state = {
    latitude: 40.10038, //经度
    longgitude: 116.36867,   //纬度
    address: {},
    categorys: [],
    shops: []
}

const mutations = {
    RECEIVE_ADDRESS(state, address){
        state.address = address
    },

    RECEIVE_CATEGORYS(state, categorys){
        state.categorys = categorys;
    }, 

    RECEIVE_SHOPS(state, shops){
        state.shops = shops
    }
}

const actions = {

    async getAddress({state, commit}){
        let geohash = state.latitude + ',' + state.longgitude
        let result = await reqAddress(geohash)
        if(result.code === 0){
            commit('RECEIVE_ADDRESS', result.data)
        }
    },

    async getFoodCategorys({commit}){
        let result = await reqFoodCategorys();
        if(result.code === 0){
            commit('RECEIVE_CATEGORYS', result.data);
        }
    },

    async getShopList({state, commit}){
        let {latitude, longitude} = state
        let result = await reqShopList(latitude, longitude)
        if(result.code === 0){
            commit('RECEIVE_SHOPS', result.data)
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