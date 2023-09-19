<template>
  <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-[#f2f6f8] bg-[#5b5e5f26] rounded-lg border border-[#5b5e5f26] shadow">
    <h3 class="mb-4 text-2xl font-semibold">{{ title }}</h3>
    <p class="font-light sm:text-lg">
      <slot />
    </p>
    <div class="flex justify-center items-baseline my-8">
      <span v-if="priceMonthly || priceAnnually" class="mr-2 text-5xl font-extrabold">{{ showAnnually ? priceAnnually : priceMonthly }}</span>
      <span v-if="showPriceNote" class="text-sm text-[#abaeb0]"> / month</span>
    </div>
  </div>
</template>

<script setup>
  defineProps([
      'title',
      'showAnnually',
      'showPriceNote',
      'priceMonthly',
      'priceAnnually',
  ])
</script>