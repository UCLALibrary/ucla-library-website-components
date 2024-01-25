import BlockRemoveSearchFilter from "@/lib-components/BlockRemoveSearchFilter"

export default {
    title: "SEARCH / Block Remove Search Filter",
    component: BlockRemoveSearchFilter,
}

const mock = {
    title: "Amenities",
    color: "default",
}

// Variations of stories below
export const Default = () => ({
    data() {
        return { ...mock }
    },
    components: { BlockRemoveSearchFilter },
    template: `
        <block-remove-search-filter
            :title="title"
            :color="color"
        />
    `,
})

export const Help = () => ({
    data() {
        return { ...mock }
    },
    components: { BlockRemoveSearchFilter },
    template: `
        <block-remove-search-filter
            title="HELP"
            color="help"
        />
    `,
})

export const Visit = () => ({
    data() {
        return { ...mock }
    },
    components: { BlockRemoveSearchFilter },
    template: `
        <block-remove-search-filter
            title="VISIT"
            color="visit"
        />
    `,
})

export const About = () => ({
    data() {
        return { ...mock }
    },
    components: { BlockRemoveSearchFilter },
    template: `
        <block-remove-search-filter
            title="ABOUT"
            color="about"
        />
    `,
})
