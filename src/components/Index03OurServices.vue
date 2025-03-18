<script lang="ts" setup>
import type { Card } from '~/shared/types'

const cardData: Card[] = [
  { icon: 'i-heroicons:paint-brush-solid', title: 'Design', description: 'At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it\'s about creating seamless and intuitive user experiences.' },
  { icon: 'i-heroicons:puzzle-piece-solid', title: 'Engineering', description: 'Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.' },
  { icon: 'i-streamline:car-battery-charging-solid', title: 'Project Management', description: 'Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.' },
]
</script>

<template>
  <section class="ourServices">
    <CategoryHero title="Our Services" subheader="Transform your brand with our innovative digital solutions that captivate and engage your audience." />
    <div class="px-0 container">
      <div class="cards">
        <div v-for="card in cardData" :key="card.title + card.icon" class="card">
          <CardIcon :card-data="card" />
          <p class="cardTitle">
            {{ card.title }}
          </p>
          <p class="cardDescription">
            {{ card.description }}
          </p>
          <a href="#!" class="cardLink" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>

</style>
