import Vue from 'vue';
import Vuex from 'vuex';

import moduleMemo from './memo';
import moduleControl from './control';

Vue.use(Vuex);

export const createStore = () => {
  return new Vuex.Store({
    modules: {
      memo: moduleMemo,
      control: moduleControl,
    },
  });
};
