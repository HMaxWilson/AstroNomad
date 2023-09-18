<template>
  <header class="text-gray-300">
    <div class="container mx-auto py-4 px-4">
      <div class="w-full flex col-span-1 sm:col-span-2 lg:col-span-2 justify-between">
        <RouterLink to="/">
          <h2 class="block text-2xl font-medium my-auto">
            Astro<span class="font-bold">Nomad</span>
          </h2>
        </RouterLink>


        <HeaderNavigation />
        <MobileMenu />

      </div>
    </div>
  </header>
</template>

<script setup>
import HeaderNavigation from "@/components/global/HeaderNavigation.vue";
import MobileMenu from "@/components/global/MobileMenu.vue";
</script>