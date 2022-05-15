import Vue from 'vue'
import App from './App.vue'

import router from './router'

//以阻⽌vue在启动时⽣成⽣产提⽰
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
