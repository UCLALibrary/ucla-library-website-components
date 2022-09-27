import FlexibleImpactNumbersCarousel from "@/lib-components/Flexible/ImpactNumbersCarousel.vue"
import * as API from "@/stories/mock-api.json"

export default {
    title: "Flexible / Impact Numbers Carousel",
    component: FlexibleImpactNumbersCarousel,
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { FlexibleImpactNumbersCarousel },
    template: `<flexible-impact-numbers-carousel v-bind="$props" />`,
})

export const Default = Template.bind({})

Default.args = {
    block: {
        sectionTitle: "Section Title: Impact Number Carousel",
        blocks: [
            {
                largeText: "10",
                mediumText: "millon",
                smallDescriptor:
                    "dollars in funding allocated for the procurement of digital and print material",
                image: [API.image],
                altImageText: "Image for slide 1",
            },
            {
                largeText: "3.5",
                mediumText: "millon",
                smallDescriptor:
                    "dollars in funding allocated for the procurement of digital and print material",
                image: [API.image],
                altImageText: "Image for slide 2",
            },
            {
                largeText: "5",
                mediumText: "bajillion",
                smallDescriptor: "SMdes 0",
                image: [API.image],
                altImageText: "Image for slide 3",
            },
            {
                largeText: "25",
                mediumText: "percent",
                smallDescriptor: "SMdes 1",
                image: [API.image],
                altImageText: "Image for slide 4",
            },
        ],
    },
}
