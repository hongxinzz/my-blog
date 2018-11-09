import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  tags: []
}

const mutations = {
  getTagsFrist (stats, tagArr) {
    stats.tags = tagArr
  }
}

export default new Vuex.Store({
  state, mutations
})
