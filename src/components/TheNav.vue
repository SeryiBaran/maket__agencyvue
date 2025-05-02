<script lang="ts" setup>
import { animate, onScroll } from 'animejs'

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

const reviewsRefs = useTemplateRef('reviewsRefs')

onMounted(() => {
  if (reviewsRefs.value) {
    reviewsRefs.value.forEach((review, index) => {
      animate(review, {
        opacity: {
          from: 0,
          to: 1,
        },
        y: {
          from: -100,
          to: 0,
        },
        duration: 400,
        delay: 300 + index * 50,
        autoplay: onScroll({ container: document.body, enter: '80%' }),
      })
    })
  }
})
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
        v-for="(link, linkIndex) in links" :key="`${link.name}__ID__${link.link}`"
        ref="reviewsRefs" class="flex items-center justify-center"
      >
        <NavLink :link :link-index @clicked="toggleBurgerMenu()" />
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

.burger a {
  @apply flex w-full items-center justify-center;
}
</style>
