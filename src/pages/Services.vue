<template>
  <div>
    <p>
      At AstroNomad, we're dedicated to helping businesses thrive in the digital age. Our wide range of services is
      designed to empower your brand, boost online visibility, and enhance user experiences. Explore how we can bring
      your vision to life and transform your online presence.
    </p>

    <div class="services">
      <div class="flex py-4 space-x-4">
        <div class="flex flex-col w-full border-box space-y-4 w-1/2">
          <ServiceCard title="Web Design">
            description
          </ServiceCard>
          <ServiceCard title="Web Design">
            description
          </ServiceCard>
          <ServiceCard title="Web Design">
            description
          </ServiceCard>
          <ServiceCard title="Web Design">
            description
          </ServiceCard>
        </div>

        <div class="flex flex-col w-full text-center border-box space-y-4 w-1/2">
          <ServiceCard title="Web Design">
            description
          </ServiceCard>
          <ServiceCard title="Web Design">
            description
          </ServiceCard>
          <ServiceCard title="Web Design">
            description
          </ServiceCard>
          <ServiceCard title="Web Design">
            description
          </ServiceCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ServiceCard from '@/components/services/ServiceCard.vue'

</script>