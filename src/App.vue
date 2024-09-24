<template>
  <div id="app">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  },
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Ensure full height for scrolling */
}

.main-content {
  flex: 1; /* Allow the main content to fill the available space */
  overflow-y: auto; /* Enable scrolling for the main content */
  padding-top: 60px; /* Add padding to prevent content from hiding behind the header */
}

header {
  position: fixed; /* Fixes the header at the top */
  top: 0;
  left: 0;
  right: 0;
  height: 60px; /* Adjust according to your header height */
  background-color: white; /* Set a background color */
  z-index: 1000; /* Ensure the header stays above other content */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional: Add a shadow for depth */
}
</style>

