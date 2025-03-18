<script lang="ts" setup>
import type { Card } from '~/shared/types'

interface Props {
  cardData: Card
}

const props = defineProps<Props>()
</script>

<template>
  <div class="cardIcon color-greenbrand-50 rounded-[10px] flex h-22 w-22 items-center justify-center">
    <i class="h-10 w-10 inline-block" :class="[props.cardData.icon]" />
  </div>
</template>

<style lang="css" scoped>
.cardIcon {
  border: 1px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to bottom, #2e2e2e 0%, #2e2e2e00 100%);
  position: relative;
  z-index: 0;
}

.cardIcon::before {
  content: '';
  background-image: linear-gradient(49deg, rgba(158, 255, 0, 0) 69%, rgba(158, 255, 0, 1) 400%),
    linear-gradient(to bottom, #242424 0%, #24242400 100%); /* 400% is magic number, FUCK FIGMA!!!! */
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -2;
  pointer-events: none;
}
</style>
