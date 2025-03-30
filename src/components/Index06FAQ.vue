<script lang="ts" setup>
import { useAutoAnimate } from '@formkit/auto-animate/vue'
import { nanoid } from 'nanoid'
import { isEven } from '~/shared/utils'

interface FaqElem {
  id: string
  title: string
  answer: string
}

type FaqDataPart = FaqElem[]

type FaqData = FaqDataPart[]

const faqData: FaqData = [
  [{
    id: nanoid(),
    title: 'What services does SquareUp provide?',
    answer: 'SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.',
  }, {
    id: nanoid(),
    title: 'How can SquareUp help my business?',
    answer: 'SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.',
  }, {
    id: nanoid(),
    title: 'What industries does SquareUp work with?',
    answer: 'SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.',
  }, {
    id: nanoid(),
    title: 'How long does it take to complete a project with SquareUp?',
    answer: 'SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.',
  }],
  [{
    id: nanoid(),
    title: 'Do you offer ongoing support and maintenance after the project is completed?',
    answer: 'SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.',
  }, {
    id: nanoid(),
    title: 'Can you work with existing design or development frameworks?',
    answer: 'SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.',
  }, {
    id: nanoid(),
    title: 'How involved will I be in the project development process?',
    answer: 'SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.',
  }, {
    id: nanoid(),
    title: 'Can you help with website or app maintenance and updates?',
    answer: 'SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.',
  }],
]

const activeId = ref<string | null>(faqData[0][0].id)

function getIndex(faqElem: FaqElem) {
  return faqData.flat().findIndex(e => e.id === faqElem.id)
}

function handleClick(id: string) {
  activeId.value = activeId.value === id ? null : id
}

// TODO: dont use @formkit/auto-animate/vue
</script>

<template>
  <section class="faq">
    <CategoryHero title="Frequently Asked Questions" subheader="Still you have any questions? Contact our Team via hello@squareup.com" :bg="3" />
    <div class="p-0 container">
      <div class="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <div
          v-for="(faqPart, indexPart) in faqData"
          :key="indexPart"
          class="border-r-1 border-greybrand-15 md:py-15 xl:py-20 last:border-r-0"
        >
          <div
            v-for="faqElem in faqPart"
            :key="faqElem.id"

            v-motion
            :initial="{ opacity: 0, x: 100 * (isEven(indexPart) ? -1 : 1) }"
            :visible-once="{ opacity: 1, x: 0 }"
            :duration="400"

            class="faqElem px-6 py-7.5 border-t-1 border-greybrand-15 border-solid cursor-pointer md:(px-10 py-7.5) xl:(px-12.5 py-8.5) last:border-b-1"
            :class="{ faqElemActive: faqElem.id === activeId }"

            @click="() => handleClick(faqElem.id)"
          >
            <div class="faqElemIcon">
              <CardIcon :enable-hover-effect="false" :inherit-icon-color="true" :text-instead-of-icon="String(getIndex(faqElem) + 1).padStart(2, '0')" :show-corner-gradient="false" class="h-13 min-w-13 md:h-15.5 md:w-15.5 xl:h-20 xl:w-20" />
            </div>
            <p class="faqElemTitle text-4 font-medium leading-[150%] md:text-4.5 xl:text-5.5">
              {{ faqElem.title }}
            </p>
            <i class="i-heroicons:plus-solid faqElemOpenCloseIcon text-inherit h-8 w-8 block" />
            <div v-auto-animate class="faqElemAnswer">
              <p v-if="faqElem.id === activeId" class="descriptionText leading-[150%]">
                {{ faqElem.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.faqElem {
  @apply grid gap-x-5;
  grid-template-columns: min-content auto min-content;
  /* grid-template-areas:
    'faqElemIcon faqElemTitle faqElemOpenCloseIcon'
    'faqElemIcon faqElemAnswer faqElemAnswer'; */
  grid-template-rows: repeat(2, auto);
  align-items: center;
}

.faqElem > * {
  transition-duration: 200ms;
  transition-property: color, transform;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.faqElemIcon {
  grid-area: faqElemIcon;
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
}
.faqElemTitle {
  grid-area: faqElemTitle;
  grid-row: 1 / span 1;
  grid-column: 2 / span 1;
}
.faqElemOpenCloseIcon {
  grid-area: faqElemOpenCloseIcon;
  grid-row: 1 / span 1;
  grid-column: 3 / span 1;
}
.faqElemAnswer {
  grid-area: faqElemAnswer;
  grid-row: 2 / span 1;
  grid-column: 2 / span 2;
}

.faqElem.faqElemActive :where(.faqElemIcon, .faqElemTitle, .faqElemOpenCloseIcon) {
  @apply color-greenbrand-70;
}

.faqElem.faqElemActive .faqElemOpenCloseIcon {
  transform: rotateZ(45deg);
}
</style>
