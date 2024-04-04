// A sticky list/menu on the right side of the page. It displays section-titles from the current page that create anchor links to those section-titles. It also always has a Back to Top link as the final element.
import PageAnchor from "../lib-components/PageAnchor.vue"

export default {
    title: "PageAnchor",
    component: PageAnchor,
    argTypes: {
        sectionTitles: {
            control: {
                type: "array",
                separator: ", ",
            },
            description:
                "h2 section-titles create page anchor links to respective sections",
            table: {
                type: {
                    summary: "Array<string>",
                },
            },
        },
        color: {
            control: {
                type: "string",
            },
        },
    },
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { PageAnchor },
    template: '<page-anchor v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {
    sectionTitles: [
        "Using the Library",
        "Services & Resources",
        "Events & Exhibitions",
        "About",
        "News",
        "Using the Library",
        "Services & Resources",
        "Events & Exhibitions",
        "Contact a Subject Specialist",
        "News",
        "Featured Collection Items",
        "Related News",
        "More About Anything",
    ],
    color: "default",
}

export const Visit = Template.bind({})
Visit.args = {
    sectionTitles: [
        "Using the Library",
        "Services & Resources",
        "Events & Exhibitions",
        "About",
        "News",
    ],
    color: "visit",
}

export const Help = Template.bind({})
Help.args = {
    sectionTitles: [
        "Using the Library",
        "Services & Resources",
        "Events & Exhibitions",
        "About",
        "News",
    ],
    color: "help",
}

export const About = Template.bind({})
About.args = {
    sectionTitles: [
        "Using the Library",
        "Services & Resources",
        "Events & Exhibitions",
        "About",
        "News",
        "Using the Library",
        "Services & Resources",
        "Events & Exhibitions",
        "Contact a Subject Specialist",
        "News",
        "Featured Collection Items",
        "Related News",
        "More About Anything",
    ],
    color: "about",
}