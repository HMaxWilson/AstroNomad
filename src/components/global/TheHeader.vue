<template>
  <header class="bg-gray-100 dark:bg-black text-black dark:text-gray-300 z-31 drop-shadow-lg">
    <div class="container mx-auto py-4 px-4">
      <div class="w-full flex justify-between">
        <RouterLink to="/" class="my-auto">
          <h2 class="flex text-2xl font-medium my-auto">
            <img src="@/assets/logo.png" alt="AstroNomad logo" height="32" width="32">
            <p class="pl-2 header-font">Astro<span class="font-bold header-font">Nomad</span></p>
          </h2>
        </RouterLink>


        <HeaderNavigation />
        <MobileMenu class="z-30" />

        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<script setup>
  import HeaderNavigation from "@/components/global/HeaderNavigation.vue";
  import MobileMenu from "@/components/global/MobileMenu.vue";
  import ThemeToggle from '@/components/global/ThemeToggle.vue'
</script>