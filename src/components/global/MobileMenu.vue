<template>
  <div class="flex sm:hidden my-auto">
    <span class="cursor-pointer text-2xl">
      <div class="icon nav-icon z-50 align-middle" :class="{ 'open' : !mobileMenuClosed }" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </span>

    <div class="flex text-gray-300 fixed text-left top-0 right-0 ease-in-out duration-700 w-full"
         :class="{ 'translate-x-full' : mobileMenuClosed }"
    >
      <div class="w-1/5" @click="toggleMobileMenu"></div>
      <div class="gradient-background w-4/5 p-4 pt-12">
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

<style scoped>
.nav-icon{
  width: 20px;
  height: 20px;
  position: relative;
  transition: .1s;
  margin: 10px 10px;
  cursor: pointer;
  display: inline-block;
}
.nav-icon span{
  width: 3px;
  height: 3px;
  background-color: #fff;
  display: block;
  border-radius: 50%;
  position: absolute;

}
.nav-icon:hover span{
  transform: scale(1.2);
  transition: 350ms cubic-bezier(.8, .5, .2, 1.4);
}
.nav-icon span:nth-child(1){
  left: 0;
  top: 0;
}
.nav-icon span:nth-child(2){
  left: 8px;
  top: 0;
}
.nav-icon span:nth-child(3){
  right: 0;
  top: 0;
}
.nav-icon span:nth-child(4){
  left: 0;
  top: 8px;
}
.nav-icon span:nth-child(5){
  position: absolute;
  left: 8px;
  top: 8px;
}
.nav-icon span:nth-child(6){
  right: 0px;
  top: 8px;
}
.nav-icon span:nth-child(7){
  left: 0px;
  bottom: 0px;
}
.nav-icon span:nth-child(8){
  position: absolute;
  left: 8px;
  bottom: 0px;
}
.nav-icon span:nth-child(9){
  right: 0px;
  bottom: 0px;
}
.nav-icon.open{
  transform: rotate(180deg);
  cursor: pointer;
  transition: .2s cubic-bezier(.8, .5, .2, 1.4);
}
.nav-icon.open span{
  border-radius: 50%;
  transition-delay: 200ms;
  transition: .5s cubic-bezier(.8, .5, .2, 1.4);
}
.nav-icon.open span:nth-child(2) {
  left: 4px;
  top: 4px;
}
.nav-icon.open span:nth-child(4) {
  left: 4px;
  top: 12px;
}
.nav-icon.open span:nth-child(6) {
  right: 5px;
  top: 4px;
}
.nav-icon.open span:nth-child(8) {
  left: 12px;
  bottom: 5px;
}
</style>
```