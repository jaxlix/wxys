import Vue from 'vue'
import App from './App.vue'
import './assets/css/rest.css'
import './assets/icon/iconfont.css'
import FastClick from 'fastclick'
import router from './router/router'
import store from './store/index'
import { api } from './api/api'
import { post, get } from './http/http'
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$api = api
FastClick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
