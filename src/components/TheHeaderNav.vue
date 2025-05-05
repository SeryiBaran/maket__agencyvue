<script lang="ts" setup>
import { navLinks } from '~/shared/navLinks'

const props = defineProps<{
  showBurgerMenu: boolean
}>()

const emit = defineEmits<{
  closeBurgerMenu: []
}>()

const maxMd = useMediaQuery('(max-width: 767px)')

const links = navLinks.filter(link => link.link !== '/contacts')
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
        v-for="(link, linkIndex) in links"
        :key="`${link.name}__ID__${link.link}`"
        v-anim-slide:settings.top="{
          custom: {
            delay: 300 + linkIndex * 50,
            autoplay: true,
          },
        }"
        class="flex items-center justify-center"
      >
        <NavLink
          :link :link-index @clicked="emit('closeBurgerMenu')"
        />
      </li>
      <li v-show="maxMd" class="flex items-center">
        <RouterLink to="/contacts" class="button contactButton buttonPrimary">
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

.burger {
  @apply fixed top-0 right-0 bottom-0 left-0 bg-greybrand-10/90 z-100 p-4;
}

.burger ul {
  @apply flex-col gap-0 items-stretch w-full;
}

.burger li {
  @apply;
}
</style>
