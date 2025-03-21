<script lang="ts" setup>

</script>

<template>
  <section class="whoUseUs">
    <div class="p-0 bg-[#242424]/20 items-center container">
      <h2 class="text-3.5 text-greenbrand-99 font-medium mt-[max-content] px-[24px] py-[14px] border border-greybrand-15 rounded-full border-solid bg-greybrand-10 transform-translate-x--50% transform absolute xl:text-4.5 xl:leading-[110%] xl:px-[34px] xl:py-[20px]">
        Trusted By 250+ Companies
      </h2>
      <div class="companyIconsGrid pt-5 grid grid-cols-2 w-full md:py-7.5 xl:py-10 md:gap-5 md:grid-cols-6">
        <div class="companyIcon">
          <img src="/assets/companyIcons/Logo.png">
        </div>
        <div class="companyIcon">
          <img src="/assets/companyIcons/Logo-1.png">
        </div>
        <div class="companyIcon">
          <img src="/assets/companyIcons/Logo-2.png">
        </div>
        <div class="companyIcon">
          <img src="/assets/companyIcons/Logo-3.png">
        </div>
        <div class="companyIcon">
          <img src="/assets/companyIcons/Logo-4.png">
        </div>
        <div class="companyIcon">
          <img src="/assets/companyIcons/Logo-5.png">
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
  @apply py-7.5 md:py-4 xl:py-5 flex items-center justify-center max-md:(border border-solid border-greybrand-15) odd:border-l-0;
}

.companyIcon img {
  @apply h-10 xl:h-12.5;
}
</style>
