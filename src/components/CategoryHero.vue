<script lang="ts" setup>
const { title, subheader, bg = 0 } = defineProps<{
  title: string
  subheader: string
  bg?: number
}>()
</script>

<template>
  <div class="p-0 container">
    <div class="bg" :class="[`bg-${bg}`]">
      <div class="categoryHero py-[120px] text-center w-full">
        <h2 class="text-12 font-semibold">
          {{ title }}
        </h2>
        <p class="text-4.5 tracking-[-0.6%] pt-3.5">
          {{ subheader }}
        </p>
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
.bg {
  position: relative;
}
.bg::before {
  content: '';
  background: url('/assets/HeroBGRECTS.png');
  opacity: 0.6;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  pointer-events: none;
}
.bg::after {
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
  z-index: -2;
  pointer-events: none;
  filter: saturate(0) brightness(0.15);
}
.bg.bg-0::after {
  background-image: url('/assets/CategoryHeroLines0.webp');
}
.bg.bg-1::after {
  background-image: url('/assets/CategoryHeroLines1.webp');
}
.bg.bg-2::after {
  background-image: url('/assets/CategoryHeroLines2.webp');
}
.bg.bg-3::after {
  background-image: url('/assets/CategoryHeroLines3.webp');
}
</style>
