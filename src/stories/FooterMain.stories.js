// Storybook default settings
import Vue from "vue"
import Vuex from "vuex"
import FooterMain from "@/lib-components/FooterMain"
import StoryRouter from "storybook-vue-router"

Vue.use(Vuex)

export default {
    title: "FOOTER / Main",
    component: FooterMain,
    decorators: [StoryRouter()],
}

const mock = {
    funders: [
        {
            id: "28231",
            funderLogo: [
                {
                    id: "28636",
                    src: "https://static.library.ucla.edu/craftassetstest/_fullscreen/logo-arcadia1.svg",
                    height: 569,
                    width: 2560,
                    srcset: "https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/logo-arcadia1.svg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/logo-arcadia1.svg 960w",
                    alt: "Logo arcadia1",
                    focalPoint: [0.5, 0.5],
                    altText: null,
                },
            ],
            funderName: "Hostess Cupcakes",
            funderUrl:
                "https://www.hostesscakes.com/products/cupcakes/chocolate/",
        },
        {
            id: "28259",
            funderLogo: [
                {
                    id: "28637",
                    src: "https://static.library.ucla.edu/craftassetstest/_fullscreen/logo-library.svg",
                    height: 490,
                    width: 2560,
                    srcset: "https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/logo-library.svg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/logo-library.svg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/logo-library.svg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/logo-library.svg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/logo-library.svg 2560w",
                    alt: "Etch-a-Sketch",
                    focalPoint: [0.5, 0.5],
                    altText: null,
                },
            ],
            funderName: "Etch A Sketch",
            funderUrl: "https://en.wikipedia.org/wiki/Etch_A_Sketch",
        },
    ],
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
            name: "Dress to Depress",
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
    sock: [
        {
            id: "1628",
            name: "EEEmergency",
            to: "https://test-craft.library.ucla.edu/emergency",
            classes: null,
            target: "",
        },
        {
            id: "1627",
            name: "AAAccessibility",
            to: "https://test-craft.library.ucla.edu/accessibility",
            classes: null,
            target: "",
        },
        {
            id: "1629",
            name: "PPPrivacy & Terms of Use",
            to: "https://test-craft.library.ucla.edu/privacy-terms-of-use",
            classes: null,
            target: "",
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

export const Default = () => ({
    store: new Vuex.Store({
        state: {
            footerPrimary: {
                nodes: [
                    {
                        children: mock.socialItems,
                    },
                    {
                        children: mock.pressItems,
                    },
                ],
            },
            footerSock: {
                nodes: mock.sock,
            },
            footerSponsor: {
                funders: mock.funders,
            },
        },
    }),
    components: { FooterMain },
    data() {
        return {
            ...mock,
        }
    },

    template: `
        <footer-main />`,
})
