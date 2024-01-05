<template>
    <div class="">
        <div class="w-auto h-12 border-y-[2px] gap-8 border-white overflow-hidden flex flex-nowrap items-center marquee" ref="main">
            <nuxtImg class="item w-8 block" v-for="item in 40" src="/visual/picnic-b/bg.png"></nuxtImg>
        </div>
    </div>
  </template>
  
  <script setup>
  import gsap from 'gsap';
  
  const main = ref(null);
  let ctx;
  onMounted(async () => {
    await nextTick();
    ctx = gsap.context(() => {
      // eslint-disable-next-line no-unused-vars
      const loop1 = horizontalLoop('.marquee .item', {
        paused: false,
        repeat: -1,
        reversed: false,
      });
    }, main.value);
  });
  
  onUnmounted(() => {
    ctx.revert();
  });
  </script>
  
  <style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.content {
  margin-top: 40px;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}
.marquee__row {
  padding: 10px;
}

.marquee--item,
.item {
  padding: 0 0rem;
}

</style>
  