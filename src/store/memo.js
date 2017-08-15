import Memo from '~/models/Memo';
import MemoManager from '~/models/MemoManager';

const TYPES = Object.freeze({
  PUSH: 'PUSH',
  UPDATE: 'UPDATE',
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

const stateObject = {
  memoManager: getMemoManager(),
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
