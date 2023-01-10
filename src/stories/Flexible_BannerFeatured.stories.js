import FlexibleBannerFeatured from "@/lib-components/Flexible/BannerFeatured.vue"
import StoryRouter from "storybook-vue-router"

export default {
    title: "FLEXIBLE / Banner Featured",
    component: FlexibleBannerFeatured,
    decorators: [StoryRouter()],
}

const mock = {
    id: "26943",
    sectionTitle: "Internal link",
    content: [
        {
            id: "26944",
            contentLink: [
                {
                    contentType: "article",
                    title: "La Niña",
                    to: "about/news/la-niña",
                    summary:
                        "<p>La Niña is an oceanic and atmospheric phenomenon that is the colder counterpart of El Niño, as part of the broader El Niño–Southern Oscillation climate pattern.</p>",
                    articleCategory: [
                        {
                            title: "Featured Category",
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
                    articleLocations: [
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
                            image: [
                                {
                                    id: "20637",
                                    src: "https://static.library.ucla.edu/craftassetstest/LaNina-Jet-Wintertime-Pattern.jpg",
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
    ],
    typeHandle: "bannerFeatured",
}

const mock2 = {
    id: "27050",
    sectionTitle: "External Link",
    content: [
        {
            id: "27051",
            image: [
                {
                    id: "26089",
                    src: "https://static.library.ucla.edu/craftassetstest/AlbinoFox.jpg",
                    height: 2074,
                    width: 2560,
                    srcset: "https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/AlbinoFox.jpg 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/AlbinoFox.jpg 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/AlbinoFox.jpg 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/AlbinoFox.jpg 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/AlbinoFox.jpg 2560w",
                    alt: "Albino Fox",
                    focalPoint: [0.5, 0.5],
                    altText: null,
                },
            ],
            title: "Halelua",
            summary: "<p>White foxes are in Artic.</p>",
            alignment: "right",
            location: "Rain Forest",
            byline1: "Feburary 2022",
            byline2: "Dr ABC",
            to: "www.foxes.com",
            category: "foxes",
            contentType: "project",
        },
    ],
    typeHandle: "bannerFeatured",
}

const mock3 = {
    id: "27175",
    typeHandle: "bannerFeatured",
    sectionTitle: "Use this for breadcrumb",
    content: [
        {
            id: "27176",
            contentLink: [
                {
                    contentType: "meapProject",
                    title: "Argentinean Human Rights Digital Library of Periodical and Non-periodical Publications",
                    to: "meap/projects/argentinean-human-rights-digital-library-of-periodical-and-non-periodical-publications",
                    summary:
                        "<p><span>Memoria Abierta is an alliance of nine Argentinean human rights organizations. Most of them were created during the last dictatorship (1976-1983) to denounce the violations committed during that period and to support relatives and victims. The Argentinean human rights movement, with its innovative strategies to fight oblivion and achieve justice, is known worldwide and referenced by other countries where human rights crimes have been or are being committed. </span><br /></p>",
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
                            image: [
                                {
                                    id: "24878",
                                    src: "https://static.library.ucla.edu/craftassetstest/toni-g-rbregi1jeo-unsplash.jpg",
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
    componentName: "flexible-banner-featured",
}

const mock4 = {
    id: "36699",
    typeHandle: "bannerFeatured",
    content: [
        {
            id: "36700",
            contentLink: [
                {
                    contentType: "impactReportStory",
                    title: "After Covid Triggered a Campus Closure, UCLA Library Reimagined Its Services for Students and Faculty Scattered Across the Country and Globe",
                    to: "impact/2021/ucla-library-reimagined",
                    summary:
                        "<p>Undergraduates reflect on successfully completing their research projects while learning remotely.</p>",
                    articleByline2: "2021-09-09T10:03:00-07:00",
                    heroImage: [
                        {
                            image: [
                                {
                                    id: "36778",
                                    src: "https://static.library.ucla.edu/craftassetstest/images/open-sourced-video-ucla-library.jpeg",
                                    height: 1440,
                                    width: 2560,
                                    srcset: "https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/open-sourced-video-ucla-library.jpeg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/open-sourced-video-ucla-library.jpeg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/open-sourced-video-ucla-library.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/open-sourced-video-ucla-library.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/open-sourced-video-ucla-library.jpeg 2560w",
                                    alt: "Open sourced video ucla library",
                                    focalPoint: [0.5, 0.5],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}

const externalVideo = {
    id: "42757",
    typeHandle: "bannerFeatured",
    content: [
        {
            id: "42758",
            image: [
                {
                    id: "42732",
                    src: "https://static.library.ucla.edu/craftassetstest/images/sample-5s.mp4",
                    height: null,
                    width: null,
                    srcset: "",
                    alt: "Sample 5s",
                    focalPoint: [0.5, 0.5],
                },
            ],
            title: "External Video",
            summary:
                "<p>This is sample test video which has few seconds of video</p>",
            alignment: "left",
            byline1: null,
            byline2: null,
            to: "www.samplevideos.com",
            category: null,
            contentType: "article",
        },
    ],
}

const internalVideo = {
    id: "36699",
    typeHandle: "bannerFeatured",
    content: [
        {
            id: "36700",
            contentLink: [
                {
                    contentType: "impactReportStory",
                    title: "After Covid Triggered a Campus Closure, UCLA Library Reimagined Its Services",
                    to: "impact/2021/ucla-library-reimagined",
                    summary:
                        "<p>Undergraduates reflect on successfully completing their research projects while learning remotely.</p>",
                    articleByline2: "2021-09-09T10:03:00-07:00",
                    heroImage: [
                        {
                            image: [
                                {
                                    id: "42094",
                                    src: "https://static.library.ucla.edu/craftassetstest/images/ucla-impact-report-animation.mp4",
                                    height: null,
                                    width: null,
                                    srcset: "",
                                    alt: "Ucla impact report animation",
                                    focalPoint: [0.5, 0.5],
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
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
})

export const ExternalContent = () => ({
    data() {
        return {
            block: mock2,
        }
    },
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
})

export const InternalContentProject = () => ({
    data() {
        return {
            block: mock3,
        }
    },
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
})

export const ImpactStory = () => ({
    data() {
        return {
            block: mock4,
        }
    },
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
})

export const InternalVideo = () => ({
    data() {
        return {
            block: internalVideo,
        }
    },
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
})
export const ExternalVideo = () => ({
    data() {
        return {
            block: externalVideo,
        }
    },
    components: { FlexibleBannerFeatured },
    template: `
        <flexible-banner-featured
            :block="block"
       />
    `,
})
