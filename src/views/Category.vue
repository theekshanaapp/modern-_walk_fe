<template>
    <div class="home p-5">
        <section>
            <h2 class="text-2xl font-bold mt-2 mb-5">{{ categoryName }}</h2>
            <div v-if="loading" class="loader">Loading...</div>
            <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <ProductCard v-for="product in sortedProducts" :key="product.id" :product="product" />
            </div>
        </section>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductCard from '../components/ProductCard.vue';

export default {
    components: {
        ProductCard,
    },
    data() {
        return {
            loading: true,
        };
    },
    computed: {
        categoryName() {
            return this.$route.params.type === "womens" ? "Women's Clothing" : "Men's Clothing";
        },
        ...mapGetters('products', ['sortedProducts']),
    },
    methods: {
        ...mapActions('products', ['fetchProductsByCategory']),
    },
    async mounted() {
        this.loading = true;
        try {
            const category = this.$route.params.type === 'womens' ? "women's clothing" : "men's clothing";
            await this.fetchProductsByCategory(category);
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
