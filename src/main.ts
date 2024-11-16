import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import 'ucla-library-design-tokens/scss/app-global.scss'
import '@/styles/global.scss'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VCalendar } from 'vuetify/labs/VCalendar'

import router from './router'

import App from './App.vue'

const vuetify = createVuetify({
  components: {
    VCalendar,
  },
})

createApp(App).use(vuetify).use(router).use(createPinia()).mount('#app')
