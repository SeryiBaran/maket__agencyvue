<script lang="ts" setup>
import { RouterLink } from 'vue-router'

const [showBurgerMenu, toggleBurgerMenu] = useToggle(false)

const maxMd = useMediaQuery('(max-width: 767px)')
</script>

<template>
  <header class="flex max-md:px-0">
    <div class="gap-2 items-center justify-between max-md:mx-0 container">
      <div v-motion-slide-top class="logo" :delay="0" :duration="400">
        <RouterLink to="/">
          <img src="/assets/Logo.svg" alt="Logo" class="h-[40px] min-[1440px]:h-[60px]">
        </RouterLink>
      </div>

      <TheNav v-motion-slide-top :delay="60" :duration="400" :show-burger-menu :toggle-burger-menu />

      <RouterLink v-show="!maxMd" v-motion-slide-top to="/contacts" class="contactButton button buttonPrimary" :delay="120" :duration="400">
        Contact Us
      </RouterLink>

      <!-- TODO: outline and animation at all buttons!!! -->
      <button
        v-show="maxMd" class="button buttonIcon z-101" :class="{
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
  @apply transition transition-all transition-duration-300 transform hover:scale-103;
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo a:hover {
  transform: translateY(-0.1rem);
}

.contactButton {
  @apply text-[14px] xl:text-[18px] p-[12px_18px] xl:p-[16px_24px];
  line-height: 150%;
}
</style>
