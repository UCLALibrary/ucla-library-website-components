import BlockSearchFilter from "@/lib-components/BlockSearchFilter"
import StoryRouter from "storybook-vue-router"

export default {
    title: "BLOCK / Search Filter",
    component: BlockSearchFilter,
    decorators: [
        StoryRouter(
            {},
            {
                routes: [
                    { path: "/visit/foo/bar/", component: BlockSearchFilter },
                    { path: "/about/foo/bar/", component: BlockSearchFilter },
                ],
            }
        ),
    ],
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
