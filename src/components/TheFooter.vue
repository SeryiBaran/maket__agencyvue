<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { navLinks } from '~/shared/navLinks'

const socialLinks = [
  { icon: 'i-simple-icons-facebook', link: '' },
  { icon: 'i-simple-icons-twitter', link: '' },
  { icon: 'i-simple-icons-linkedin', link: '' },
]

const contacts = [
  { icon: 'i-heroicons-envelope-solid', text: 'hello@squareup.com' },
  { icon: 'i-heroicons-phone-solid', text: '+91 91813 23 2309' },
  { icon: 'i-heroicons-map-pin-solid', text: 'Somewhere in the World' },
]
</script>

<template>
  <footer class="px-4 py-7.5 border border-0 border-t-1 border-greybrand-15 border-solid bg-greybrand-10 flex relative md:py-10 xl:py-12.5">
    <div class="footerWavesBg text-greenbrand-50 opacity-5 pointer-events-none bottom-0 left-0 right-0 top-0 absolute z-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="pattern__footerWavesBg" width="64" height="64" patternUnits="userSpaceOnUse" patternTransform="rotate(21)">

            <!-- <svg width="64" height="64" viewBox="0 0 64 64">
              <line x1="0" y1="0" x2="64" y2="64" stroke="currentColor" stroke-width="1" opacity="1" />
            </svg> -->

            <svg width="64" height="64" viewBox="0 0 64 64">
              <path d="M 64 0 L 0 0 L 0 64" stroke="currentColor" stroke-width="1" fill="none" opacity="1" />
            </svg>

          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="#00000000" />
        <rect width="100%" height="100%" fill="url(#pattern__footerWavesBg)" />
      </svg>
    </div>
    <div class="p-0 border-none flex-col justify-center overflow-visible max-md:mx-0 container md:(flex-row) lg:(flex-col)">
      <div class="footerTopContainer font-medium text-center flex flex-col gap-7.5 grid grid-cols-1 items-center lg:(mr-0 pr-0 border-r-0 flex-row grid-cols-[1fr_auto_1fr]) md:(mr-4 pr-4 border-r-1 border-greybrand-15)">
        <RouterLink to="/" class="lg:justify-self-start max-lg:justify-self-center">
          <img src="/assets/Logo.svg" alt="Logo" class="h-12.5 md:h-10 xl:h-15">
        </RouterLink>
        <nav class="font-medium border-0 border-t-1 border-greybrand-15 border-solid max-lg:pt-7.5 lg:border-t-0">
          <ul class="flex flex-wrap gap-5 justify-center">
            <li
              v-for="link in navLinks"
              :key="`${link.name}__ID__${link.link}`"
              class="flex items-center justify-center"
            >
              <RouterLink
                :to="link.link"
                class=""
              >
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </nav>
        <div class="socialIcons font-medium leading-[150%] p-4 border-1 border-greybrand-15 rounded-2 border-solid flex flex-col gap-3.5 items-center lg:p-2.5 lg:pl-6 lg:flex-row lg:gap-5 lg:justify-self-end">
          <p>Stay Connected</p>
          <div class="flex flex-wrap gap-2.5 justify-center">
            <a v-for="link in socialLinks" :key="link.icon + link.link" :href="link.link"><CardIcon :enable-hover-effect="false" :icon="link.icon" /></a>
          </div>
        </div>
      </div>
      <div class="footerBottomContainer mt-7.5 border-0 border-greybrand-15 border-solid flex flex-col lg:(mt-10 pt-10 border-t-1 flex-row gap-0) md:(gap-2 items-center justify-between)">
        <ul class="contacts flex flex-col lg:(flex-row gap-5.5)">
          <li
            v-for="contact in contacts"
            :key="`${contact.icon}__ID__${contact.text}`"
            class="text-4.5 text-greybrand-90 py-5 border-0 border-b-1 border-greybrand-15 border-solid flex gap-2.5 items-center lg:(text-4 py-0 pb-3 gap-1.5)"
          >
            <span :class="[contact.icon]" class="text-greenbrand-50 inline-block" /> {{ contact.text }}
          </li>
        </ul>
        <p class="copyright text-greybrand-60 mt-5 text-center md:mt-0">
          © 2023 SquareUp. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="css" scoped>
.socialIcons :deep(.cardIcon) {
  @apply h-13 w-13 lg:h-13 lg:w-13 md:h-13 md:w-13 xl:h-16 xl:w-16;
}

.socialIcons :deep(.iconSvg) {
  @apply h-5 w-5 md:h-5 md:w-5 xl:h-6 xl:w-6;
}
</style>
