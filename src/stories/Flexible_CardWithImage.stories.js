import FlexibleCardWithImage from "@/lib-components/Flexible/CardWithImage.vue"
import StoryRouter from "storybook-vue-router"

export default {
    title: "FLEXIBLE / Card With Image",
    component: FlexibleCardWithImage,
    decorators: [StoryRouter()],
}

const mock = {
    id: "3968",
    sectionSummary: "<p>My favorite sea is Arabian Sea!</p>",
    sectionTitle: "Sea animals are cute",
    typeHandle: "cardWithImage",
    cardWithImage: [
        {
            id: "3969",
            image: [
                {
                    id: "2536",
                    src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/sea-turtle.jpg",
                    height: 1344,
                    width: 2560,
                    srcset: "https://test-craft.library.ucla.edu/assets/images/_375xAUTO_crop_center-center_none/sea-turtle.jpg 375w, https://test-craft.library.ucla.edu/assets/images/_960xAUTO_crop_center-center_none/sea-turtle.jpg 960w, https://test-craft.library.ucla.edu/assets/images/_1280xAUTO_crop_center-center_none/sea-turtle.jpg 1280w, https://test-craft.library.ucla.edu/assets/images/_1920xAUTO_crop_center-center_none/sea-turtle.jpg 1920w, https://test-craft.library.ucla.edu/assets/images/_2560xAUTO_crop_center-center_none/sea-turtle.jpg 2560w",
                    alt: "Hollywood",
                    focalPoint: [0.5, 0.5],
                },
            ],
            imageAltText: "hollywood",
            contentLink: [
                {
                    id: "1686",
                    url: "https://test-craft.library.ucla.edu/visit/events-exhibits/a-new-exhibit",
                    uri: "visit/events-exhibits/a-new-exhibit",
                    title: "a new exhibit",
                    date: [
                        {
                            startDate: "2021-09-08T07:00:00+00:00",
                            endDate: null,
                        },
                    ],
                    associatedLocations: [
                        {
                            id: "523",
                            title: "Powell Library",
                            to: "visit/locations/powell-library",
                        },
                    ],
                },
            ],
            shortDescription: null,
        },
        {
            id: "3970",
            image: [
                {
                    id: "2338",
                    src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/wedding-dress-jean-paul-gaultier_2022-05-31-170317_vyzh.jpg",
                    height: 2113,
                    width: 2560,
                    srcset: "https://test-craft.library.ucla.edu/assets/images/_375xAUTO_crop_center-center_none/wedding-dress-jean-paul-gaultier_2022-05-31-170317_vyzh.jpg 375w, https://test-craft.library.ucla.edu/assets/images/_960xAUTO_crop_center-center_none/wedding-dress-jean-paul-gaultier_2022-05-31-170317_vyzh.jpg 960w, https://test-craft.library.ucla.edu/assets/images/_1280xAUTO_crop_center-center_none/wedding-dress-jean-paul-gaultier_2022-05-31-170317_vyzh.jpg 1280w, https://test-craft.library.ucla.edu/assets/images/_1920xAUTO_crop_center-center_none/wedding-dress-jean-paul-gaultier_2022-05-31-170317_vyzh.jpg 1920w, https://test-craft.library.ucla.edu/assets/images/_2560xAUTO_crop_center-center_none/wedding-dress-jean-paul-gaultier_2022-05-31-170317_vyzh.jpg 2560w",
                    alt: "Long llama",
                    focalPoint: [0.5, 0.5],
                },
            ],
            imageAltText: "llama",
            contentLink: [
                {
                    id: "1542",
                    url: "https://test-craft.library.ucla.edu/visit/events-exhibits/exhibit-to-test-card-with-image-content-link",
                    uri: "visit/events-exhibits/exhibit-to-test-card-with-image-content-link",
                    title: "Exhibit to test card with image content link",
                    date: [
                        {
                            startDate: "2021-09-03T08:00:00+00:00",
                            endDate: null,
                        },
                    ],
                    associatedLocations: [
                        {
                            id: "523",
                            title: "Powell Library",
                            to: "visit/locations/powell-library",
                        },
                        {
                            id: "801",
                            title: "YRL",
                            to: "visit/locations/yrl",
                        },
                        {
                            id: "3062",
                            title: "Online",
                            to: "visit/locations/online",
                        },
                    ],
                },
            ],
            shortDescription: null,
        },
        {
            id: "3971",
            image: [
                {
                    id: "314",
                    src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/old-turtle.jpg",
                    height: 1768,
                    width: 2560,
                    srcset: "https://test-craft.library.ucla.edu/assets/images/_375xAUTO_crop_center-center_none/old-turtle.jpg 375w, https://test-craft.library.ucla.edu/assets/images/_960xAUTO_crop_center-center_none/old-turtle.jpg 960w, https://test-craft.library.ucla.edu/assets/images/_1280xAUTO_crop_center-center_none/old-turtle.jpg 1280w, https://test-craft.library.ucla.edu/assets/images/_1920xAUTO_crop_center-center_none/old-turtle.jpg 1920w, https://test-craft.library.ucla.edu/assets/images/_2560xAUTO_crop_center-center_none/old-turtle.jpg 2560w",
                    alt: "Galactic Core Spitzer Schmidt 960",
                    focalPoint: [0.5, 0.5],
                },
            ],
            imageAltText: "galactic",
            contentLink: [
                {
                    id: "1686",
                    url: "https://test-craft.library.ucla.edu/visit/events-exhibits/a-new-exhibit",
                    uri: "visit/events-exhibits/a-new-exhibit",
                    title: "a new exhibit",
                    date: [
                        {
                            startDate: "2021-09-08T07:00:00+00:00",
                            endDate: null,
                        },
                    ],
                    associatedLocations: [
                        {
                            id: "523",
                            title: "Powell Library",
                            to: "visit/locations/powell-library",
                        },
                    ],
                },
            ],
            shortDescription: "Here is a short description",
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
