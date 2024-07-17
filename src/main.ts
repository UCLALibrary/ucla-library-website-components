import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './style.css'
import 'ucla-library-design-tokens/scss/app-global.scss'
import '@/styles/global.scss'
import '@/styles/themes.scss'

import App from './App.vue'

createApp(App).use(router).use(createPinia()).mount('#app')
