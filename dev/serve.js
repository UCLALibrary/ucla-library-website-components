import Vue from "vue"
import Dev from "./serve.vue"
import router from "@/router"
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call
import UclaLibraryWebsiteComponent from "@/entry.esm"
Vue.use(UclaLibraryWebsiteComponent)

Vue.config.productionTip = false

new Vue({
    router,
    render: (h) => h(Dev),
}).$mount("#app")
