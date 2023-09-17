<template>
  <div class="flex flex-col p-2 bg-gray-800 rounded drop-shadow-lg">
    <h3 class="font-bold">{{ title }}</h3>
    <slot />
  </div>
</template>

<script setup>
  defineProps([
      'title'
  ])
</script>