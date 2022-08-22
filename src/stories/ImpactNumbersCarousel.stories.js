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
            image: API.image,
            altImageText: "Image for slide 1",
        },
        {
            largeText: "3.5",
            mediumText: "million",
            smallDescriptor:
                "dollars in funding allocated for the procurement of digital and print material",
            image: API.image,
            altImageText: "Image for slide 2",
        },
        {
            largeText: "5",
            mediumText: "bajillion",
            smallDescriptor: "SMdes 0",
            image: API.image,
            altImageText: "Image for slide 3",
        },
        {
            largeText: "25",
            mediumText: "percent",
            smallDescriptor: "SMdes 1",
            image: API.image,
            altImageText: "Image for slide 4",
        },
    ],
}
