import apiService from '../../services/apiService';

const state = {
  categories: [],
  error: null,
};

const getters = {
  filteredCategories: (state) => {
    const desiredCategories = ['men\'s clothing', 'women\'s clothing'];
    return state.categories
      .filter(category => desiredCategories.includes(category.toLowerCase()))
      .map(category => ({
        name: category.replace(/(?:^|\s)\S/g, a => a.toUpperCase()),
        ref: category === "men's clothing" ? 'mens' : 'womens'
      }));
  },
};

const actions = {
  async fetchCategories({ commit }) {
    try {
      const categories = await apiService.getCategories();
      commit('setCategories', categories);
    } catch (error) {
      commit('setError', error);
    }
  },
};

const mutations = {
  setCategories: (state, categories) => (state.categories = categories),
  setError: (state, error) => (state.error = error),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
