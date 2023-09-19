<template>
  <div class="flex flex-col p-2 bg-[#00000099] rounded drop-shadow-lg">
    <h3 class="font-bold border-b-2 mx-auto mb-2">{{ title }}</h3>
    <slot />
  </div>
</template>

<script setup>
  defineProps([
      'title'
  ])
</script>