import Vue from 'vue'

import App from './App.vue'

import router from './router'

import store from '@/store'

import {Button} from 'mint-ui'

import VueLazyload from 'vue-lazyload'

//加载即可
import '@/mock/mockServer'

import '@/filters'

import loading from '@/common/images/loading.gif'

//以阻⽌vue在启动时⽣成⽣产提⽰
Vue.config.productionTip = false

//注册全局组件标签
Vue.component(Button.name, Button)//<mt-button> 


Vue.use(VueLazyload, { //内部自定义一个指令lazy
  loading
})


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
