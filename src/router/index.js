import Vue  from "vue-demi"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = []

const router = new VueRouter({
    mode: "history",
    routes,
})

export default router
