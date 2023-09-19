<script setup>
import ServiceCard from "@/components/services/ServiceCard.vue";
import {ref} from "vue";

  const showAnnually = ref(false);
</script>

<template>
  <div class="services-container">
    <div class="mx-auto max-w-screen-xl">

      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 text-gray-300">
        <h2 class="mb-2 text-4xl tracking-tight font-extrabold">Web services for every requirement</h2>
        <p class="mb-10 font-light sm:text-lg">
          At AstroNomad, we're dedicated to helping businesses thrive in the digital age. Our wide range of services is
          designed to empower your brand, boost online visibility, and enhance user experiences. Explore how we can
          bring your vision to life and transform your online presence.
        </p>

        <div class="flex justify-center">
          <p class="mr-2 my-auto">Monthly</p>
          <label class="switch">
            <p class="relative -top-5 pointer-events-none text-sm text-gray-400">Pay</p>
            <input type="checkbox" v-model="showAnnually">
            <span class="slider round"></span>
          </label>
          <p class="ml-2 my-auto">Annually</p>
        </div>
      </div>

      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        <ServiceCard title="Development">
          If you already have a design to hand, our team can seamlessly translate it into a fully functional website.
          Beyond this, we offer comprehensive web development solutions covering a wide spectrum of technologies and
          frameworks. With our extensive experience, we stand ready to meet all your web development needs, ensuring
          your online presence is both visually appealing and technically robust.
        </ServiceCard>
        <ServiceCard title="Maintenance" :showAnnually="showAnnually" showPriceNote="true" priceMonthly="£100" priceAnnually="£85">
          Running a busy business? Let us take care of your website maintenance and security. With our expertise,
          we ensure your site stays up to date and secure, allowing you to concentrate on your core business operations.
        </ServiceCard>
        <ServiceCard title="Design">
          If you need a website we create tailored online solutions from scratch or revamp existing sites.
          Our expertise ensures a strong online presence that aligns with your brand and goals.
          Let's bring your vision to life.
        </ServiceCard>
      </div>
    </div>

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

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>