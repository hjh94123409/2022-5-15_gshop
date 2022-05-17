import {reqShopInfo, reqShopRatings, reqShopGoods} from '@/api'

const state = {
    goods: [],
    ratings: [],
    info: {}
}

const mutations = {
    RECEIVE_INFO(state, info){
        state.info = info
    },
    RECEIVE_RATINGS(state, ratings){
        state.ratings = ratings
    },
    RECEIVE_GOODS(state, goods){
        state.goods = goods
    }
}

const actions = {

    async getShopInfo({commit}){
        const result = await reqShopInfo()
        if(result.code === 0){
            commit('RECEIVE_INFO', result.data)
        }
    },

    async getShopRatings({commit}){
        const result = await reqShopRatings()
        if(result.code === 0){
            commit('RECEIVE_RATINGS', result.data)
        }
    },

    async getShopGoods({commit}){
        const result = await reqShopGoods()
        if(result.code === 0){
            commit('RECEIVE_GOODS', result.data)
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