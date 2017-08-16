import Memo from '~/models/Memo';
import MemoManager from '~/models/MemoManager';

const TYPES = Object.freeze({
  PUSH: 'PUSH',
  UPDATE: 'UPDATE',
  INIT: 'INIT',
});

const KEYS = Object.freeze({
  MEMOS: 'memos',
});

const getMemoManager = () => {
  try {
    const localMemos = window.localStorage.getItem(KEYS.MEMOS);
    return localMemos === null ? new MemoManager({}) : MemoManager.fromJSONString(localMemos);
  } catch (err) {
    return new MemoManager({});
  }
};

const stateObject = () => ({
  memoManager: getMemoManager(),
});

const getters = {
  getMemo(state) {
    return (id) => {
      return state.memoManager.getMemo(id);
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
  [TYPES.INIT](state, memoManager) {
    state.memoManager = memoManager;
  },
};

const actions = {
  init({ commit }) {
    commit(TYPES.INIT, getMemoManager());
  },
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
  saveLocal({ state }) {
    window.localStorage.setItem(KEYS.MEMOS, state.memoManager.toJSON());
  },
};

export default {
  namespaced: true,
  state: stateObject,
  getters,
  mutations,
  actions,
};
