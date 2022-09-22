import FlexibleGridGalleryCards from "@/lib-components/Flexible/GridGalleryCards"

export default {
    title: "FLEXIBLE / Grid Gallery Cards",
    component: FlexibleGridGalleryCards,
}

const mock = {
    id: "40361",
    subtitle: "Flexible Grid Gallery Cards",
    summary: "<p>Hello everyone</p>",
    sectionTitle: "Section Title: Grid Gallery Cards",
    sectionSummary: "<p>Section Summary: Grid Gallery Cards</p>",
    gridGalleryCards: [
        {
            id: "40362",
            contentLink: [
                {
                    contentType: "article",
                    title: "La Niña",
                    snippet:
                        "<p>La Niña is an oceanic and atmospheric phenomenon that is the colder counterpart of El Niño, as part of the broader El Niño–Southern Oscillation climate pattern.</p>",
                    to: "about/news/la-niña",
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
                                },
                            ],
                        },
                    ],
                },
            ],
            featured: "false",
        },
        {
            id: "40363",
            featured: "true",
            titleGeneral: "This is a featured content",
            snippet: "<p>Virtual library demo</p>",
            image: [
                {
                    id: "40342",
                    src: "https://static.library.ucla.edu/craftassetstest/images/_fullscreen/virtual-screening-room-toll-sea_2022-09-21-214436_bnja.jpeg",
                    height: 1870,
                    width: 2560,
                    srcset: "https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/virtual-screening-room-toll-sea_2022-09-21-214436_bnja.jpeg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/virtual-screening-room-toll-sea_2022-09-21-214436_bnja.jpeg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/virtual-screening-room-toll-sea_2022-09-21-214436_bnja.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/virtual-screening-room-toll-sea_2022-09-21-214436_bnja.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/virtual-screening-room-toll-sea_2022-09-21-214436_bnja.jpeg 2560w",
                    alt: "Virtual screening room toll sea",
                    focalPoint: [0.5, 0.5],
                },
            ],
            externalLink: "http://www.google.com",
        },
    ],
    typeHandle: "gridGalleryCards",
}

export const Default = () => ({
    data() {
        return {
            block: mock,
        }
    },
    components: { FlexibleGridGalleryCards },
    template: `
        <flexible-grid-gallery-cards
            :block="block"
        />
    `,
})
