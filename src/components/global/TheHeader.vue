<template>
  <header class="text-gray-300 z-31">
    <div class="container mx-auto py-4 px-4">
      <div class="w-full flex justify-between">
        <RouterLink to="/" class="my-auto">
          <h2 class="block text-2xl font-medium my-auto">
            Astro<span class="font-bold">Nomad</span>
          </h2>
        </RouterLink>


        <HeaderNavigation />
        <MobileMenu class="z-30" />

      </div>
    </div>
  </header>
</template>

<script setup>
import HeaderNavigation from "@/components/global/HeaderNavigation.vue";
import MobileMenu from "@/components/global/MobileMenu.vue";
</script>