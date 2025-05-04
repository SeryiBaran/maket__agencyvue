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
    <SliderTrack class="bg-greybrand-20 grow h-1 relative">
      <SliderRange class="bg-greenbrand-50 h-full absolute" />
    </SliderTrack>
    <SliderThumb v-for="thumbIndex in Array.from({ length: 2 }, (_, i) => i)" :key="`thumb__${thumbIndex}`" class="thumb">
      <template v-if="props.showThumbTip && model">
        <div class="relative">
          <div class="thumbTip font-inter left-50% top-7.625 absolute">
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
  @apply outline-0 outline-greybrand-30 outline-solid rounded-full bg-greenbrand-50 h-4 w-4 block outline-4 xl:outline-8 cursor-pointer;

  transition-property: outline-width;
  transition-duration: 100ms;
  transition-timing-function: linear;
}

.thumbTip {
  transform: translateX(-50%);
}
</style>
