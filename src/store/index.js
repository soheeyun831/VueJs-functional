import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    SET_COUNT: (state, no) => {
      if (no) {
        state.count = no;
      }
    },
    INCREASE_COUNT: state => {
      state.count++;
    },
    DECREASE_COUNT: state => {
      state.count = state.count > 0 ? state.count - 1 : 0;
    }
  },
  actions: {
    setCount({ commit }, no) {
      commit("SET_COUNT", no);
    },
    increaseCount({ commit }) {
      commit("INCREASE_COUNT");
    },
    decreaseCount({ commit }) {
      commit("DECREASE_COUNT");
    }
  },
  modules: {}
});
