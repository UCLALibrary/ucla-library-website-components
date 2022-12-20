import BlockRemoveSearchFilter from "@/lib-components/BlockRemoveSearchFilter"
import StoryRouter from "storybook-vue-router"

export default {
    title: "SEARCH / Block Remove Search Filter",
    component: BlockRemoveSearchFilter,
    decorators: [
        StoryRouter(
            {},
            {
                routes: [
                    {
                        path: "/visit/foo/bar/",
                        component: BlockRemoveSearchFilter,
                    },
                    {
                        path: "/about/foo/bar/",
                        component: BlockRemoveSearchFilter,
                    },
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
    components: { BlockRemoveSearchFilter },
    template: `
        <block-remove-search-filter
            :title="title"
            :filterType="filterType"
        />
    `,
})
