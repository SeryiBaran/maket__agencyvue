<script lang="ts" setup>
import { RouterLink } from 'vue-router'

const showMenuMediaQuery = useMediaQuery('(max-width: 768px)')
</script>

<template>
  <header flex>
    <div class="gap-2 items-center justify-between container">
      <div v-motion-slide-top class="logo" :delay="0" :duration="200">
        <RouterLink to="/">
          <img src="/assets/Logo.svg" alt="Logo" class="h-[40px] min-[1440px]:h-[60px]">
        </RouterLink>
      </div>

      <div v-motion-slide-top class="navContainer" :delay="30" :duration="200">
        <TheNav />
      </div>

      <RouterLink v-motion-slide-top to="/contacts" class="contactButton button buttonPrimary" :delay="60" :duration="200">
        Contact Us
      </RouterLink>

      <button v-if="showMenuMediaQuery">
        <span class="i-heroicons:bars-3-bottom-right text-4xl text-greenbrand-80 inline-block" />
      </button>
    </div>
  </header>
</template>

<style lang="css" scoped>
header {
  @apply border border-none border-bottom-1 border-solid border-greybrand-15 px-5;
  font-weight: 500;
}

.container {
  @apply border-none px-0;
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
