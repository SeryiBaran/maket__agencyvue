<script lang="ts" setup>
import { RouterLink } from 'vue-router'

const showMenuMediaQuery = useMediaQuery('(max-width: 767px)')
</script>

<template>
  <header class="flex max-md:px-0">
    <div class="gap-2 items-center justify-between max-md:mx-0 container">
      <div v-motion-slide-top class="logo" :delay="0" :duration="200">
        <RouterLink to="/">
          <img src="/assets/Logo.svg" alt="Logo" class="h-[40px] min-[1440px]:h-[60px]">
        </RouterLink>
      </div>

      <div v-show="!showMenuMediaQuery" v-motion-slide-top class="navContainer" :delay="30" :duration="200">
        <TheNav />
      </div>

      <RouterLink v-show="!showMenuMediaQuery" v-motion-slide-top to="/contacts" class="contactButton button buttonPrimary" :delay="60" :duration="200">
        Contact Us
      </RouterLink>

      <button v-show="showMenuMediaQuery" class="text-greenbrand-80 p-1.5 rounded-1.5 bg-greybrand-15 flex h-11.5 w-11.5 items-center justify-center">
        <span class="i-heroicons:bars-3-bottom-right text-8.5 block" />
      </button>
    </div>
  </header>
</template>

<style lang="css" scoped>
header {
  @apply border border-none border-bottom-1 border-solid border-greybrand-15 px-4 md:px-5;
  font-weight: 500;
}

.container {
  @apply border-none px-0 max-md:pt-10;
  flex-direction: row;
}

.logo a {
  @apply transition transition-all transition-duration-300 transform hover:-translate-x-1 hover:scale-103;
  display: flex;
  align-items: center;
  gap: 10px;
}

.contactButton {
  @apply text-[14px] min-[1440px]:text-[18px] p-[12px_18px] min-[1440px]:p-[16px_24px];
  line-height: 150%;
}
</style>
