// 搜索关键字
// const KEYWORD = 'KEYWORD';

const state = {
    keyWord: '' // 搜索关键字
};

import getters from './getters';

const mutations = {
    KEYWORD(state, res) {
        state.keyWord = res;
    }
}

export default {
    state,
    getters,
    mutations
}