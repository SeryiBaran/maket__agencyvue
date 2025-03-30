<script lang="ts" setup>
import type { Card } from '~/shared/types'

const cardData: Card[] = [
  { icon: 'i-heroicons:paint-brush-solid', title: 'Design', description: 'At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it\'s about creating seamless and intuitive user experiences.', link: '' },
  { icon: 'i-heroicons:puzzle-piece-solid', title: 'Engineering', description: 'Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.', link: '' },
  { icon: 'i-streamline:car-battery-charging-solid', title: 'Project Management', description: 'Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.', link: '' },
]
</script>

<template>
  <section class="ourServices">
    <CategoryHero title="Our Services" subheader="Transform your brand with our innovative digital solutions that captivate and engage your audience." :bg="0" />
    <div class="p-0 container">
      <div class="cards flex flex-col md:flex-row">
        <div v-for="(card, index) in cardData" :key="card.title + card.icon" v-motion-fade-visible-once :duration="400" :delay="index * 50" class="card p-7.5 border-b-1 border-greybrand-15 border-solid flex flex-1 flex-col md:p-10 xl:p-12.5 last:border-b-0 md:border-r-1 md:last-border-r-0">
          <div class="grow">
            <div class="flex gap-3.5 items-center md:block">
              <CardIcon :icon="card.icon" />
              <p class="cardTitle text-5 font-semibold leading-[150%] md:text-6 xl:text-7.5 md:mt-7.5 xl:mt-10">
                {{ card.title }}
              </p>
            </div>
            <p class="cardDescription text-3.5 leading-6 mt-6 md:text-4 xl:text-4.5 md:mt-3.5 xl:mt-5">
              {{ card.description }}
            </p>
          </div>
          <RouterLink :to="card.link" class="cardLink button text-3.5 leading-6 mt-6 px-4 py-3.5 text-center rounded-2 w-full block xl:text-4.5 md:mt-15 xl:mt-20 xl:py-4.5">
            Learn More
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>

</style>
