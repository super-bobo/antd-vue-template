import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'

Vue.config.productionTip = false

import '@/plugins/antd.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
