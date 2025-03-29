<script lang="ts" setup>
import { RouterLink } from 'vue-router'

const [showBurgerMenu, toggleBurgerMenu] = useToggle(false)

const maxMd = useMediaQuery('(max-width: 767px)')
</script>

<template>
  <header class="flex max-md:px-0">
    <div class="gap-2 items-center justify-between max-md:mx-0 container">
      <div v-motion-slide-top class="logo" :delay="0" :duration="200">
        <RouterLink to="/">
          <img src="/assets/Logo.svg" alt="Logo" class="h-[40px] min-[1440px]:h-[60px]">
        </RouterLink>
      </div>

      <TheNav v-motion-slide-top :delay="30" :duration="200" :show-burger-menu :toggle-burger-menu />

      <RouterLink v-show="!maxMd" v-motion-slide-top to="/contacts" class="contactButton button buttonPrimary" :delay="60" :duration="200">
        Contact Us
      </RouterLink>

      <!-- TODO: outline and animation at all buttons!!! -->
      <button
        v-show="maxMd" class="text-greenbrand-80 p-1.5 outline-0 outline-greenbrand-80/50 outline-solid rounded-1.5 bg-greybrand-15 flex h-11.5 w-11.5 cursor-pointer transition-[background-color,outline-width] duration-100 items-center justify-center z-101 focus:outline-4 active:bg-greybrand-15 hover:bg-greybrand-20" :class="{
          'sticky top--5 md:top-0 right-4': showBurgerMenu && maxMd,
        }"
        @click="toggleBurgerMenu()"
      >
        <span class="i-heroicons:bars-3-bottom-right text-8.5 block" />
      </button>
    </div>
  </header>
</template>

<style lang="css" scoped>
header {
  @apply border border-0 border-b-1 border-solid border-greybrand-15 px-4 md:px-5 sticky top--5 md:top-0 bg-greybrand-10 z-1;
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
  @apply text-[14px] xl:text-[18px] p-[12px_18px] xl:p-[16px_24px];
  line-height: 150%;
}
</style>
