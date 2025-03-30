<script lang="ts" setup>
import type { Review } from '~/shared/types'
import { isEven } from '~/shared/utils'

const images = ref<string[]>([]);

(async () => {
  for (let index = 0; index < 6; index++) {
    images.value.push((await import(`~/importAssets/reviewersAvatars/Reviewer-0${index}.webp`)).default)
  }
})()

const reviewsData: Review[] = [
  {
    title: 'SquareUp has been Instrumental in Transforming our Online Presence.',
    description: 'Their team\'s expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn\'t be happier.',
    user: {
      avatar: 0,
      name: 'John Smith',
      description: 'CEO of Chic Boutique',
      site: '',
    },
  },
  {
    title: 'Working with SquareUp was a breeze.',
    description: 'They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.',
    user: {
      avatar: 1,
      name: 'Sarah Johnson',
      description: 'Founder of HungryBites.',
      site: '',
    },
  },
  {
    title: 'SquareUp developed a comprehensive booking and reservation system for our event management company',
    description: 'Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients\' event experiences.',
    user: {
      avatar: 2,
      name: 'Mark Thompson',
      description: 'CEO of EventMasters',
      site: '',
    },
  },
  {
    title: 'ProTech Solutions turned to SquareUp to automate our workflow',
    description: 'They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp\'s expertise and professionalism have made them a trusted technology partner.',
    user: {
      avatar: 3,
      name: 'Laura Adams',
      description: 'COO of ProTech Solutions.',
      site: '',
    },
  },
  {
    title: 'SquareUp designed and developed a captivating web portal for showcasing our real estate listings.',
    description: 'The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp\'s expertise in the real estate industry is unmatched.',
    user: {
      avatar: 4,
      name: 'Michael Anderson',
      description: 'Founder of Dream Homes Realty.',
      site: '',
    },
  },
  {
    title: 'FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.',
    description: 'SquareUp\'s team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.',
    user: {
      avatar: 5,
      name: 'Emily Turner',
      description: 'CEO of FitLife Tracker',
      site: '',
    },
  },
]
</script>

<template>
  <section class="reviews">
    <CategoryHero title="What our Clients say About us" subheader="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us" :bg="2" />
    <div class="p-0 container">
      <div class="grid grid-cols-1 overflow-hidden md:grid-cols-2">
        <div
          v-for="(review, index) in reviewsData"
          :key="review.title"

          v-motion
          :initial="{ opacity: 0, x: 100 * (isEven(index) ? -1 : 1) }"
          :visible-once="{ opacity: 1, x: 0 }"
          :duration="400"

          class="px-6 py-10 border-b-1 border-greybrand-15 border-solid flex flex-col md:(px-15 py-20 border-r-1 last-border-r-0) xl:(px-20 py-25) last:border-b-0"
        >
          <p class="text-5 text-greenbrand-80 font-medium leading-[150%] xl:text-7">
            {{ review.title }}
          </p>
          <p class="descriptionText leading-[150%] mt-5 grow xl:mt-6">
            {{ review.description }}
          </p>
          <div class="mt-6 px-3.5 py-4.125 border border-greybrand-15 rounded-2 bg-[#242424]/20 flex gap-2.5 items-center md:(mt-7.5 p-3.5) xl:(mt-10 px-5 py-5.375)">
            <div class="userAvatarBG rounded-1 bg-[#ACFF24]/30 h-10 w-10 relative overflow-hidden md:(rounded-1.5 h-12 w-12) xl:(rounded-2 h-15 w-15)">
              <img class="userAvatar aspect-square object-cover" :src="images[review.user.avatar]" alt="User Avatar">
            </div>
            <div class="pl-2 grow">
              <p class="text-4 font-medium leading-[150%] xl:text-5">
                {{ review.user.name }}
              </p>
              <p class="text-3.5 font-light leading-[150%] xl:text-4.5">
                {{ review.user.description }}
              </p>
            </div>
            <a :href="review.user.site" class="button rounded-1.5 max-lg:hidden">
              Open Website
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.userAvatarBG::after {
  content: '';
  opacity: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  pointer-events: none;
  @apply bg-[#ACFF24]/30;
}

.userAvatar {
  filter: saturate(0);
}
</style>
