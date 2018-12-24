// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'
import Highlight from './plugins/highlight'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
const Vue = require('vue')
const axios = require('axios')

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(Highlight)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
