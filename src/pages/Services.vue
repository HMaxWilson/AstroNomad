<template>
  <div class="services">
    <div class="mx-auto max-w-screen-md text-center lg:mb-12 text-gray-300">
      <h2 class="mb-2 text-4xl tracking-tight font-extrabold">Web services for every requirement</h2>
      <p class="mb-10 font-light sm:text-lg">
        At AstroNomad, we're dedicated to helping businesses thrive in the digital age. Our wide range of services is
        designed to empower your brand, boost online visibility, and enhance user experiences. Explore how we can
        bring your vision to life and transform your online presence.
      </p>
    </div>

    <ServicesContainer />

    <div class="flex flex-col justify-center py-8 text-gray-300">
      <p class="font-light sm:text-lg">
        Not sure what package will work for you? No problem! Get in touch today to find a solution that works for you.
      </p>
      <RouterLink class="text-3xl" to="/contact">
        <button class="mt-8 p-8 bg-gray-300 font-bold rounded-md text-xl bg-opacity-25 hover:bg-opacity-100 hover:text-gray-800">
          Get in touch
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
  import ServicesContainer from '@/components/services/ServicesContainer.vue'
</script>