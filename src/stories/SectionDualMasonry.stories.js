// Storybook default settings
import SectionDualMasonry from "@/lib-components/SectionDualMasonry"
import StoryRouter from "storybook-vue-router"

export default {
    title: "SECTION / Dual Masonry",
    component: SectionDualMasonry,
    decorators: [StoryRouter()],
}

const items =  [
    {
        "image": {
            "src": "https://via.placeholder.com/1920x1920",
            "srcset": "https://via.placeholder.com/960x960 960w, https://via.placeholder.com/1280x1280 1280w, https://via.placeholder.com/1920x1920 1920w",
            "sizes": "100vw",
            "alt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "title": "Lorem ipsum"
        },
        "category": "Fermentu",
        "title": "Maecenas Leo Mauris",
        "prompt": "Velit Exceptur",
        "dates": "Datum 12 - Datum 23, 2021",
        "to": "/llamacorn/uri/1"
    },
    {
        "image": {
            "src": "https://via.placeholder.com/1920x1920",
            "srcset": "https://via.placeholder.com/960x960 960w, https://via.placeholder.com/1280x1280 1280w, https://via.placeholder.com/1920x1920 1920w",
            "sizes": "100vw",
            "alt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "title": "Lorem ipsum"
        },
        "category": "Fermentu",
        "title": "Maecenas Leo Mauris Praesent finibus fermentum ligula, nec tristique",
        "prompt": "Velit Exceptur",
        "dates": "Datum 1 - Datum 18, 2021",
        "to": "/visit/uri/2"
    }
],

export const Default = () => ({
    data() {
        return {
            items,
        }
    },
    components: { SectionDualMasonry },
    template: `
        <section-dual-masonry
            :items="items"
            to="/visit/foo"
        />
    `,
})
