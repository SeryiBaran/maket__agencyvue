<script lang="ts" setup>

</script>

<template>
  <section class="hero">
    <div class="pt-112px h-[690px] items-center container xl:h-[50rem]">
      <div class="subContainer">
        <h1 class="m-none text-[48px] font-semibold xl:text-[68px]">
          A Digital Product Studio<br>that will Work
        </h1>
        <div class="subheader text-[18px] text-greybrand-60 mt-[30px] px-[30px] py-[18px] border border-greybrand-15 rounded-[8px] border-solid bg-[#242424]/20 flex gap-1.5 items-center xl:text-[22px] xl:mt-[40px] xl:px-[40px] xl:py-[24px] xl:rounded-[10px]">
          For <span class="subheaderSelected">Startups</span> , <span class="subheaderSelected">Enterprise leaders</span> , <span class="subheaderSelected">Media & Publishers</span> and <span class="subheaderSelected">Social Good</span>
        </div>
        <div class="font-medium pt-[40px] flex gap-[13px] items-center justify-center">
          <RouterLink to="/work" class="button buttonOutline">
            Our Works
          </RouterLink>
          <RouterLink to="/work" class="button buttonPrimary">
            Contact Us
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.container {
  position: relative;
  text-align: center;
  z-index: 0;
}
.container::before {
  content: '';
  background: url('/assets/HeroBGRECTS.png');
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -2;
  pointer-events: none;
}

.container::after {
  content: '';
  background: url('/assets/AbstractDesign.png');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
  opacity: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  pointer-events: none;
}

.subheader {
  backdrop-filter: blur(6px);
}
.subheaderSelected {
  @apply inline-block rounded-2 px-[10px] py-[8px] xl:px-[14px] xl:py-[12px] text-white bg-greybrand-15;
}
</style>
