// Import mock api data
import * as API from "@/stories/mock-api.json"
import NavPrimary from "@/lib-components/NavPrimary"
import StoryRouter from "storybook-vue-router"

// Storybook default settings
export default {
    title: "NAV / Primary",
    component: NavPrimary,
    decorators: [StoryRouter()],
}

const items = [
    { ...API.primaryNavlinks[0] },
    {
        ...API.primaryNavlinks[0],
        name: "Visit",
        url: "/visit/",
    },
    {
        ...API.primaryNavlinks[0],
        name: "About",
        url: "/about/",
    },
    { ...API.primaryNavlinks[3] },
]

// TODO Write seperate story for NavMenuItem

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            items,
        }
    },
    components: { NavPrimary },
    template: `
        <nav-primary
            :items="items"
            current-path="/about/foo/bar"
        />
    `,
})

export const ExtraSupportLinks = () => ({
    data() {
        const newItems = items
        newItems.push({ ...API.primaryNavlinks[3] })

        return {
            items: newItems,
        }
    },
    components: { NavPrimary },
    template: `
        <nav-primary
            :items="items"
            current-path="/about/foo/bar"
        />
    `,
})
