// Import mock api data
import * as API from "@/stories/mock-api.json"
import NavMenuItemResponsive from "@/lib-components/NavMenuItemResponsive"
import StoryRouter from "storybook-vue-router"

// Storybook default settings
export default {
    title: "NAV / NavMenuItemResponsive",
    component: NavMenuItemResponsive,
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
    computed: {
        parsedPrimaryMenuItems() {
            // Return only items that have children (assume these are dropdowns)
            return this.items.filter((obj) => {
                return obj.children && obj.children.length
            })
        },
    },
    components: { NavMenuItemResponsive },
    template: `
        <ul>
            <nav-menu-item-responsive
                v-for="(item, index) in parsedPrimaryMenuItems"
                :key="item.id"
                :item="item"
                :index="index"
            />
        </ul>
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
    components: { NavMenuItemResponsive },
    template: `
        <nav-menu-item-responsive
            v-for="(item, index) in parsedPrimaryMenuItems"
            :key="item.id"
            :item="item"
            :index="index"
            :go-back="goBack"
        />
    `,
})
