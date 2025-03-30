<script lang="ts" setup>
import type { Card } from '~/shared/types'

interface Props {
  cardData: Card
}

const props = defineProps<Props>()
</script>

<template>
  <div class="cardIcon iconAnimations color-greenbrand-50 flex h-14.5 min-w-14.5 items-center justify-center md:h-17.5 md:w-17.5 xl:h-22 xl:w-22">
    <!-- min-w-14.5 is fix -->
    <i class="icon h-6.5 w-6.5 inline-block md:h-7.5 md:w-7.5 xl:h-10 xl:w-10" :class="[props.cardData.icon]" />
  </div>
</template>

<style lang="css" scoped>
@property --myBeforeGradientColor1 {
  syntax: '<color>';
  initial-value: #2e2e2e;
  inherits: false;
}

@property --myBeforeGradientColor2 {
  syntax: '<color>';
  initial-value: #2e2e2e00;
  inherits: false;
}

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
  background-image: linear-gradient(to bottom, var(--myBeforeGradientColor1) 0%, var(--myBeforeGradientColor2) 100%);
  mask:
    linear-gradient(#000 0 0) exclude,
    linear-gradient(#000 0 0) content-box;
  transition-duration: 200ms;
  transition-property: --myBeforeGradientColor2;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.iconAnimations {
  transition-duration: 200ms;
  transition-property: box-shadow, transform, background-color;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.iconAnimations:hover {
  transform: scale(1.2);
  @apply bg-greenbrand-50/20;
  box-shadow: 0 0 calc(var(--spacing) * 5) 0 color-mix(in oklch, var(--colors-greenbrand-50) 25%, transparent);
}

.iconAnimations:hover::before {
  --myBeforeGradientColor1: #9eff0080;
  --myBeforeGradientColor2: #9eff0080;
}
</style>
