<script lang="ts" setup>
const mouse = useMouse({
  type: 'client',
})

const blobStyleString = computed(() => `background-image: radial-gradient(circle at ${mouse.x.value}px ${mouse.y.value}px, color-mix(in oklch, var(--colors-greenbrand-50) 5%, transparent) 0%, var(--colors-greybrand-10) 30%);`)
</script>

<template>
  <div class="bulbBg text-50 z-0" :style="blobStyleString" />
  <TheHeader class="z-1" />
  <main class="flex grow flex-col h-full z-1">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
  <TheFooter class="z-1" />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.bulbBg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
}
</style>
