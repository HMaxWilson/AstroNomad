<template>
  <div id="stars" class="w-screen h-screen absolute pointer-events-none">
    <div class="large"></div>
    <div class="medium"></div>
    <div class="small"></div>
  </div>
</template>

<style scoped>
#stars div{
  width: 100%;
  height: 100%;
  position: absolute;
}

#stars .large {
  position: absolute;
  background: url('@/assets/stars_large.png');
}

#stars .medium {
  background: url('@/assets/stars_medium.png');
}

#stars .small {
  background: url('@/assets/stars_small.png');
}
</style>