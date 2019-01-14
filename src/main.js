import Vue from "vue";
import App from './App.vue'
import router from './router/index'
import store from './store/store.js'
import axios from 'axios'
import Highlight from './plugins/highlight.js'
import 'highlight.js/styles/atom-one-dark-reasonable.css'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(Highlight)



new Vue({
  el: '#app',
  router,
  store,
  render:h =>h(App),
}).$mount('#app');
