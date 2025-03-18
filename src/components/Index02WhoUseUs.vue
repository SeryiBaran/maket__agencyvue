<script lang="ts" setup>

</script>

<template>
  <section class="whoUseUs">
    <div class="p-0 bg-[#242424]/20 items-center container">
      <h2 class="text-4.5 text-greenbrand-99 font-medium leading-[110%] mt-[max-content] px-[34px] py-[20px] border border-greybrand-15 rounded-full border-solid bg-greybrand-10 transform-translate-x--50% transform absolute">
        Trusted By 250+ Companies
      </h2>
      <div class="companyIconsGrid py-10 gap-5 grid grid-cols-6 w-full">
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
  @apply py-[20px] flex items-center justify-center;
}

.companyIcon img {
  @apply h-[40px] xl:h-[50px];
}
</style>
