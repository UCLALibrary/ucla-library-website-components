import HeadingArrow from "../lib-components/HeadingArrow"
import StoryRouter from "storybook-vue-router"

export default {
    title: "Heading / Arrow",
    component: HeadingArrow,
    decorators: [StoryRouter()],
}

export const Default = () => ({
    components: { HeadingArrow },
    template: `<heading-arrow />`,
})

export const Visit = () => ({
    components: { HeadingArrow },
    template: `<heading-arrow text="Visit the Library" to="/visit/foo/bar/" section="visit"/>`,
})

export const About = () => ({
    components: { HeadingArrow },
    template: `<heading-arrow text="Staff Directory" to="/about/foo/bar/"/>`,
})

export const Help = () => ({
    components: { HeadingArrow },
    template: `<heading-arrow text="Get Help With" to="/help/foo/bar/"/>`,
})

export const Section = () => ({
    components: { HeadingArrow },
    template: `<heading-arrow text="Visit the Library" to="/visit/" section="visit"/>`,
})
