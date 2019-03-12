import Vue from 'vue'
import Vuex from 'vuex'
import  * as action from './action/action'
import  * as getters from './getters/getters'
import  state from './state/state'
import  mutations from './mutation/mutation'

Vue.use(Vuex);



export  default new Vuex.Store({
    action,
    getters,
    state,
    mutations
})
