import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import 'ucla-library-design-tokens/scss/app-global.scss'
import '@/styles/global.scss'

<<<<<<< HEAD
import { vuetify } from './plugins/vuetify'
=======
import { createVuetify } from 'vuetify'
import { VCalendar } from 'vuetify/labs/VCalendar'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
>>>>>>> b8f008d8 (wip: calendar navigation)

import router from './router'

import App from './App.vue'

<<<<<<< HEAD
=======
const vuetify = createVuetify({
  components: {
    VCalendar,
  }
})

>>>>>>> b8f008d8 (wip: calendar navigation)
createApp(App).use(vuetify).use(router).use(createPinia()).mount('#app')
