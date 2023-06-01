import { action } from "@storybook/addon-actions"
import SearchHome from "@/lib-components/SearchHome"
import StoryRouter from "storybook-vue-router"

export default {
    title: "Search / Search Home",
    component: SearchHome,
    decorators: [StoryRouter()],
}

const Template = (args, { argTypes }) => ({
    components: { SearchHome },
    props: Object.keys(argTypes),
    template: '<search-home \
        v-bind="$props" \
        />',
})

export const Default = Template.bind({})

Default.args = {
    linkItems: [
        {
            text: "Course Reserves",
            url: "https://catalog.library.ucla.edu/vwebv/enterCourseReserve.do",
            target: "_blank",
        },
        {
            text: "UCLA Research Guides",
            url: "https://guides.library.ucla.edu/",
            target: "",
        },
        {
            text: "Databases A-Z",
            url: "https://guides.library.ucla.edu/az.php",
            target: "_blank",
        },
    ],
    advancedSearchLink: {
        text: "Advanced Search",
        url: "https://www.library.ucla.edu/search",
        target: "_blank",
    },
}
