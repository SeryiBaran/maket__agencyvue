<script setup lang="ts">
// import { useScroll } from '@vueuse/core'
// import { useMotion } from '@vueuse/motion'
import Index01Hero from '~/pagesSections/index/Index01Hero.vue'
import Index02WhoUseUs from '~/pagesSections/index/Index02WhoUseUs.vue'
import Index03OurServices from '~/pagesSections/index/Index03OurServices.vue'
import Index04WhyChooseUs from '~/pagesSections/index/Index04WhyChooseUs.vue'
import Index05Reviews from '~/pagesSections/index/Index05Reviews.vue'
import Index06FAQ from '~/pagesSections/index/Index06FAQ.vue'

import Index07ContactUs from '~/pagesSections/index/Index07ContactUs.vue'

defineOptions({
  name: 'IndexPage',
})

// const targetRef = useTemplateRef('targetRef')

// const { y } = useScroll(window)

// const vw = computed(() => `${10 - y.value / 10}vw`)
// const vh = computed(() => `${100 - y.value / 3}vh`)
// const rotate = computed(() => y.value * 2)

// const motion = useMotion(targetRef, {
//   initial: {
//     y: '100vh',
//     x: '100vw',
//     rotate: 0,
//   },
// })

// function update([newVw, newVh, newRotate]: [string, string, number]) {
//   motion.apply({
//     y: newVh,
//     x: newVw,
//     rotate: newRotate,
//     transition: {
//       ease: 'linear',
//     },
//   })
// }

// update([vw.value, vh.value, rotate.value])

// watch([vw, vh, rotate], update)
</script>

<template>
  <div>
    <h1 class="text-xl left-0 top-0 absolute z-10000">
      АХТУНГ! Это пока даже не 10% макета!
    </h1>
    <!-- <p
      ref="targetRef" class="text-8xl text-red text-center w-100vw fixed z-10001"
    >
      ААА-ааа-ааа-ааа-ааа-ааа-ааа
    </p> -->
    <Index01Hero />
    <Index02WhoUseUs />
    <Index03OurServices />
    <Index04WhyChooseUs />
    <Index05Reviews />
    <Index06FAQ />
    <Index07ContactUs />
  </div>
</template>

<style lang="css" scoped>

</style>
