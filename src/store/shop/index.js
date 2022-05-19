import {reqShopInfo, reqShopRatings, reqShopGoods} from '@/api'
import Vue from 'vue'

const state = {
    goods: [], //商品列表
    ratings: [], //商家评价列表
    info: {},   //商家信息
    cartFoods: [], //购物车中食物列表
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

            state.cartFoods.push(food) 

        } else {
            food.count++

        }
    },

    DECREMENT_FOOD_COUNT(state, food){
        
        if(food.count){
            food.count--
            if(food.count === 0){
                state.cartFoods.splice(state.cartFoods.indexOf(food), 1) 
            }
        }
    },

    RECEIVE_CLEAR_CART(state){
        //清除food中的count
        state.cartFoods.forEach(food => food.count = 0 )
        //移除购物车中所有项
        state.cartFoods = []
    }

}

const actions = {

    async getShopInfo({commit}){
        const result = await reqShopInfo()
        if(result.code === 0){
            commit('RECEIVE_INFO', result.data)
        }
    },

    async getShopRatings({commit}, callback){
        const result = await reqShopRatings()
        if(result.code === 0){
            commit('RECEIVE_RATINGS', result.data)
            callback && callback()
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
        
    },

    //
    clearCart({commit}){
        commit('RECEIVE_CLEAR_CART')
    }

}

const getters = {
    totalCount(state){
        return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0)
    }, 
    totalPrice(state){
        return state.cartFoods.reduce((preTotal, food) => preTotal + food.count * food.price, 0)
    },
    positive(state){
        return state.ratings.reduce((preTotal, rating) => preTotal + (rating.rateType=== 0? 1: 0), 0)
    }
}

export default {
    state, 
    mutations,
    actions,
    getters
}