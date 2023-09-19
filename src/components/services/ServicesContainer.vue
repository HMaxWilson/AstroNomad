<template>
  <div class="services-container">
    <div class="block sm:flex py-4 space-y-4 sm:space-y-0 sm:space-x-4">
      <div class="flex flex-col border-box space-y-4 w-full sm:w-1/2">
        <ServiceCard title="Design">
          Need a website? We can design and build it for you from scratch. We can also help with any other web design
          needs you may have, such as a redesign of an existing site.
        </ServiceCard>
        <ServiceCard title="Development">
          If you already have a design, we can turn that design into a fully functional website. We can also help with
          any other web development needs you may have, as we have experience with a wide range of technologies and
          frameworks.
        </ServiceCard>
        <ServiceCard title="Maintenance">
          Business too busy to keep your website up to date? We can help with that. We can look after your website for
          you, keeping it up to date and secure, so you can focus on running your business.
        </ServiceCard>
        <ServiceCard title="SEO Services">
          Having an online presence sometimes isn't enough these days, with so many options when somebody researches
          we can make sure your site stand out before it's even been viewed. We can help you get to the top of the
          search results on Google, Bing and Yahoo.
        </ServiceCard>
      </div>

      <div class="flex flex-col border-box space-y-4 w-full sm:w-1/2">
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
</template>

<script setup>
import ServiceCard from "@/components/services/ServiceCard.vue";
</script>