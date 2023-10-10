import { createApp } from 'vue'
import router from './router'
import './style.css'
import 'ucla-library-design-tokens/scss/app-global.scss'
import '@/styles/global.scss'
import { createPinia } from 'pinia'
import App from './App.vue'

createApp(App).use(router).use(createPinia()).mount('#app')
