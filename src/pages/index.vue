<script setup lang="ts">
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
</script>

<template>
  <div>
    <h1 class="text-xl left-0 top-0 absolute z-10000">
      АХТУНГ! Это пока даже не 10% макета!
    </h1>
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
