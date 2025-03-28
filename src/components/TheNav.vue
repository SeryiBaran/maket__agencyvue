<script lang="ts" setup>
const props = defineProps<{
  showBurgerMenu: boolean
  toggleBurgerMenu: () => void
}>()

const maxMd = useMediaQuery('(max-width: 767px)')

const links = [
  { name: 'Home', link: '/' },
  { name: 'Services', link: '/services' },
  { name: 'Work', link: '/work' },
  { name: 'Process', link: '/process' },
  { name: 'About', link: '/about' },
  { name: 'Careers', link: '/careers' },
]
</script>

<template>
  <nav
    :class="{
      burger: props.showBurgerMenu && maxMd,
      hidden: (!props.showBurgerMenu) && maxMd,
    }"
    class="flex"
  >
    <ul class="flex gap-7.5">
      <li
        v-for="link in links" :key="`${link.name}__ID__${link.link}`"
        class="flex items-center"
      >
        <RouterLink :to="link.link" active-class="activeLink" class="button px-0 py-[12px] min-[1440px]:py-[14px]" @click="toggleBurgerMenu()">
          {{ link.name }}
        </RouterLink>
      </li>
      <li v-show="maxMd" class="flex items-center">
        <RouterLink to="/contacts" class="contactButton button buttonPrimary">
          Contact Us
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  backdrop-filter: blur(12px);
}

.activeLink {
  @apply bg-greybrand-15 text-white px-[22px] min-[1440px]:px-[24px] font-semibold;
}

.burger {
  @apply fixed top-0 right-0 bottom-0 left-0 bg-greybrand-10/90 z-100 p-4;
}

.burger ul {
  @apply flex-col gap-0 items-stretch w-full;
}

.burger li {
  @apply;
}

.burger a {
  @apply flex w-full items-center justify-center;
}
</style>
