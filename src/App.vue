<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/global/TheHeader.vue'
import Footer from './components/global/TheFooter.vue'
import BackgroundStars from './components/global/BackgroundStars.vue'
</script>

<template>
  <BackgroundStars />
  <Header />

  <main class="container mx-auto pt-10 px-12 text-gray-300 text-center">
    <RouterView />
  </main>

  <Footer class="z-40"/>
</template>

<style scoped>

</style>