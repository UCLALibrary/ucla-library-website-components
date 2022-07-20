// Storybook default settings
import Vue from "vue"
import Vuex from "vuex"
import FooterPrimary from "@/lib-components/FooterPrimary"
import StoryRouter from "storybook-vue-router"

Vue.use(Vuex)

export default {
    title: "FOOTER / Primary",
    component: FooterPrimary,
    decorators: [StoryRouter()],
}

const mock = {
    socialItems: [
        {
            id: "11777",
            name: "Twotter",
            to: "https://twitter.com/",
            classes: null,
            target: "1",
        },
        {
            id: "11778",
            name: "Fatebook",
            to: "https://www.facebook.com/",
            classes: null,
            target: "1",
        },
        {
            id: "11779",
            name: "Instagrim",
            to: "https://www.instagram.com/",
            classes: null,
            target: "1",
        },
        {
            id: "11780",
            name: "FooTube",
            to: "https://www.youtube.com/",
            classes: null,
            target: "1",
        },
    ],

    pressItems: [
        {
            id: "11781",
            name: "Dress Doom",
            to: "https://test-craft.library.ucla.edu/press-room",
            classes: null,
            target: "",
        },
        {
            id: "11782",
            name: "Careers at USC",
            to: "https://test-craft.library.ucla.edu/careers-at-ucla",
            classes: null,
            target: "",
        },
    ],
}

// Variations of stories below
export const Default = () => ({
    store: new Vuex.Store({
        state: {
            nodes: [
                {
                    children: mock.socialItems,
                },
                {
                    children: mock.pressItems,
                },
            ],
        },
        getters: {
            getFooterPrimaryNodes: (state) => state.nodes,
        },
    }),
    data() {
        return {
            ...mock,
        }
    },
    components: { FooterPrimary },
    template: `<footer-primary :social-items="socialItems" :press-items="pressItems" :form="true" />`,
})

export const NoForm = () => ({
    store: new Vuex.Store({
        state: {
            nodes: [
                {
                    children: mock.socialItems,
                },
                {
                    children: mock.pressItems,
                },
            ],
        },
        getters: {
            getFooterPrimaryNodes: (state) => state.nodes,
        },
    }),
    data() {
        return {
            ...mock,
        }
    },
    components: { FooterPrimary },
    template: `<footer-primary :social-items="socialItems" :press-items="pressItems" :form="false" />`,
})
