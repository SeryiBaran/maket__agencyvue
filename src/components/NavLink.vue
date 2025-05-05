<script setup lang="ts">
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
</script>

<template>
  <div class="flex w-full items-center">
    <RouterLink
      :to="props.link.link"
      active-class="activeLink"
      class="button buttonOutlineFocusVisible px-0 py-3 block xl:py-3.5 [&:not(.activeLink)]:(bg-transparent hover:not-active:bg-transparent)"
      @click="() => emit('clicked')"
    >
      {{ props.link.name }}
    </RouterLink>
  </div>
</template>

<style scoped>
.activeLink {
  @apply bg-greybrand-15 text-white px-5.5 xl:px-7 font-semibold;
}
</style>
