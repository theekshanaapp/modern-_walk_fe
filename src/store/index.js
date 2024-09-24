import { createStore } from 'vuex';
import products from './modules/products';
import categories from './modules/categories';

export default createStore({
  modules: {
    products,
    categories,
  },
});
