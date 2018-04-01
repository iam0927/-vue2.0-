import * as types from './mutation-types'

export default {
  [types.NEW_NAME] (state, msg) {
    state.name = msg
  }
}
