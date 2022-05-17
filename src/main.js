import Vue from 'vue'

import App from './App.vue'

import router from './router'

import store from '@/store'

import {Button} from 'mint-ui'

//加载即可
import '@/mock/mockServer'

//以阻⽌vue在启动时⽣成⽣产提⽰
Vue.config.productionTip = false

//注册全局组件标签
Vue.component(Button.name, Button)//<mt-button> 

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
