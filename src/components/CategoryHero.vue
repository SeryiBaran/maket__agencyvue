<script lang="ts" setup>
const { title, subheader, bg = 0 } = defineProps<{
  title: string
  subheader: string
  bg?: number
}>()
</script>

<template>
  <div class="p-0 container">
    <div class="bg1" :class="[`bg-${bg}`]">
      <div class="bg2">
        <div class="categoryHero px-4 py-12.5 text-center w-full md:py-25 xl:py-30">
          <h2 v-motion-slide-visible-once-bottom :duration="300" class="text-7 font-semibold md:text-9.5 xl:text-12">
            {{ title }}
          </h2>
          <p v-motion-fade-visible-once :duration="400" :delay="300" class="text-3.5 leading-6 mx-auto pt-1.5 max-w-1000px md:text-4 xl:text-4.5 md:pt-2.5 xl:pt-3.5">
            {{ subheader }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.categoryHero {
  position: relative;
  z-index: 0;
  background: rgba(172, 255, 36, 0.035);
}
.bg1 {
  position: relative;
}
.bg2 {
  position: relative;
}
.bg2::before {
  content: '';
  background: url('/assets/HeroBGRECTS.png');
  opacity: 0.6;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  pointer-events: none;
}
.bg1::before {
  content: '';
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  pointer-events: none;
  filter: saturate(0) brightness(0.15);
}
.bg1.bg-0::before {
  background-image: url('/assets/CategoryHeroLines0.webp');
}
.bg1.bg-1::before {
  background-image: url('/assets/CategoryHeroLines1.webp');
}
.bg1.bg-2::before {
  background-image: url('/assets/CategoryHeroLines2.webp');
}
.bg1.bg-3::before {
  background-image: url('/assets/CategoryHeroLines3.webp');
}
</style>
