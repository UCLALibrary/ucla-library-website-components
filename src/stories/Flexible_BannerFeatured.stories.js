import FlexibleBannerFeatured from "@/lib-components/Flexible/BannerFeatured.vue"
import StoryRouter from "storybook-vue-router"

export default {
    title: "FLEXIBLE / Banner Featured",
    component: FlexibleBannerFeatured,
    decorators: [StoryRouter()],
}

const mock = {
    id: "26943",
    titleGeneral: "Internal link",
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
                            title: "Featured",
                        },
                    ],
                    articleByline1: [
                        {
                            id: "11827",
                            slug: "brigid-abreu",
                            title: "Brigid Abreu",
                        },
                        {
                            id: "11910",
                            slug: "sylvia-page",
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
    ],
    typeHandle: "bannerFeatured",
}

const mock2 = {
    id: "27050",
    titleGeneral: "External Link",
    content: [
        {
            id: "27051",
            image: [
                {
                    id: "26089",
                    src: "https://static.library.ucla.edu/craftassetstest/_fullscreen/AlbinoFox.jpg",
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
