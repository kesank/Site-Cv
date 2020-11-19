import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/style/style.scss'

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
Vue.prototype.$http = axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
