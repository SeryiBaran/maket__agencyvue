<script lang="ts" setup>
import type { AnimatableObject } from 'animejs'
import { createAnimatable, utils } from 'animejs'

const props = withDefaults(defineProps<{
  title: string
  subheader: string
  bg?: number
  miniText?: boolean
}>(), {
  bg: 0,
  miniText: false,
})

const abstractBgRef = useTemplateRef('abstractBgRef')

let animatable: AnimatableObject

onMounted(() => {
  if (abstractBgRef.value) {
    let bounds = abstractBgRef.value.getBoundingClientRect()
    const refreshBounds = (element: HTMLElement) => bounds = element.getBoundingClientRect()

    animatable = createAnimatable(abstractBgRef.value, {
      x: 500, // Define the x duration to be 500ms
      y: 500, // Define the y duration to be 500ms
      ease: 'out(3)',
    })

    const onMouseMove = (e: MouseEvent) => {
      const { width, height, left, top } = bounds
      const hw = width / 2
      const hh = height / 2
      const x = -utils.clamp((e.clientX - left - hw) / 10, -100, 100)
      const y = -utils.clamp((e.clientY - top - hh) / 10, -200, 200)
      animatable.x(x) // Animate the x value in 500ms
      animatable.y(y) // Animate the y value in 500ms
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('scroll', () => {
      if (abstractBgRef.value)
        refreshBounds(abstractBgRef.value)
    })
  }
})
</script>

<template>
  <div class="categoryHeroContainer p-0 container">
    <div class="bg1" :class="[`bg-${props.bg}`]">
      <div ref="abstractBgRef" class="abstractBg" />
      <div class="bg2">
        <div class="categoryHero px-4 py-12.5 text-center w-full md:py-25 xl:py-30">
          <div v-if="$slots.top" class="mb-7 md:mb-10 xl:mb-12.5">
            <slot name="top" />
          </div>
          <h2 v-motion-slide-visible-once-bottom :duration="300" class="text-7 font-semibold leading-[120%] mx-auto max-w-[896px] md:text-9.5 xl:text-12" :class="{ 'text-6 md:text-7.5 xl:text-9.5': props.miniText }">
            {{ props.title }}
          </h2>
          <p v-motion-fade-visible-once :duration="400" :delay="200" class="text-3.5 text-greybrand-90 leading-6 tracking-[-0.006em] mx-auto mx-auto mt-1.5 max-w-[896px] md:text-4 xl:text-4.5 md:mt-2.5 xl:mt-3.5" :class="{ 'leading-[150%]': props.miniText }">
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
  background: color-mix(in oklch, var(--colors-greenbrand-50) 3.5%, transparent); /* color greenbrand-50 */
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
.bg1 .abstractBg {
  content: '';
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  top: -200px;
  left: -100px;
  bottom: -200px;
  right: -100px;
  position: absolute;
  pointer-events: none;
  filter: saturate(0) brightness(0.15);
}
.bg1.bg-0 .abstractBg {
  background-image: url('/assets/CategoryHeroLines0.webp');
}
.bg1.bg-1 .abstractBg {
  background-image: url('/assets/CategoryHeroLines1.webp');
}
.bg1.bg-2 .abstractBg {
  background-image: url('/assets/CategoryHeroLines2.webp');
}
.bg1.bg-3 .abstractBg {
  background-image: url('/assets/CategoryHeroLines3.webp');
}
</style>
