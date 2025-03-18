<script lang="ts" setup>
const { title, subheader, bg = 0 } = defineProps<{
  title: string
  subheader: string
  bg?: number
}>()
</script>

<template>
  <div class="p-0 bg-[#ACFF24]/20 container">
    <div class="categoryHero py-[120px] text-center w-full">
      <h2 class="text-12 font-semibold">
        {{ title }}
      </h2>
      <p class="text-4.5 tracking-[-0.6%] pt-3.5">
        {{ subheader }}
      </p>
    </div>
  </div>
</template>

<style lang="css" scoped>
.categoryHero {
  position: relative;
  z-index: 0;
}
.categoryHero::before {
  content: '';
  background: url('/assets/HeroBGRECTS.png');
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -2;
  pointer-events: none;
}
.categoryHero::after {
  content: '';
  background: url('/assets/AbstractDesign.png');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
  opacity: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  pointer-events: none;

  background-image: url('/assets/CategoryHeroLines00.png');
  background-position: top left;
  background-size: 300px;
}
</style>
