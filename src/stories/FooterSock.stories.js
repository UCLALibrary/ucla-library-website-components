import Vue from "vue"
import Vuex from "vuex"
import FooterSock from "@/lib-components/FooterSock"
import StoryRouter from "storybook-vue-router"

Vue.use(Vuex)

// Storybook default settings
export default {
    title: "FOOTER / Sock",
    component: FooterSock,
    decorators: [StoryRouter()],
}

const mock = {
    nodes: [
        {
            id: "1628",
            name: "EEEmergency",
            to: "/emergency",
            classes: null,
        },
        {
            id: "1627",
            name: "AAAccessibility",
            to: "https://external.url/accessibility",
            classes: null,
        },
        {
            id: "1629",
            name: "PPPrivacy & Terms of Use",
            to: "https://test-craft.library.ucla.edu/privacy-terms-of-use",
            classes: null,
            target: "0",
        },
        {
            id: "9511",
            name: "CCCreative Commons Attribution 4.0",
            to: "https://creativecommons.org/licenses/by/4.0/",
            classes: null,
            target: "1",
        },
    ],
}

// Variations of stories below
export const Default = () => ({
    store: new Vuex.Store({
        state: {
            footerSock: {
                nodes: mock.nodes,
            },
        },
    }),
    data() {
        return {
            ...mock,
        }
    },
    components: { FooterSock },
    computed: {},
    template: `<footer-sock />`,
})
