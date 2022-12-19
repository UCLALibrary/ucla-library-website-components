import SectionRemoveSearchFilter from "@/lib-components/SectionRemoveSearchFilter"
import StoryRouter from "storybook-vue-router"

export default {
    title: "SEARCH / Section Remove Search Filter",
    component: SectionRemoveSearchFilter,
    decorators: [StoryRouter()],
}
const mock = {
    location: "Neque porro quisquam",
    departments: [
        "DIIT",
        "Digital Library Program",
        "Arts Library",
        "Special Collections",
        "CLICC",
    ],
}
const mockBigger = {
    location: "Neque porro quisquam",
    departments: [
        "DIIT",
        "Digital Library Program",
        "Arts Library",
        "Special Collections",
        "CLICC",
    ],
    "subjectLibrarian.keyword": "yes",
    areas: ["English", "History", "Geography", "Science", "Math"],
}

// Variations of stories below
export const Default = () => ({
    data() {
        return { mock }
    },
    components: { SectionRemoveSearchFilter },
    template: `
        <section-remove-search-filter
            :filters="mock"
        />
    `,
})
export const WithMoreFilters = () => ({
    data() {
        return { mockBigger }
    },
    components: { SectionRemoveSearchFilter },
    template: `
        <section-remove-search-filter
            :filters="mockBigger"
        />
    `,
})
