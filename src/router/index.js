/* 
    路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

// import MSite from '../pages/MSite'
// import Order from '../pages/Order'
// import Profile from '../pages/Profile'
// import Search from '../pages/Search'
// import Login from '../pages/Login'
// import Shop from '@/pages/Shop'
// import ShopGoods from '@/pages/Shop/ShopGoods'
// import ShopRatings from '../pages/Shop/ShopRatings'
// import ShopInfo from '../pages/Shop/ShopInfo'

const MSite = () =>  import('@/pages/MSite') 
const Order = () =>  import('@/pages/Order') 
const Profile = () =>  import('@/pages/Profile') 
const Search = () =>  import('@/pages/Search') 

const Login = () =>  import('@/pages/Login') 
const Shop = () =>  import('@/pages/Shop') 

const ShopGoods = () =>  import('@/pages/Shop/ShopGoods') 
const ShopRatings = () =>  import('@/pages/Shop/ShopRatings') 
const ShopInfo = () =>  import('@/pages/Shop/ShopInfo') 


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
        },
        {
            path: '/shop',
            component: Shop,
            children: [
                {
                    path: '/shop/goods',
                    component: ShopGoods
                },
                {
                    path: '/shop/ratings',
                    component: ShopRatings
                },
                {
                    path: '/shop/info',
                    component: ShopInfo
                },
                {
                    path: '/shop',
                    redirect: '/shop/goods'
                }
            ]
        }

    ]
})
