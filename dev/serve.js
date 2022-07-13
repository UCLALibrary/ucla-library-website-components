import Vue from "vue"
import store from "@/store"
import Vuex from "vuex"
import Dev from "./serve.vue"
import router from "@/router/index.js"
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call
import UclaLibraryWebsiteComponent from "@/entry.esm"
Vue.use(UclaLibraryWebsiteComponent)

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(Dev),
}).$mount("#app")
