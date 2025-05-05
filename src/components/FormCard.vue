<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
  description?: string
  bigYPadding?: boolean
}>(), {
  bigYPadding: false,
})

// TODO: `.formCardBody > <div class="... flex">`: flex is fix for margin collapsing.
</script>

<template>
  <div class="formCard text-4 px-6 py-4.5 border-1 border-greybrand-15 rounded-2 border-solid bg-[#242424]/50 xl:text-4.5 md:px-7.5 md:py-5 xl:px-10 xl:py-6" :class="{ formCardBigYPadding: props.bigYPadding }">
    <p v-if="props.title" class="formCardTitle text-4 font-medium md:text-4.5 xl:text-5.5">
      {{ props.title }}
    </p>
    <p v-if="props.description" class="descriptionText formCardDesc text-greybrand-90 mt-1.5 md:mt-3.5">
      {{ props.description }}
    </p>
    <div class="formCardBody mt-3.5 p-0 md:mt-4 xl:mt-4">
      <div class="flex">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.formCard * {
  @apply leading-[150%];
}

.formCardBigYPadding {
  @apply py-6 md:py-7.5 xl:py-10;
}

.formCardBigYPadding .formCardBody {
  @apply mt-7.5 md:mt-7.5 xl:mt-10;
}
</style>
