import apiService from '../../services/apiService';

const state = {
  products: [],
  loading: false,
  error: null,
};

const getters = {
  sortedProducts: (state) => {
    return state.products;
  },
};

const actions = {
  async fetchProducts({ commit }) {
    commit('setLoading', true);
    try {
      const products = await apiService.getProducts();
      commit('setProducts', products);
    } catch (error) {
      commit('setError', error);
    } finally {
      commit('setLoading', false);
    }
  },
  async fetchProductsByCategory({ commit }, category) {
    commit('setLoading', true);
    try {
      const products = await apiService.getProductsByCategory(category);
      commit('setProducts', products);
    } catch (error) {
      commit('setError', error);
    } finally {
      commit('setLoading', false);
    }
  },
};

const mutations = {
  setProducts: (state, products) => (state.products = products),
  setLoading: (state, status) => (state.loading = status),
  setError: (state, error) => (state.error = error),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
