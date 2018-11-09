// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import iView from 'iview'
import store from './store/store.js'
import 'iview/dist/styles/iview.css'
import Highlight from './plugins/highlight'
import 'highlight.js/styles/atom-one-dark-reasonable.css'

Vue.config.productionTip = false
Vue.use(iView)
// Vue.use(axios);
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
