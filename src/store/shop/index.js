import {reqShopInfo, reqShopRatings, reqShopGoods} from '@/api'
import Vue from 'vue'

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
    }, 

    INCREMENT_FOOD_COUNT(state, food){
        if(!food.count){ //第一次点击
            // food.count = 1//新增属性（没有数据绑定）
            // 使用Vue.set()
            //对象 属性名 属性值
            Vue.set(food, 'count', 1)
        } else {
            food.count++
        }
    },

    DECREMENT_FOOD_COUNT(state, food){
        
        if(food.count){
            food.count--
        }
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

    async getShopGoods({commit}, callback){
        const result = await reqShopGoods()
        if(result.code === 0){
            commit('RECEIVE_GOODS', result.data)
            callback && callback()
        }
    },

    //同步更新food中的count值
    updateFoodCount({commit}, {isAdd, food}){
        
        if(isAdd){
            commit('INCREMENT_FOOD_COUNT', food)
        } else {
            commit('DECREMENT_FOOD_COUNT', food)
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