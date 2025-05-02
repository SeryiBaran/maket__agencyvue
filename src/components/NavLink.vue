<script setup lang="ts">
import { useMotion } from '@vueuse/motion'

const props = defineProps<{
  link: {
    link: string
    name: string
  }
  linkIndex: number
}>()

const emit = defineEmits<{
  clicked: []
}>()

const linkRef = useTemplateRef<HTMLElement>('linkRef')

useMotion(linkRef, {
  initial: {
    y: 100,
    opacity: 0,
  },
  visibleOnce: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 320,
      damping: 20,
      delay: 300 + props.linkIndex * 50,
    },
  },
})
</script>

<template>
  <RouterLink
    ref="linkRef"
    :to="props.link.link"
    active-class="activeLink"
    class="button buttonOutlineFocusVisible px-0 py-[12px] min-[1440px]:py-[14px] [&:not(.activeLink)]:(bg-transparent hover:not-active:bg-transparent)"
    @click="() => emit('clicked')"
  >
    {{ props.link.name }}
  </RouterLink>
</template>

<style scoped>

</style>
