<script setup lang="ts">
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui'

const props = defineProps<{
  valueName: string
  title: string
}>()

const model = defineModel<boolean>()
</script>

<template>
  <label class="flex flex-row gap-2.5 items-center [&>.checkbox]:hover:bg-neutral-100">
    <CheckboxRoot v-model="model" :value="props.valueName" class="outline-none p-1 appearance-none border-1 border-greybrand-20 rounded border-solid bg-greybrand-15 flex h-7 w-7 cursor-pointer items-center justify-center">
      <CheckboxIndicator class="checkboxCheck rounded flex h-full w-full items-center justify-center">
        <span
          class="i-heroicons-check text-5 text-greenbrand-50"
        />
      </CheckboxIndicator>
    </CheckboxRoot>
    <span class="select-none">{{ props.title }}</span>
  </label>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

[data-state='checked'] .checkboxCheck,
[data-state='checked'] .checkboxCheck {
  animation: fadeIn 100ms ease-out;
}

[data-state='unchecked'] .checkboxCheck,
[data-state='unchecked'] .checkboxCheck {
  animation: fadeOut 100ms ease-in;
}
</style>
