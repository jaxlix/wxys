import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// import mutations from './mutations'

const stores = new Vuex.Store({
  state: {
    keyWord: '', // 搜索关键字
    dbtype: 'renkou' // 数据库标识，用于分类搜索
  },
  getters: {
    keyWord (state) {
      return state.keyWord
    },
    dbtype (state) {
      return state.dbtype
    }
  },
  mutations: {
    KEYWORD (state, res) {
      state.keyWord = res
    },
    DBTYPE (state, res) {
      state.dbtype = res
    }
  }
  // modules: {
  //     mutations
  // }
})

export default stores
