<script setup lang="ts">

</script>

<template>
  <section class="contactUs">
    <CategoryHero title="Thank you for your Interest in SquareUp." subheader="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us." :bg="2" :mini-text="true">
      <template #top>
        <div v-motion-pop-visible-once class="logoIcon p-2.5 rounded-1.75 bg-greenbrand-50 inline-flex size-12.5 aspect-square items-center justify-center md:p-3 xl:p-4 xl:rounded-3.75 md:size-15 xl:size-20">
          <img src="/assets/AbstractLogo.svg" alt="logo" class="">
        </div>
      </template>
      <template #bottom>
        <RouterLink v-anim-slide.bottom to="/contacts" class="button buttonPrimary buttonBig">
          Start Project
        </RouterLink>
      </template>
    </CategoryHero>
    <div class="p-0 container">
      <ContactsSection />
    </div>
  </section>
</template>

<style scoped>
.logoIcon {
  box-shadow: inset 0 0 14px 6px rgba(255, 255, 255, 0.5);
}
</style>
