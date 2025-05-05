<script setup lang="ts">
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'reka-ui'

interface SliderProps {
  min: number
  max: number
  step: number
}

const props = withDefaults(defineProps<{
  sliderProps?: SliderProps
  showThumbTip?: boolean
}>(), {
  sliderProps: () => ({
    min: 0,
    max: 10,
    step: 1,
  }),
  showThumbTip: false,
})

defineSlots<{
  thumbTip: (props: { value: number }) => any
}>()

const model = defineModel<number[]>()
</script>

<template>
  <SliderRoot v-model="model" :min-steps-between-thumbs="1" class="flex h-8 w-full select-none items-center relative touch-none" v-bind="props.sliderProps">
    <SliderTrack class="bg-greybrand-20 grow h-2px relative">
      <SliderRange class="bg-greenbrand-50 h-3px absolute" />
    </SliderTrack>
    <SliderThumb v-for="thumbIndex in Array.from({ length: 2 }, (_, i) => i)" :key="`thumb__${thumbIndex}`" class="thumb">
      <template v-if="props.showThumbTip && model">
        <div class="relative">
          <div class="thumbTip font-inter text-3.5 left-50% top-5.625 absolute xl:text-4 md:top-7.625">
            <!-- top-5.625 = thumb.h-3 + 2.625;   md:top-7.625 = thumb.md:h-4 + 3.625 -->
            <template v-if="$slots.thumbTip">
              <slot name="thumbTip" :value="model[thumbIndex]" />
            </template>
            <template v-else>
              {{ model[thumbIndex] }}
            </template>
          </div>
        </div>
      </template>
    </SliderThumb>
  </SliderRoot>
</template>

<style scoped>
.thumb {
  /* TODO: non-design, but it looks better */
  /* to style as in design, replace outline with border, remove transition and replace `w-4 h-4` `thumb size` with `thumb size+border size` */
  @apply outline-0 outline-greybrand-30 outline-solid rounded-full bg-greenbrand-50 h-3 w-3 md:(h-4 w-4) block focus:(outline-4 xl:outline-8) cursor-pointer;

  transition-property: outline-width;
  transition-duration: 100ms;
  transition-timing-function: linear;
}

.thumbTip {
  transform: translateX(-50%);
}
</style>
