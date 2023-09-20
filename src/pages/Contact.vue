<template>
  <div class="mx-auto max-w-screen-md text-center lg:mb-12 text-gray-300">
    <h2 class="mb-2 text-4xl tracking-tight font-extrabold">Contact Us</h2>
    <p class="mb-10 font-light sm:text-lg">
      Have questions, feedback, or ready to kickstart your project with us? We'd love to hear from you! Feel free to
      get in touch using the form below or through our contact information.
    </p>
  </div>
  <div class="flex flex-wrap mx-auto mb-12">
    <div class="p-4 text-[#f2f6f8] bg-[#5b5e5f26] rounded-lg border border-[#5b5e5f26] shadow w-full sm:w-1/2">
      <form class="flex flex-wrap" accept-charset="UTF-8" action="https://www.formbackend.com/f/b749cbfa9f170be9" method="POST">
        <div class="w-full sm:w-1/2 mb-4 sm:pr-2">
          <label class="block mb-1 font-bold" for="name">Name</label>
          <input class="bg-gray-300 rounded w-full" type="text" id="name" name="name" required>
        </div>

        <div class="w-full sm:w-1/2 mb-4 sm:pl-2">
          <label class="block mb-1 font-bold" for="email">Email</label>
          <input class="bg-gray-300 rounded w-full" type="email" id="email" name="email" required>
        </div>

        <div class="w-full mb-4">
          <label class="block mb-1 font-bold" for="message">Message</label>
          <textarea class="bg-gray-300 rounded w-full" id="message" name="message" required></textarea>
        </div>

        <button class="bg-gray-800 text-gray-300 rounded px-2 py-4 w-full mt-auto" type="submit">Send message</button>
      </form>
    </div>

    <div class="px-4 w-full sm:w-1/2 text-left space-y-8">
      <div class="contact-info">
        <h2>Address:</h2>
        <ul>
          <li>Flat 6, 5 Nelson Road,</li>
          <li>Westbourne, Dorset</li>
          <li>BH4 9JB</li>
        </ul>
      </div>

      <div class="contact-info">
          <h2>Phone:</h2>
          <a href="tel:01202123456">01202 123456</a>
      </div>

      <div class="contact-info">
        <h2>Email:</h2>
        <a href="mailto:hello@astronomad.co.uk">hello@astronomad.co.uk</a>
      </div>
    </div>
  </div>
  <div class="mx-auto max-w-screen-md text-center mb-12 text-gray-300">
    <p class="mb-10 font-light sm:text-lg">
      We look forward to connecting with you and helping you with your web development needs!
    </p>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>
<script setup>
</script>