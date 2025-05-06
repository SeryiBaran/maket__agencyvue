<script lang="ts" setup>
import type { AnimatableObject } from 'animejs'
import { createAnimatable, utils } from 'animejs'

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
      const x = utils.clamp((e.clientX - left - hw) / 10, -100, 100)
      const y = utils.clamp((e.clientY - top - hh) / 10, 0, 300)
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
  <section class="hero max-md:px-0">
    <div class="noBgColorContainer pb-[205px] pt-20 items-center max-md:mx-0 md:pb-[274px] md:pt-28 container xl:h-200" style="perspective: 400px;">
      <div ref="abstractBgRef" class="abstractBg" />
      <div class="blobsBg text-greenbrand-50">
        blobs
      </div>
      <div
        class="subContainer"
      >
        <div
          v-anim-rotate:settings.top="{
            custom: {
              duration: 400,
              delay: 200,
            },
          }"
        >
          <h1
            v-motion-slide-bottom :duration="400" :delay="200"
            class="m-none text-8.5 font-semibold leading-[120%] md:text-12 xl:text-17"
          >
            A Digital Product Studio<br>that <span class="headerMainWord">will Work</span>
          </h1>
        </div>
        <div
          v-anim-rotate:settings.top="{
            custom: {
              duration: 400,
              delay: 200,
            },
          }"
        >
          <div v-motion-slide-top :delay="200" :duration="300" class="subheader text-4 text-greybrand-60 mt-7.5 px-7.5 py-4.5 border border-greybrand-15 rounded-2 border-solid bg-[#242424]/20 gap-1.5 items-center md:text-4.5 xl:text-5.5 max-md:leading-[150%] xl:mt-10 xl:px-10 xl:py-6 xl:rounded-[10px] md:flex">
            For <span class="subheaderSelected">startups</span>, <span class="subheaderSelected">enterprise leaders</span>, <span class="subheaderSelected">media & publishers</span>, and <span class="subheaderSelected">social good</span><span class="md:hidden">.</span>
          </div>
        </div>
        <!-- TODO: make cool buttons sitting animation -->
        <div v-anim-slide.bottom class="buttonsContainer font-medium pt-10 flex gap-[13px] items-center justify-center xl:pt-12.5">
          <RouterLink to="/work" class="button buttonOutline">
            Our Works
          </RouterLink>
          <RouterLink to="/work" class="button buttonPrimary">
            Contact Us
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.container {
  position: relative;
  text-align: center;
  z-index: 0;
}
.container::before {
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

.container .abstractBg {
  content: '';
  background: url('/assets/AbstractDesign.png');
  background-repeat: no-repeat;
  background-position: bottom;
  opacity: 1;
  top: 0;
  left: -100px;
  bottom: 0;
  right: -100px;
  position: absolute;
  z-index: -1;
  pointer-events: none;
}

.blobsBg {
}

.blobsBg svg {
  @apply block h-70 w-70 absolute;
  /* backdrop-filter: blur(10px);
  filter: blur(10px); */
}

@media (max-width: 767px) {
  .container::after {
    background-size: 240%;
  }
}

@keyframes headerMainWordColorAnim {
  0% {
    color: inherit;
  }
  100% {
    color: var(--colors-greenbrand-50) /* #9EFF00 */;
  }
}

@keyframes headerMainWordAfterAnim {
  0% {
    transform: translateX(-101%);
  }
  100% {
    transform: translateX(0);
  }
}

.headerMainWord {
  @apply: relative overflow-hidden inline-block vertical-text-top;

  animation-name: headerMainWordColorAnim;
  animation-duration: 0.5s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}

.headerMainWord::after {
  content: '';

  @apply w-full absolute bottom-0 h-1 bg-greenbrand-50 left-0;

  transform: translateX(-101%);

  animation-name: headerMainWordAfterAnim;
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}

.subheader {
  backdrop-filter: blur(6px);
}
.subheaderSelected {
  @apply md:(inline-block rounded-2 px-2.5 py-2 xl:px-3.5 xl:py-3 text-white bg-greybrand-15 capitalize);
}

.buttonsContainer {
  perspective: 500px;
}
</style>
