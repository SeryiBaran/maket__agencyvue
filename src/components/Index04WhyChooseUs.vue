<script lang="ts" setup>
import type { Card } from '~/shared/types'

const cardData: Card[] = [
  { icon: 'i-mdi:medal', title: 'Expertise', description: 'Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.', link: '' },
  { icon: 'i-material-symbols:communication', title: 'Client-Centric Approach', description: 'We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.', link: '' },
  { icon: 'i-ri:shield-flash-fill', title: 'Results-Driven Solutions', description: 'Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.', link: '' },
  { icon: 'i-material-symbols:crown-rounded', title: 'Collaborative Partnership', description: 'We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.', link: '' },
]
</script>

<template>
  <section class="ourServices">
    <CategoryHero title="Why Choose SquareUp?" subheader="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results." :bg="1" />
    <div class="p-0 container">
      <div class="cards grid grid-cols-1 md:grid-cols-2">
        <div v-for="card in cardData" :key="card.title + card.icon" class="card p-10 px-7.5 border-b-1 border-greybrand-15 border-solid flex flex-1 flex-col md:p-15 xl:p-20 last:border-b-0 md:border-r-1 md:last-border-r-0">
          <div class="grow">
            <div class="flex gap-3.5 items-center md:gap-5">
              <CardIcon :card-data="card" />
              <p class="cardTitle text-5 font-medium leading-[150%] xl:text-6.5">
                {{ card.title }}
              </p>
            </div>
            <p class="cardDescription descriptionText leading-[150%] mt-6 md:mt-7.5 xl:mt-10">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>

</style>
