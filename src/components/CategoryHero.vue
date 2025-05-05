<script lang="ts" setup>
const props = withDefaults(defineProps<{
  title: string
  subheader: string
  bg?: number
  miniText?: boolean
}>(), {
  bg: 0,
  miniText: false,
})
</script>

<template>
  <div class="p-0 container">
    <div class="bg1" :class="[`bg-${props.bg}`]">
      <div class="bg2">
        <div class="categoryHero px-4 py-12.5 text-center w-full md:py-25 xl:py-30">
          <div v-if="$slots.top" class="mb-7 md:mb-10 xl:mb-12.5">
            <slot name="top" />
          </div>
          <h2 v-motion-slide-visible-once-bottom :duration="300" class="text-7 font-semibold leading-[120%] mx-auto max-w-[896px] md:text-9.5 xl:text-12" :class="{ 'text-6 md:text-7.5 xl:text-9.5': props.miniText }">
            {{ props.title }}
          </h2>
          <p v-motion-fade-visible-once :duration="400" :delay="200" class="text-3.5 leading-[150%] mx-auto mx-auto mt-1.5 max-w-[896px] md:text-4 xl:text-4.5 md:mt-2.5 xl:mt-3.5" :class="{ 'tracking-[-0.006em] text-greybrand-90': props.miniText }">
            {{ props.subheader }}
          </p>
          <div v-if="$slots.bottom" class="mt-7 md:mt-10 xl:mt-12.5">
            <slot name="bottom" />
          </div>
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
