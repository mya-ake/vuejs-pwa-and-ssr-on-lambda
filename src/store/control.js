const TYPES = Object.freeze({
  SET_SHOW_ADD_BUTTON: 'SET_SHOW_ADD_BUTTON',
});

const stateObject = {
  isShowAddButton: true,
};

const mutations = {
  [TYPES.SET_SHOW_ADD_BUTTON](state, payload) {
    state.isShowAddButton = payload;
  },
};

const actions = {
  setShowAddButton({ commit }, bool) {
    commit(TYPES.SET_SHOW_ADD_BUTTON, bool);
  },
};

export default {
  namespaced: true,
  state: stateObject,
  mutations,
  actions,
};
