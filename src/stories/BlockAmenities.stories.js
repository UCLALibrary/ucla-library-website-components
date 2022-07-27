// Import component
import BlockAmenities from "@/lib-components/BlockAmenities"

const mock = {
    amenities: [
        "SvgIconLight",
        "SvgIconClock",
        "SvgIconAccessible",
        "SvgIconChair",
        "SvgIconVirtual",
        "SvgIconLaptop",
        "SvgIconLocker",
        "SvgIconSharePrinter",
        "SvgIconBook",
    ],
}

export default {
    title: "BLOCK / Amenities",
    component: BlockAmenities,
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { BlockAmenities },
    template: `
        <block-amenities
            :amenities="amenities"
        />
    `,
})
