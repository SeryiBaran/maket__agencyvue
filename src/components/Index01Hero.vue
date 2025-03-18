<script lang="ts" setup>

</script>

<template>
  <section class="hero">
    <div class="pt-112px h-[690px] container xl:h-[50rem]">
      <div class="subContainer">
        <h1 class="m-none text-[48px] font-semibold xl:text-[68px]">
          A Digital Product Studio<br>that will Work
        </h1>
        <div class="subheader text-[18px] text-greybrand-60 mt-[40px] px-[40px] py-[24px] border border-greybrand-15 rounded-[10px] border-solid bg-[#242424]/20 xl:text-[22px]">
          For <span class="subheaderSelected">Startups</span> , <span class="subheaderSelected">Enterprise leaders</span> , <span class="subheaderSelected">Media & Publishers</span> and <span class="subheaderSelected">Social Good</span>
        </div>
        <div class="font-medium pt-[50px] flex gap-[13px] items-center justify-center">
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
  @apply inline-block rounded-2 px-[14px] py-[12px] text-white bg-greybrand-15;
}
</style>
