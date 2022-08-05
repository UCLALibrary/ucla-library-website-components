import FlexibleHighlight from "@/lib-components/Flexible/Highlight"
import StoryRouter from "storybook-vue-router"

export default {
    title: "FLEXIBLE / Highlight",
    component: FlexibleHighlight,
    decorators: [StoryRouter()],
}

const mock = {
    id: "27359",
    typeHandle: "highlight",
    titleGeneral: "BlockHighlight",
    summary: "<p>BlockHighlight</p>",
    highlight: [
        {
            id: "27360",
            typeHandle: "internalContent",
            contentLink: [
                {
                    id: "20628",
                    category: "article",
                    to: "about/news/la-niña",
                    title: "La Niña",
                    text: "<p>La Niña is an oceanic and atmospheric phenomenon that is the colder counterpart of El Niño, as part of the broader El Niño–Southern Oscillation climate pattern.</p>",
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
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: "27361",
            typeHandle: "internalContent",
            contentLink: [
                {
                    id: "16484",
                    category: "article",
                    to: "about/news/this-is-the-newest-article",
                    title: "This is the newest article",
                    text: '<h1 class="KrUxN nOQZC dKIty IPnV GoWGq"><span>Revlon, a cosmetics maker that broke racial barriers and dictated beauty trends for much of the last century, is filing for Chapter 11 bankruptcy protection</span><br /></h1>',
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
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: "27384",
            typeHandle: "externalContent",
            title: "This is a title",
            image: [
                {
                    id: "26803",
                    src: "https://static.library.ucla.edu/craftassetstest/_fullscreen/kids_2022-08-03-003133_ybnd.jpg",
                    height: 1704,
                    width: 2560,
                    srcset: "https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/kids_2022-08-03-003133_ybnd.jpg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/kids_2022-08-03-003133_ybnd.jpg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/kids_2022-08-03-003133_ybnd.jpg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/kids_2022-08-03-003133_ybnd.jpg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/kids_2022-08-03-003133_ybnd.jpg 2560w",
                    alt: "Kids",
                    focalPoint: [0.5, 0.5],
                },
            ],
            byline1: "Ashton Prigge",
            byline2: null,
            category: "Kids",
            location: null,
            text: "Here is some text",
        },
    ],
}

export const ThreeCards = () => ({
    data() {
        return {
            block: mock,
        }
    },
    components: { FlexibleHighlight },
    template: `
        <flexible-highlight
            :block="block"
       />
    `,
})
