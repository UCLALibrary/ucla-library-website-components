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
            id: "27361",
            typeHandle: "internalContent",
            contentLink: [
                {
                    id: "16484",
                    contentType: "article",
                    to: "about/news/this-is-the-newest-article",
                    title: "This is the newest article",
                    text: "<p>Revlon, a cosmetics maker that broke racial barriers and dictated beauty trends for much of the last century, is filing for Chapter 11 bankruptcy protection</p>",
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
            id: "27384",
            typeHandle: "externalContent",
            title: " A title",
            image: [
                {
                    id: "26803",
                    src: "https://static.library.ucla.edu/craftassetstest/_fullscreen/kids_2022-08-03-003133_ybnd.jpg",
                    height: 1704,
                    width: 2560,
                    srcset: "https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/kids_2022-08-03-003133_ybnd.jpg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/kids_2022-08-03-003133_ybnd.jpg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/kids_2022-08-03-003133_ybnd.jpg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/kids_2022-08-03-003133_ybnd.jpg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/kids_2022-08-03-003133_ybnd.jpg 2560w",
                    alt: "Kids",
                    focalPoint: [0.5, 0.5],
                    altText: null,
                },
            ],
            byline1: "Ashton Prigge",
            byline2: null,
            category: "Kids",
            location: null,
            text: null,
        },
        {
            id: "28621",
            typeHandle: "internalContent",
            contentLink: [
                {
                    id: "25318",
                    contentType: "meapProject",
                    to: "meap/projects/argentinean-human-rights-digital-library-of-periodical-and-non-periodical-publications",
                    title: "Argentinean Human Rights Digital Library of Periodical and Non-periodical Publications",
                    text: "<p><span>Memoria Abierta is an alliance of nine Argentinean human rights organizations. Most of them were created during the last dictatorship (1976-1983) to denounce the violations committed during that period and to support relatives and victims. The Argentinean human rights movement, with its innovative strategies to fight oblivion and achieve justice, is known worldwide and referenced by other countries where human rights crimes have been or are being committed. </span><br /></p>",
                    projectCategory: "Publications",
                    projectByline1: [
                        {
                            id: "25325",
                            title: "Memoria Abierta",
                        },
                    ],
                    articleByline2: "2022-07-26T10:49:00-07:00",
                    projectLocations: [
                        {
                            id: "25324",
                            title: "South America",
                        },
                    ],
                    heroImage: [
                        {
                            id: "25334",
                            image: [
                                {
                                    id: "24878",
                                    src: "https://static.library.ucla.edu/craftassetstest/_fullscreen/toni-g-rbregi1jeo-unsplash.jpg",
                                    height: 4552,
                                    width: 2560,
                                    srcset: "https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/toni-g-rbregi1jeo-unsplash.jpg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/toni-g-rbregi1jeo-unsplash.jpg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/toni-g-rbregi1jeo-unsplash.jpg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/toni-g-rbregi1jeo-unsplash.jpg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/toni-g-rbregi1jeo-unsplash.jpg 2560w",
                                    alt: "Toni g rbregi1jeo unsplash",
                                    focalPoint: [0.5, 0.5],
                                    altText: null,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}

export const Default = () => ({
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
