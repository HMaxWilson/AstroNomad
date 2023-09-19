<template>
  <div class="p-4 text-[#f2f6f8] bg-[#5b5e5f26] rounded-lg border border-[#5b5e5f26] shadow w-1/2 mx-auto">
    <h1 class="text-gray-300">Contact Us</h1>
    <form accept-charset="UTF-8" action="https://www.formbackend.com/f/b749cbfa9f170be9" method="POST">
      <div class="form-fields">
        <label for="name">Name</label>
        <input class="bg-gray-300" type="text" id="name" name="name" required>
      </div>

      <div class="form-fields">
        <label for="email">Email</label>
        <input class="bg-gray-300" type="email" id="email" name="email" required>
      </div>

      <div class="form-fields">
        <label for="message">Message</label>
        <textarea class="bg-gray-300" id="message" name="message" required></textarea>
      </div>

      <button class="bg-gray-800 text-gray-300" type="submit">Send message</button>
    </form>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.form-fields {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 0.9rem;
}
input[type="text"], input[type="email"], textarea {
  border: 1px solid #ccc;
  font-size: 1rem;
  padding: 6px 10px;
  border-radius: 4px;
}
body { display: block }
button[type="submit"] {
  background-color: rgb(67 56 202);
  color: white;
  font-size: 0.8rem;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-weight: 500;
}
</style>
<script setup>
</script>