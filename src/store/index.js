import Vue from "vue"
import Vuex from "vuex"
import HeaderSmart from "./modules/headerSmart.js"
import FooterPrimary from "./modules/footerPrimary.js"
import FooterSock from "./modules/footerSock.js"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        headerSmart: HeaderSmart,
        footerPrimary: FooterPrimary,
        footerSock: FooterSock,
    },
})
