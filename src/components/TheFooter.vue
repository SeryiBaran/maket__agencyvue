<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { navLinks } from '~/shared/navLinks'
</script>

<template>
  <footer class="flex max-md:px-0">
    <div class="p-0 border-none overflow-visible max-md:mx-0 container">
      <div class="text-center flex flex-col">
        <RouterLink to="/" class="self-center">
          <img src="/assets/Logo.svg" alt="Logo" class="h-12.5 md:h-10 xl:h-15">
        </RouterLink>
        <nav class="leading-[150%] mt-7.5 pt-7.5 border-0 border-t-1 border-greybrand-15 border-solid flex gap-5">
          <ul>
            <li
              v-for="(link, linkIndex) in navLinks"
              :key="`${link.name}__ID__${link.link}`"
              v-anim-slide:settings.top="{
                custom: {
                  delay: 300 + linkIndex * 50,
                },
                topVisibleY: '100%',
              }"
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
      </div>
    </div>
  </footer>
</template>

<style lang="css" scoped>
footer {
  @apply border border-0 border-t-1 border-solid border-greybrand-15 px-4 md:px-5 sticky top--5 md:top-0 bg-greybrand-10 z-1 py-7.5 md:py-10 xl:py-12.5;
  font-weight: 500;
}
</style>
