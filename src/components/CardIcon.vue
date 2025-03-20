<script lang="ts" setup>
import type { Card } from '~/shared/types'

interface Props {
  cardData: Card
}

const props = defineProps<Props>()
</script>

<template>
  <div class="cardIcon color-greenbrand-50 flex h-17.5 w-17.5 items-center justify-center xl:h-22 xl:w-22">
    <i class="icon h-7.5 w-7.5 inline-block xl:h-10 xl:w-10" :class="[props.cardData.icon]" />
  </div>
</template>

<style lang="css" scoped>
.cardIcon {
  background-image: linear-gradient(49deg, rgba(158, 255, 0, 0) 69%, rgba(158, 255, 0, 1) 500%),
    linear-gradient(to bottom, #242424 0%, #24242400 100%); /* 400% is magic number, FUCK FIGMA!!!! */
  position: relative;
  z-index: 0;
  border-radius: 10px;
}

.cardIcon::before {
  content: '';
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -2;
  pointer-events: none;

  inset: 0;
  padding: 1px;
  border-radius: 10px;
  background-image: linear-gradient(to bottom, #2e2e2e 0%, #2e2e2e00 100%);
  mask:
    linear-gradient(#000 0 0) exclude,
    linear-gradient(#000 0 0) content-box;
}

.icon {
}
</style>
