import { createApp } from 'vue'
import router from './router'
import './style.css'
import 'ucla-library-design-tokens/scss/app-global.scss'
import '@/styles/global.scss'
import App from './App.vue'

createApp(App).use(router).mount('#app')
