import SectionSearchFilter from "@/lib-components/SectionSearchFilter"

export default {
    title: "SECTION / Search Filter",
    component: SectionSearchFilter,
}

const mock = [
    {
        title: "Amenities",
        filterType: "location || departments || subjects ||categories",
    },
    {
        title: "Snkrs",
        filterType: "location || departments || subjects ||categories",
    },
    {
        title: "Panda",
        filterType: "location || departments || subjects ||categories",
    },
    {
        title: "Chicago",
        filterType: "location || departments || subjects ||categories",
    },
    {
        title: "Brazil 1x7 Germany",
        filterType: "location || departments || subjects ||categories",
    },
]

// Variations of stories below
export const Default = () => ({
    data() {
        return { mock }
    },
    components: { SectionSearchFilter },
    template: `
        <section-search-filter
            :filters="mock"
        />
    `,
})
