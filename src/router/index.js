/* 
    路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

import MSite from '../pages/MSite'
import Order from '../pages/Order'
import Profile from '../pages/Profile'
import Search from '../pages/Search'
import Login from '../pages/Login'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    //所有路由
    routes: [
        {
            path: '/msite',
            component: MSite,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/',
            redirect: '/msite'
        },
        {
            path: '/login',
            component: Login,
            // meta: {
            //     showFooter: false
            // }
        }
    ]
})