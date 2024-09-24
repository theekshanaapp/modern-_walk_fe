<template>
    <div class="home p-5">
        <div v-if="loading" class="loader">Loading...</div>
        <div v-else>
            <section>
                <h2 class="text-2xl font-bold mt-2 mb-5">Flash Sale</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <ProductCard v-for="product in sortedProducts" :key="product.id" :product="product" />
                </div>
            </section>
            <section>
                <h2 class="text-2xl font-bold mt-10 mb-10">Categories</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <CategoryCard v-for="(category, index) in filteredCategories" :key="index" :category="category" />
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductCard from '../components/ProductCard.vue';
import CategoryCard from '../components/CategoryCard.vue';

export default {
    components: {
        ProductCard,
        CategoryCard,
    },
    data() {
        return {
            loading: true,
        };
    },
    computed: {
        ...mapGetters('products', ['sortedProducts']),
        ...mapGetters('categories', ['filteredCategories']),
    },
    methods: {
        ...mapActions('products', ['fetchProducts']),
        ...mapActions('categories', ['fetchCategories']),
    },
    async mounted() {
        this.loading = true;
        try {
            await this.fetchProducts();
            await this.fetchCategories();
        } catch (error) {
            console.error(error);
        } finally {
            this.loading = false;
        }
    },
};
</script>

<style scoped>
.loader {
    text-align: center;
    font-size: 1.5rem;
    color: gray;
}
</style>
