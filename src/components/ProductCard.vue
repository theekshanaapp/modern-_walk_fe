<template>
    <div class="product-card border border-gray-300 rounded-3xl text-center flex flex-col cursor-pointer">
        <h3 class="text-lg font-semibold mt-5 mb-5">{{ truncatedTitle }}</h3>
        <div class="image-container mb-2 flex-shrink-0">
            <img :src="product.image" alt="Product Image" class="product-image" />
        </div>
        
        <div 
            :class="['price-description-box p-4 border border-gray-300 rounded-3xl mt-4 flex-grow', categoryBackground]"
        >
            <p class="text-xl font-bold text-lightBlue">${{ product.price }}</p>
            <p class="mt-2 text-gray-700 text-base leading-relaxed">
                {{ truncateDescription }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    computed: {
        truncatedTitle() {
            return this.product.title.length > 20
                ? this.product.title.substring(0, 20) + '...'
                : this.product.title;
        },
        truncateDescription() {
            return this.product.description.length > 120
                ? this.product.description.substring(0, 120) + '...'
                : this.product.description;
        },
        categoryBackground() {
            if (this.product.category === "men's clothing") {
                return 'bg-[#2BD9AF]'; // Custom background color for men's clothing
            } else if (this.product.category === "women's clothing") {
                return 'bg-[#FF5E84]'; // Custom background color for women's clothing
            }
            return 'bg-gray-100'; // Default background color
        },
    },
};
</script>

<style scoped>
.product-card {
    @apply transition-shadow duration-300 hover:shadow-2xl;
    /* margin: 1.0rem; */
}

.price-description-box {
    @apply transition duration-300;
}

.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 200px;
}

.product-image {
    width: 200px;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.image-container:hover .product-image {
    transform: scale(1.1);
}
</style>
