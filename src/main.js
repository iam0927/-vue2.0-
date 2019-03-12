// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import store from './store'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
window.Promise = Promise

Vue.use(iview)
Vue.prototype.$axios = axios
Vue.prototype.$host = process.env.NODE_ENV === 'development' ? '/api' : ''

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
