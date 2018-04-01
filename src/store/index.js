import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  name: ''
}

// actions可以调用mutations中方法
// const actions = {
//   // context 上下文对象
//   addACtion (context) {
//     context.commit(add())
//   }
// }

/* eslint-disable no-new */
export default new Vuex.Store({
  state,
  mutations
})
