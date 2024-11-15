import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './style.css'
import 'ucla-library-design-tokens/scss/app-global.scss'
import '@/styles/global.scss'

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(router).use(createPinia()).mount('#app')
