import Memo from '~/models/Memo';
import MemoManager from '~/models/MemoManager';

const TYPES = Object.freeze({
  PUSH: 'PUSH',
  UPDATE: 'UPDATE',
});

const stateObject = {
  memoManager: new MemoManager({}),
};

const getters = {
  get(state) {
    return (id) => {
      return state.memoManager.get(id);
    };
  },
  memos(state) {
    return state.memoManager.memos;
  },
};

const mutations = {
  [TYPES.PUSH](state, memo) {
    state.memoManager.push(memo);
  },
  [TYPES.UPDATE](state, memo) {
    state.memoManager.update(memo);
  },
};

const actions = {
  save({ commit, state }, { id, title, body }) {
    return new Promise((resolve) => {
      const isCreate = typeof id === 'undefined';
      const memo = new Memo({
        id: isCreate === true ? state.memoManager.getNextId() : id,
        title,
        body,
      });
      const mutationType = isCreate === true ? TYPES.PUSH : TYPES.UPDATE;
      commit(mutationType, memo);
      resolve(memo);
    });
  },
};

export default {
  namespaced: true,
  state: stateObject,
  getters,
  mutations,
  actions,
};
