<script setup lang="ts">
import FormCard from '~/components/FormCard.vue'
import Checkbox from '~/components/input/Checkbox.vue'
import Slider from '~/components/input/Slider.vue'
import TextInput from '~/components/input/TextInput.vue'

const checkboxes = [
  { valueName: 'webDesign', title: 'Web Design' },
  { valueName: 'collaboration', title: 'Collaboration' },
  { valueName: 'mobileAppDesign', title: 'Mobile App Design' },
  { valueName: 'others', title: 'Others' },
] as const

type CheckboxesModels = { [k in (typeof checkboxes)[number]['valueName']]: boolean }

interface FormModel {
  fullName: string
  email: string
  checkboxes: CheckboxesModels
  budget: number[]
  message: string
}

const formModel = reactive<FormModel>({
  fullName: '',
  email: '',
  checkboxes: {
    webDesign: true,
    collaboration: false,
    mobileAppDesign: false,
    others: false,
  },
  budget: [1000, 5000],
  message: '',
})

function handleSubmit() {
  // eslint-disable-next-line no-alert
  alert(JSON.stringify(formModel))
}
</script>

<template>
  <form class="contactsForm mx-auto p-6 border-1 border-b-0 border-greybrand-15 gap-7.5 grid grid-cols-1 w-full md:p-15 xl:p-20 xl:gap-10 sm:grid-cols-2 md:max-w-211.5 xl:max-w-265">
    <FormCard title="Full Name">
      <TextInput v-model="formModel.fullName" placeholder="Type here" />
    </FormCard>
    <FormCard title="Email">
      <TextInput v-model="formModel.email" placeholder="Type here" />
    </FormCard>
    <FormCard title="Why are you contacting us?" class="sm:col-span-2" :big-y-padding="true">
      <div class="gap-y-5 grid grid-cols-1 w-full md:gap-x-5 md:gap-y-6 sm:grid-cols-2">
        <Checkbox v-for="checkbox in checkboxes" :key="checkbox.valueName" v-model="formModel.checkboxes[checkbox.valueName]" :value-name="checkbox.valueName" :title="checkbox.title" />
      </div>
    </FormCard>
    <FormCard title="Your Budget" description="Slide to indicate your budget range" class="sm:col-span-2" :big-y-padding="true">
      <div class="mb-7.5 flex grow">
        <Slider v-model="formModel.budget" :min="500" :max="12500" :step="500" :show-thumb-tip="true" class="grow">
          <template #thumbTip="{ value }">
            ${{ value }}
          </template>
        </Slider>
      </div>
    </FormCard>
    <FormCard title="Your Message" class="sm:col-span-2">
      <TextInput v-model="formModel.message" :is-textarea="true" placeholder="Type here" />
    </FormCard>
    <div class="submitBtnContainer text-center sm:col-span-2">
      <button class="button buttonPrimary buttonBig font-medium md:(px-9 py-3.5) xl:(px-11 py-4.5) max-sm:w-full" @click.prevent="handleSubmit()">
        Submit
      </button>
    </div>
  </form>
</template>

<style scoped>

</style>
