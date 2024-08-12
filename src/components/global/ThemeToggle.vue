<template>
  <div class="flex">
    <div class="relative cursor-pointer" @click="toggleDarkMode">
      <input type="checkbox" :checked="isDark" class="sr-only">
      <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
      <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
    </div>
  </div>
</template>

<script setup>
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark, toggleDarkMode } = useDarkMode()
</script>

<style scoped>
  input:checked ~ .dot {
    transform: translateX(100%);
    background-color: #48bb78;
  }
</style>