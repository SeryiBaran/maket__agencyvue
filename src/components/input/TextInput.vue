<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<{
  isTextarea?: boolean
}>(), {
  isTextarea: false,
})

const model = defineModel<string>()
</script>

<template>
  <label class="flex grow flex-col w-full">
    {{ model }}
    <component :is="props.isTextarea ? 'textarea' : 'input'" v-bind="$attrs" v-model="model" type="text" class="input text-4 leading-150% px-2 py-1.5 rounded-t-1 grow w-full relative xl:text-4.5 focus:outline-0 focus:bg-greenbrand-50/5 hover:not-focus:bg-greybrand-20/15" />
    <span class="inputUnderline bg-greybrand-20 h-1px w-full block overflow-hidden" />
  </label>
</template>

<style scoped>
.input,
.inputUnderline::after {
  transition-duration: 200ms;
  transition-property: background, transform;
  transition-timing-function: ease-in-out;
}

.inputUnderline::after {
  content: '';

  @apply w-full h-full block bg-greenbrand-50;
}

.input:not(:focus) + .inputUnderline::after {
  transform: translateX(-101%);
}
</style>
