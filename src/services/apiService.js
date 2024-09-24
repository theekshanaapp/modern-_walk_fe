const BASE_URL = 'https://fakestoreapi.com/';

const apiService = {
  async getProducts() {
    try {
      const response = await fetch(`${BASE_URL}products?limit=4&sort=desc`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
  async getCategories() {
    try {
      const response = await fetch(`${BASE_URL}products/categories`);
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
  async getProductsByCategory(category) {
    try {
      const response = await fetch(`${BASE_URL}products/category/${category}`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }
  
};

export default apiService;
