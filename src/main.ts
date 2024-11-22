import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import 'ucla-library-design-tokens/scss/app-global.scss'
import '@/styles/global.scss'

// import { createVuetify } from 'vuetify'
// import { VCalendar } from 'vuetify/labs/VCalendar'
// import 'vuetify/styles'
// import '@mdi/font/css/materialdesignicons.css'

import router from './router'

import App from './App.vue'

// export const vuetify = createVuetify({
//   components: {
//     VCalendar,
//   },
// })

createApp(App).use(router).use(createPinia()).mount('#app')
