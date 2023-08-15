import DividerWayFinder from "@/components/DividerWayFinder.vue"

// Storybook default settings
export default {
    title: "DIVIDER / Way Finder",
    component: DividerWayFinder,
    tags: ["autodocs"],
    decorators: [],
    argTypes: {
        color: {
            control: { type: "select" },
            options: ["visit", "about", "help"],
        },
    },
}
export const Template = (args) => ({
    components: { DividerWayFinder },
    setup() {
        return { args }
    },
    template: `<divider-way-finder v-bind="args" />`,
})

// Variations of stories below
export const Default = Template.bind({})
Default.args = {}

export const Visit = Template.bind({})
Visit.args = {
    color: "visit",
}

export const About = Template.bind({})
About.args = {
    color: "about",
}

export const Help = Template.bind({})
Help.args = {
    color: "help",
}
/*
What we did here:

We created a Template function that is a general story structure.
We then created individual stories (Default, Visit, About, Help) that bind to this template and 
provide different initial args.
Using the Storybook UI:
After setting up args and argTypes, when you view your stories in the Storybook UI, 
you will see a control that allows you to change the color prop value in real-time. 
This means you can test the component behavior with different prop values without having to write 
new stories or manually change the code.
*/
