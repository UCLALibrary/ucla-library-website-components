import { createApp } from "vue"
// import store from '@/store';
import "./serve.css"
import Dev from "./serve.vue"
import router from "../src/router"
import UclaLibraryWebsiteComponent from "../src/entry.js"

console.log(Dev)
const app = createApp(Dev)

// In Vue 3, plugins are used via `app.use()` directly on the app instance
app.use(UclaLibraryWebsiteComponent)

// app.use(store);
app.use(router)

app.mount("#app")