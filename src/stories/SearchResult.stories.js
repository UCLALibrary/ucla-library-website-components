// Storybook default settings
import SearchResult from "@/lib-components/SearchResult"
import StoryRouter from "storybook-vue-router"

export default {
    title: "SEARCH / Search Result",
    component: SearchResult,
    decorators: [StoryRouter()],
}

const mock = {
    category: "Article",
    to: "/about/news/article",
    title: "Lacus Luctus",
    summary:
        "Litora torquent per conubia nostra, per inceptos himenaeos.Litora torquent per conubia nostra, per inceptos himenaeos.Litora torquent per conubia nostra, per inceptos himenaeos.Litora torquent per conubia nostra, per inceptos himenaeos.",
}

export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    components: { SearchResult },
    template: `
        <search-result
            :category="category"
            :title="title"
            :summary="summary"
            :to="to"
        />
    `,
})
