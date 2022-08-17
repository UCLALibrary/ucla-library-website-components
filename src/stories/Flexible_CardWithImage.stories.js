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
                    contentType: "article",
                    to: "about/news/la-niña",
                    title: "La Niña",
                    text: "<p>La Niña is an oceanic and atmospheric phenomenon that is the colder counterpart of El Niño, as part of the broader El Niño–Southern Oscillation climate pattern.</p>",
                    articleCategory: [
                        {
                            title: "Featured",
                        },
                    ],
                    articleByline1: [
                        {
                            id: "11827",
                            to: "about/staff/brigid-abreu",
                            title: "Brigid Abreu",
                        },
                        {
                            id: "11910",
                            to: "about/staff/sylvia-page",
                            title: "Sylvia Page",
                        },
                    ],
                    articleByline2: "2022-06-21T12:39:00-07:00",
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
                    heroImage: [
                        {
                            id: "20639",
                            image: [
                                {
                                    id: "20637",
                                    src: "https://static.library.ucla.edu/craftassetstest/_fullscreen/LaNina-Jet-Wintertime-Pattern.jpg",
                                    height: 1997,
                                    width: 2560,
                                    srcset: "https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/LaNina-Jet-Wintertime-Pattern.jpg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/LaNina-Jet-Wintertime-Pattern.jpg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/LaNina-Jet-Wintertime-Pattern.jpg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/LaNina-Jet-Wintertime-Pattern.jpg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/LaNina-Jet-Wintertime-Pattern.jpg 2560w",
                                    alt: "La Nina Jet Wintertime Pattern",
                                    focalPoint: [0.5, 0.5],
                                    altText: "La Niña",
                                },
                            ],
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
                    contentType: "article",
                    to: "about/news/this-is-the-newest-article",
                    title: "This is the newest article",
                    text: '<p>Add "MEAP" to show article in the MEAP website</p>',
                    articleCategory: [
                        {
                            title: "Featured",
                        },
                    ],
                    articleByline1: [
                        {
                            id: "3522",
                            to: "about/staff/dianne",
                            title: "Dianne Weinthal",
                        },
                    ],
                    articleByline2: "2022-05-19T13:59:00-07:00",
                    associatedLocations: [
                        {
                            id: "4695",
                            title: "Louise M. Darling Biomedical Library",
                            to: "visit/locations/biomed",
                        },
                    ],
                    heroImage: [
                        {
                            id: "16537",
                            image: [
                                {
                                    id: "2442",
                                    src: "https://static.library.ucla.edu/craftassetstest/_fullscreen/shortbread-cookies.jpg",
                                    height: 1421,
                                    width: 2560,
                                    srcset: "https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/shortbread-cookies.jpg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/shortbread-cookies.jpg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/shortbread-cookies.jpg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/shortbread-cookies.jpg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/shortbread-cookies.jpg 2560w",
                                    alt: "Shortbread cookies",
                                    focalPoint: [0.5, 0.5],
                                    altText: null,
                                },
                            ],
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
                    altText: null,
                },
            ],
            byline1: "By External Content",
            byline2: null,
            category: "About",
            location: null,
            text: "<p>About text found here.</p>",
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
