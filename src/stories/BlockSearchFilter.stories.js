import BlockSearchFilter from "@/lib-components/BlockSearchFilter"

export default {
    title: "BLOCK / Search Filter",
    component: BlockSearchFilter,
}

const mock = {
    title: "Amenities",
    filterType: "location || departments || subjects ||categories",
}

// Variations of stories below
export const Default = () => ({
    data() {
        return { ...mock }
    },
    components: { BlockSearchFilter },
    template: `
        <block-search-filter
            :title="title"
            :filterType="filterType"
        />
    `,
})
