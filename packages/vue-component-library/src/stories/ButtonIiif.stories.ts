import ButtonIiif from "../lib-components/ButtonIiif.vue"
import { computed } from "vue"

export default {
    title: "Funkhaus / ButtonIiif",
    component: ButtonIiif,
}

export const Default = () => ({
    components: { ButtonIiif },
    provide() {
        return {
            theme: computed(() => "dlc"),
        }
    },
    template: '<ButtonIiif to="https://iiif.io/" />',
})
