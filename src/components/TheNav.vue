<script lang="ts" setup>

</script>

<template>
  <nav>
    <ul>
      <li
        v-for="link in [{ name: 'Home', link: '/' },
                        { name: 'Services', link: '/services' },
                        { name: 'Work', link: '/work' },
                        { name: 'Process', link: '/process' },
                        { name: 'About', link: '/about' },
                        { name: 'Careers', link: '/careers' }]" :key="`${link.name}__ID__${link.link}`"
      >
        <RouterLink :to="link.link" active-class="activeLink" class="link button">
          {{ link.name }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
}

nav ul {
  display: flex;
  gap: 30px;
}

nav ul li {
  display: flex;
  align-items: center;
}

.link {
  @apply px-0 py-[12px] min-[1440px]:py-[14px];
}

.link.activeLink {
  @apply bg-greybrand-15 text-white px-[22px] min-[1440px]:px-[24px];
  font-weight: 600;
}
</style>
