import FlexibleCardWithImage from "@/lib-components/Flexible/CardWithImage.vue"
import StoryRouter from "storybook-vue-router"

export default {
    title: "FLEXIBLE / Card With Image",
    component: FlexibleCardWithImage,
    decorators: [StoryRouter()],
}

const mock = {
    id: "28284",
    typeHandle: "cardWithImage",
    titleGeneral: "Card with image",
    summary: "<p>card with image</p>",
    cardWithImage: [
        {
            id: "28285",
            typeHandle: "internalContent",
            contentLink: [
                {
                    id: "20628",
                    to: "about/news/la-niña",
                    title: "La Niña",
                    associatedLocations: [
                        {
                            id: "11709",
                            title: "William Andrews Clark Memorial Library",
                            to: "visit/locations/william-andrews-clark-memorial-library",
                        },
                        {
                            id: "11497",
                            title: "Richard C. Rudolph East Asian Library",
                            to: "visit/locations/east-asian-library",
                        },
                    ],
                },
            ],
        },
        {
            id: "28286",
            typeHandle: "internalContent",
            contentLink: [
                {
                    id: "16484",
                    to: "about/news/this-is-the-newest-article",
                    title: "This is the newest article",
                    associatedLocations: [
                        {
                            id: "4695",
                            title: "Louise M. Darling Biomedical Library",
                            to: "visit/locations/biomed",
                        },
                    ],
                },
            ],
        },
        {
            id: "28287",
            typeHandle: "externalContent",
            title: null,
            image: [
                {
                    id: "28251",
                    src: "https://static.library.ucla.edu/craftassetstest/_fullscreen/etch-a-sketch.jpeg",
                    height: 2032,
                    width: 2560,
                    srcset: "https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/etch-a-sketch.jpeg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/etch-a-sketch.jpeg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/etch-a-sketch.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/etch-a-sketch.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/etch-a-sketch.jpeg 2560w",
                    alt: "Etch a sketch",
                    focalPoint: [0.5, 0.5],
                },
            ],
            byline1: "By External Content",
            byline2: null,
            category: "About",
            location: null,
            summary: "<p>About text found here.</p>",
        },
    ],
}

export const Default = () => ({
    data() {
        return {
            block: mock,
        }
    },
    components: { FlexibleCardWithImage },
    template: `
        <flexible-card-with-image
            :block="block"
       />
    `,
})
