import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* eslint-disable no-new */
export default new Vuex.Store({
  state: {
    name: ''
  },
  mutations: {
    newName (state, msg) {
      state.name = msg
    }
  }
})
