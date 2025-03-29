<script lang="ts" setup>
const ref1 = ref()
</script>

<template>
  <section class="hero max-md:px-0">
    <div class="pb-[205px] pt-20 items-center max-md:mx-0 md:pb-[274px] md:pt-28 container xl:h-200">
      <div class="subContainer">
        <h1
          v-motion-slide-top :duration="400" :delay="100"
          class="m-none text-8.5 font-semibold md:text-12 xl:text-17"
        >
          A Digital Product Studio<br>that will Work
        </h1>
        <div v-motion-slide-top :delay="200" :duration="300" class="subheader text-4 text-greybrand-60 mt-7.5 px-7.5 py-4.5 border border-greybrand-15 rounded-2 border-solid bg-[#242424]/20 gap-1.5 items-center md:text-4.5 xl:text-5.5 max-md:leading-[150%] xl:mt-10 xl:px-10 xl:py-6 xl:rounded-[10px] md:flex">
          For <span class="subheaderSelected">Startups</span> , <span class="subheaderSelected">Enterprise leaders</span> , <span class="subheaderSelected">Media & Publishers</span> and <span class="subheaderSelected">Social Good</span>
        </div>
        <div class="font-medium pt-10 flex gap-[13px] items-center justify-center">
          <RouterLink v-motion-pop :delay="300" :duration="200" to="/work" class="button buttonOutline">
            Our Works
          </RouterLink>
          <RouterLink v-motion-pop :delay="300" :duration="200" to="/work" class="button buttonPrimary">
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
  opacity: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  pointer-events: none;
}

@media (max-width: 767px) {
  .container::after {
    background-size: 240%;
  }
}

.subheader {
  backdrop-filter: blur(6px);
}
.subheaderSelected {
  @apply md:(inline-block rounded-2 px-2.5 py-2 xl:px-3.5 xl:py-3 text-white bg-greybrand-15);
}
</style>
