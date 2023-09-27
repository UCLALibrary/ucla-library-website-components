import HeadingArrow from "../lib-components/HeadingArrow"

export default {
    title: "Heading / Arrow",
    component: HeadingArrow,
}

export const Default = () => ({
    components: { HeadingArrow },
    template: `<heading-arrow />`,
})

export const About = () => ({
    components: { HeadingArrow },
    template: `<heading-arrow text="Staff Directory" to="/about/foo/bar/"/>`,
})

export const Visit = () => ({
    components: { HeadingArrow },
    template: `<heading-arrow text="Visit the Library" to="/visit/foo/bar/" section="visit"/>`,
})

export const Help = () => ({
    components: { HeadingArrow },
    template: `<heading-arrow text="Get Help With" to="/help/foo/bar/"/>`,
})

export const Section = () => ({
    components: { HeadingArrow },
    template: `<heading-arrow text="Visit the Library" to="/visit/" section="visit"/>`,
})
