<script lang="ts" setup>
import type { Timeline } from 'animejs'
import { createTimeline } from 'animejs'

const scroll = useScroll(window, {

})

const bodySize = useElementSize(document.body)

const patternRef = useTemplateRef('patternRef')

const timeline = ref<Timeline | null>(null)

onMounted(() => {
  if (patternRef.value) {
    timeline.value = createTimeline({
      autoplay: false,
    })

    timeline.value.add(patternRef.value, {
      rotate: {
        from: '-30deg',
        to: '30deg',
      },
    })
  }
})

const scrollProgress = computed(() => {
  return scroll.y.value / bodySize.height.value
})

watchEffect(() => {
  if (timeline.value !== null) {
    timeline.value.seek((scrollProgress.value) * timeline.value.duration)
  }
})

const mouse = useMouse({
  type: 'client',
})

/*
make something like:

```
const initialPatternOpacity: number = 100
const patternBlobColor: string = 'rgba(var(--c-bg-40), 10%)'
const patternBgColor: string = `rgba(var(--c-page-bg), ${initialPatternOpacity}%)`
const patternBlobRadiusPx: number = 200

const blobStyleString = computed(() => `background-image: radial-gradient(circle at ${(mouse.x.value / windowSize.width.value) * 100}% ${(mouse.y.value / windowSize.height.value) * 100}%, ${patternBlobColor} 0%, ${patternBgColor} ${patternBlobRadiusPx}px);`)
```
*/

const blobStyleString = computed(() => `background-image: radial-gradient(circle at ${mouse.x.value}px ${mouse.y.value}px, color-mix(in oklch, var(--colors-greenbrand-50) 10%, transparent) 0%, var(--colors-greybrand-10) 30%);`)
</script>

<template>
  <div class="mainWavesBg text-greenbrand-50 opacity-20 pointer-events-none bottom-0 left-0 right-0 top-0 fixed z-0">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <pattern id="pattern__mainWavesBg" ref="patternRef" class="patternRef" width="64" height="64" patternUnits="userSpaceOnUse" patternTransform="rotate(21)">

          <svg width="64" height="64" viewBox="0 0 64 64">
            <path d="M 0,32 Q 16,16 32,32 T 64,32" fill="none" stroke="currentColor" stroke-width="1" opacity="1" />
          </svg>

        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#00000000" />
      <rect width="100%" height="100%" fill="url(#pattern__mainWavesBg)" />
    </svg>
  </div>
  <div class="bg-transparent pointer-events-none bottom-0 left-0 right-0 top-0 fixed z-0" :style="blobStyleString" />
  <TheHeader class="z-1" />
  <main class="flex grow flex-col h-full z-1">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
  <TheFooter class="z-1" />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.patternRef {
  transform-origin: center center;
}
</style>
