import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import 'ucla-library-design-tokens/scss/app-global.scss'
import '@/styles/global.scss'

import { vuetify } from './plugins/vuetify'

import router from './router'

import App from './App.vue'

createApp(App).use(vuetify).use(router).use(createPinia()).mount('#app')
