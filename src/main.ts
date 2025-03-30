import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { MotionPlugin } from '@vueuse/motion'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

import App from './App.vue'

// import '@fontsource/barlow/400.css'
// import '@fontsource/barlow/500.css'
// import '@fontsource/barlow/600.css'
// import '@fontsource/barlow/700.css'
// import '@fontsource/barlow/800.css'
// import '@fontsource/barlow/900.css'

import './styles/main.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  routes,
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
})
app.use(router)
app.use(MotionPlugin)
app.use(autoAnimatePlugin)
app.mount('#app')
