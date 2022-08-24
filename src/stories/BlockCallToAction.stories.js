// Storybook default settings
import Vue from "vue"
import Vuex from "vuex"
import BlockCallToAction from "@/lib-components/BlockCallToAction"
import StoryRouter from "storybook-vue-router"

Vue.use(Vuex)

export default {
    title: "BLOCK / Call to Action",
    component: BlockCallToAction,
    decorators: [
        StoryRouter(
            {},
            {
                routes: [
                    { path: "/", component: BlockCallToAction },
                    { path: "/help/foo/bar/", component: BlockCallToAction },
                ],
            }
        ),
    ],
}

const mock = {
    svgName: "svg-call-to-action-chat",
    title: "Lorem ipsum dolor sit amet?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem ipsum dolor",
    to: "/help/foo/bar/",
    isDark: false,
    isSmallSize: false,
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockCallToAction },
    template: `
        <block-call-to-action
            :svgName="svgName"
            :title="title"
            :text="text"
            :name="name"
            :to="to"
            :isDark=false
            :isSmallSize="isSmallSize"
        />
    `,
})

export const DarkBlue = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockCallToAction },
    template: `
        <block-call-to-action
            :svgName= "svgName"
            :title="title"
            :text="text"
            :name="name"
            :to="to"
            :is-dark=true
            :isSmallSize="isSmallSize"
        />
    `,
})

export const SmallCTA = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockCallToAction },
    template: `
        <block-call-to-action
            svgName= "svg-call-to-action-find"
            :title="title"
            :text="text"
            :name="name"
            :to="to"
            :is-dark=false
            :isSmallSize=true
        />
    `,
})

export const SmallCTADarkBlue = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockCallToAction },
    template: `
        <block-call-to-action
            svg-name= "svg-call-to-action-money"
            :title="title"
            :text="text"
            :name="name"
            :to="to"
            :is-small-size=true
            :is-dark=true
        />
    `,
})

export const GlobalAskALibrarian = () => ({
    store: new Vuex.Store({
        state: {
            globals: {
                askALibrarian: {
                    id: "7322",
                    askALibrarianTitle: "Have further questions?",
                    askALibrarianText:
                        "<p>We're here to help. Chat with a librarian 24/7, schedule a research consultation or email us your quick questions.</p>",
                    buttonUrl: [
                        {
                            buttonText: "Contact us",
                            buttonUrl: "/help/",
                        },
                    ],
                },
            },
        },
    }),
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockCallToAction },
    template: `
        <block-call-to-action
            :is-global="true"
        />
    `,
})

export const GlobalMeapCTA = () => ({
    store: new Vuex.Store({
        state: {
            globals: {
                meapCallToAction: {
                    id: "28646",
                    name: "MEAP Call to Action",
                    titleGeneral: "Get in Touch",
                    summary: "<p>Have further questions?</p>",
                    button: [
                        {
                            buttonText: "Contact Us",
                            buttonUrl: "http://mailto:meap@library.ucla.edu",
                        },
                    ],
                },
            },
        },
    }),
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockCallToAction },
    template: `
        <block-call-to-action
            :is-meap-global="true"
        />
    `,
})
