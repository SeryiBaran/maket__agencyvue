<script lang="ts" setup>
const images = ref<string[]>([]);

(async () => {
  for (let index = 0; index < 6; index++) {
    images.value.push((await import(`~/importAssets/companyIcons/Logo-${index}.png`)).default)
  }
})()
</script>

<template>
  <section class="whoUseUs">
    <div class="p-0 items-center container">
      <h2
        class="text-3.5 text-greenbrand-99 font-medium mt-[max-content] px-[24px] py-[14px] border border-greybrand-15 rounded-full border-solid bg-greybrand-10 absolute xl:text-4.5 xl:leading-[110%] xl:px-[34px] xl:py-[20px]"
      >
        Trusted By 250+ Companies
      </h2>
      <div class="companyIconsGrid pt-5 grid grid-cols-2 w-full overflow-hidden lg:py-7.5 xl:py-10 lg:gap-5 lg:grid-cols-6">
        <div
          v-for="(url, index) in images"
          :key="index"
          v-motion-slide-visible-once-right
          class="companyIcon"
          :delay="100 * index"
          :duration="200"
        >
          <img :src="url">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
h2 {
  transform: translateY(-50%);
}

.companyIcon {
  @apply py-7.5 lg:py-4 xl:py-5 flex items-center justify-center max-lg:(border-solid border-greybrand-15 border-b-1 odd:border-r-1 [&:nth-last-child(-n+2)]:border-b-0 odd:p-r-5 even:p-l-5);
}

.companyIcon img {
  @apply h-10 md:h-15 lg:h-10 xl:h-12.5;
}
</style>
