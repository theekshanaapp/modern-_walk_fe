<template>
    <header class="bg-lightGray text-customGray py-4">
        <div class="container mx-auto text-center">
            <h1 class="font-roboto text-3xl font-bold cursor-pointer" @click="goToHomepage" >Modern Walk</h1>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        goToHomepage() {
            this.$router.push('/');
        },
    }
}
</script>

<style scoped>
.font-roboto {
    font-family: 'Roboto', sans-serif;
}
</style>