import Vue from "vue"
import Vuex from "vuex"
import HeaderSmart from "./modules/headerSmart.js"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        headerSmart: HeaderSmart,
    },
})
