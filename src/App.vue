<template>
  <Header />

  <main class="text-gray-300 text-center px-2">
    <div class="container mx-auto">
      <RouterView />
    </div>
  </main>

  <Footer class="z-40"/>
</template>

<script setup>
  import { RouterView } from 'vue-router'
  import Header from './components/global/TheHeader.vue'
  import Footer from './components/global/TheFooter.vue'
</script>