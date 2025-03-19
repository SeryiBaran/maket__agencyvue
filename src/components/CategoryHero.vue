<script lang="ts" setup>
const { title, subheader, bg = 0 } = defineProps<{
  title: string
  subheader: string
  bg?: number
}>()

// const opacityp = ref(1)
// const brightnessp = ref(1)
// const ap = ref(0.2)
const opacityp = ref(1)
const brightnessp = ref(0.15)
const ap = ref(0.035)
</script>

<template>
  <div class="p-0 container">
    <div class="bg">
      <div class="categoryHero py-[120px] text-center w-full">
        <h2 class="text-12 font-semibold">
          {{ title }}
        </h2>
        <p class="text-4.5 tracking-[-0.6%] pt-3.5">
          {{ subheader }}
        </p>
        <div class="controls font-mono px-6 py-4 rounded-[10px] bg-green-900 flex flex-col gap-2 w-100 bottom-4 right-10 fixed">
          <div class="flex justify-between">
            <span>opacity 0-1 0.005:</span><span>{{ opacityp }}</span>
          </div>
          <input v-model="opacityp" type="range" min="0" max="1" step="0.005">
          <div class="flex justify-between">
            <span>brightness 0-1 0.005:</span><span>{{ brightnessp }}</span>
          </div>
          <input v-model="brightnessp" type="range" min="0" max="1" step="0.005">
          <div class="flex justify-between">
            <span>alphag 0-1 0.005:</span><span>{{ ap }}</span>
          </div>
          <input v-model="ap" type="range" min="0" max="1" step="0.005">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.categoryHero {
  position: relative;
  z-index: 0;
  background: rgba(172, 255, 36, v-bind(ap));
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
  background-image: url('/assets/CategoryHeroLines00.webp');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  /* opacity: 0.2; */
  opacity: v-bind(opacityp);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -2;
  pointer-events: none;
  /* filter: saturate(0) brightness(0.3); */
  filter: saturate(0) brightness(v-bind(brightnessp));
}
</style>
