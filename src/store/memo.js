import Memo from '~/models/Memo';
import MemoManager from '~/models/MemoManager';

const TYPES = Object.freeze({
  PUSH: 'PUSH',
});

const stateObject = {
  memoManager: new MemoManager({}),
};

const getters = {
  memos(state) {
    return state.memoManager.memos;
  },
};

const mutations = {
  [TYPES.PUSH](argState, memo) {
    argState.memoManager.push(memo);
  },
};

const actions = {
  push({ commit, state }, { title, body }) {
    const memo = new Memo({
      id: state.memoManager.getNextId(),
      title,
      body,
    });
    commit(TYPES.PUSH, memo);
  },
};

export default {
  namespaced: true,
  state: stateObject,
  getters,
  mutations,
  actions,
};
