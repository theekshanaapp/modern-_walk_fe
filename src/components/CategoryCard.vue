<template>
    <div @click="handleRedirect(category.ref)" :class="['category-card border border-gray-300 rounded-3xl text-center flex flex-col justify-center items-center text-white cursor-pointer', categoryBackground]">
        <h3 class="text-3xl font-semibold mt-5 mb-5">{{ category.name }}</h3>
    </div>
</template>

<script>
export default {
    props: {
        category: {
            type: Object,
            required: true,
        },
    },
    computed: {
        categoryBackground() {
            if (this.category.name === "Men's Clothing") {
                return 'bg-[#2BD9AF]'; // Custom background color for men's clothing
            } else if (this.category.name === "Women's Clothing") {
                return 'bg-[#FF5E84]'; // Custom background color for women's clothing
            }
            return 'bg-gray-100'; // Default background color
        },
    },
    methods: {
        handleRedirect(ref) {
            this.$router.push(`/${ref}-clothing`);
        }
    }
};
</script>

<style scoped>
.category-card {
    @apply transition-shadow duration-300 hover:shadow-2xl;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
