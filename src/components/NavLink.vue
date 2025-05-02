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
  <div class="flex items-center justify-center">
    <RouterLink
      :to="props.link.link"
      active-class="activeLink"
      class="button buttonOutlineFocusVisible px-0 py-[12px] min-[1440px]:py-[14px] [&:not(.activeLink)]:(bg-transparent hover:not-active:bg-transparent)"
      @click="() => emit('clicked')"
    >
      {{ props.link.name }}
    </RouterLink>
  </div>
</template>

<style scoped>
.activeLink {
  @apply bg-greybrand-15 text-white px-[22px] min-[1440px]:px-[24px] font-semibold;
}
</style>
