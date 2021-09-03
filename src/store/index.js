import Vue from "vue";
import Vuex from "vuex";

import api from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apartments: [],
    loading: false,
  },
  mutations: {
    setApartments(state, payload) {
      state.apartments = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    async getApartments({ commit }) {
      commit("setLoading", true);

      let apartments;

      try {
        apartments = await api.apartments.getAll();
      } catch (error) {
        commit("setLoading", false);
      }

      commit("setApartments", apartments);
      commit("setLoading", false);
    },
  },
  modules: {},
});
