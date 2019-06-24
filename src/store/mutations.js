// 搜索关键字
// const KEYWORD = 'KEYWORD';
import getters from './getters'

const state = {
  keyWord: '' // 搜索关键字
}

const mutations = {
  KEYWORD (state, res) {
    state.keyWord = res
  }
}

export default {
  state,
  getters,
  mutations
}
