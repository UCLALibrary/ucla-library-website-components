import ImpactNumbersCarousel from "@/lib-components/ImpactNumbersCarousel.vue"
import * as API from "@/stories/mock-api.json"

export default {
    title: "Impact Numbers Carousel",
    component: ImpactNumbersCarousel,
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { ImpactNumbersCarousel },
    template: `<impact-numbers-carousel v-bind="$props" />`,
})

export const Default = Template.bind({})

Default.args = {
    blocks: [
        {
            largeText: "10",
            mediumText: "million",
            smallDescriptor:
                "dollars in funding allocated for the procurement of digital and print material",
            image: [
                {
                    src: "https://via.placeholder.com/1920x1080",
                    srcset: "https://via.placeholder.com/960x540 960w, https://via.placeholder.com/1280x720 1280w, https://via.placeholder.com/1920x1080 1920w",
                    sizes: "100vw",
                    alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    title: "Lorem ipsum",
                    caption: "Lorem ipsum",
                    height: 1080,
                    width: 1920,
                    focalPoint: [0.5, 0.5],
                },
            ],
            altImageText: "Image for slide 1",
        },
        {
            largeText: "3.5",
            mediumText: "million",
            smallDescriptor:
                "dollars in funding allocated for the procurement of digital and print material",
            image: [
                {
                    src: "https://via.placeholder.com/1920x1080",
                    srcset: "https://via.placeholder.com/960x540 960w, https://via.placeholder.com/1280x720 1280w, https://via.placeholder.com/1920x1080 1920w",
                    sizes: "100vw",
                    alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    title: "Lorem ipsum",
                    caption: "Lorem ipsum",
                    height: 1080,
                    width: 1920,
                    focalPoint: [0.5, 0.5],
                },
            ],
            altImageText: "Image for slide 2",
        },
        {
            largeText: "5",
            mediumText: "bajillion",
            smallDescriptor: "SMdes 0",
            image: [
                {
                    src: "https://via.placeholder.com/1920x1080",
                    srcset: "https://via.placeholder.com/960x540 960w, https://via.placeholder.com/1280x720 1280w, https://via.placeholder.com/1920x1080 1920w",
                    sizes: "100vw",
                    alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    title: "Lorem ipsum",
                    caption: "Lorem ipsum",
                    height: 1080,
                    width: 1920,
                    focalPoint: [0.5, 0.5],
                },
            ],
            altImageText: "Image for slide 3",
        },
        {
            largeText: "25",
            mediumText: "percent",
            smallDescriptor: "SMdes 1",
            image: [
                {
                    src: "https://via.placeholder.com/1920x1080",
                    srcset: "https://via.placeholder.com/960x540 960w, https://via.placeholder.com/1280x720 1280w, https://via.placeholder.com/1920x1080 1920w",
                    sizes: "100vw",
                    alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    title: "Lorem ipsum",
                    caption: "Lorem ipsum",
                    height: 1080,
                    width: 1920,
                    focalPoint: [0.5, 0.5],
                },
            ],
            altImageText: "Image for slide 4",
        },
    ],
}
