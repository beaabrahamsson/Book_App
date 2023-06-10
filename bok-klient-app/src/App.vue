<script>
import { RouterView } from 'vue-router'
import Header from "./components/Header.vue";
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    RouterView,
    Footer
}
}
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
  main {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
  }
</style>
