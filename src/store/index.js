import Vue from "vue";
import Vuex from "vuex";

import api from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apartments: [],
    favorite: [],
    loading: false,
  },
  mutations: {
    setApartments(state, payload) {
      state.apartments = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    toggleFavorite(state, payload) {
      const idx = state.favorite.findIndex((fav) => fav.id === payload.id);

      if (idx > -1) {
        state.favorite.splice(idx, 1);
      } else {
        state.favorite.push(payload);
      }
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
});
