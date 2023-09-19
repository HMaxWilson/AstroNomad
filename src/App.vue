<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/global/TheHeader.vue'
import Footer from './components/global/TheFooter.vue'
</script>

<template>
  <Header />

  <main class="container mx-auto text-gray-300 text-center">
    <RouterView />
  </main>

  <Footer class="z-40"/>
</template>

<style scoped>

</style>