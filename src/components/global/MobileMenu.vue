<template>
  <div class="flex sm:hidden my-auto">
    <span class="cursor-pointer text-2xl">
      <p @click="toggleMobileMenu">Open</p>
    </span>

    <div class="gradient-background flex text-gray-300 fixed text-left top-0 right-0 ease-in-out duration-700 w-full"
         :class="{ 'translate-x-full' : mobileMenuClosed }"
    >
      <div class="w-1/5" @click="toggleMobileMenu"></div>
      <div class="w-4/5 p-4 pt-12">
        <span class="cursor-pointer text-2xl absolute right-4 top-4">
          <p @click="toggleMobileMenu">Close</p>
        </span>
          <ul class="flex flex-col text-4xl gap-5 font-normal">
            <li><RouterLink class="hover:font-bold" @click="toggleMobileMenu" to="/">Home</RouterLink></li>
            <li><RouterLink class="hover:font-bold" @click="toggleMobileMenu" to="/about">About</RouterLink></li>
            <li><RouterLink class="hover:font-bold" @click="toggleMobileMenu" to="/services">Services</RouterLink></li>
            <li><RouterLink class="hover:font-bold" @click="toggleMobileMenu" to="/contact">Contact</RouterLink></li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const mobileMenuClosed = ref(true);
const toggleMobileMenu = () => {
  mobileMenuClosed.value = !mobileMenuClosed.value;
}
</script>