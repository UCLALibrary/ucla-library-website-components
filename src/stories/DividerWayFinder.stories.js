import DividerWayFinder from "@/lib-components/DividerWayFinder"
import StoryRouter from "storybook-vue-router"

// Storybook default settings
export default {
    title: "DIVIDER / Way Finder",
    component: DividerWayFinder,
    decorators: [
        StoryRouter(
            {},
            {
                routes: [
                    {
                        path: "/",
                        component: DividerWayFinder,
                    },
                ],
            }
        ),
    ],
}

// Variations of stories below
export const Default = () => ({
    components: { DividerWayFinder },
    template: `<divider-way-finder />`,
})

export const Visit = () => ({
    components: { DividerWayFinder },
    template: `<divider-way-finder color="visit"/>`,
})

export const About = () => ({
    components: { DividerWayFinder },
    template: `<divider-way-finder color="about" />`,
})

export const Help = () => ({
    components: { DividerWayFinder },
    template: `<divider-way-finder color="help"/>`,
})
