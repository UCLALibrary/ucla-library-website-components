// Import component
import SectionStaffList from "@/lib-components/SectionStaffList"

// Import mock api data
import * as API from "@/stories/mock-api.json"

// A storybook decorator that allows you to use routing-aware components in your stories
import StoryRouter from "storybook-vue-router"

// Storybook default settings
export default {
    title: "SECTION / Staff / List",
    component: SectionStaffList,
    decorators: [StoryRouter()],
}

const mock = [
    {
        to: "/staff/foo",
        jobTitle: "Ullamco",
        staffName: "Fames ac turpis",
        department: "Inceptos Himenaeos",
        email: "loreum@ipsum.foo",
        locations: [
            {
                title: "cupidatat non proident",
                to: "/location/bar",
            },
            {
                title: "tristique",
                to: "/location/baz",
            },
        ],
        phone: "(222) 444-5555",
    },
    {
        to: "/staff/foo",
        jobTitle: "Ullamco",
        staffName: "Fames ac turpis",
        department: "Inceptos Himenaeos",
        email: "loreum@ipsum.foo",
        locations: [
            {
                title: "cupidatat non proident",
                to: "/location/bar",
            },
            {
                title: "tristique",
                to: "/location/baz",
            },
        ],
        phone: "(222) 444-5555",
    },
    {
        to: "/staff/foo",
        jobTitle: "Ullamco",
        staffName: "Fames ac turpis",
        department: "Inceptos Himenaeos",
        email: "loreum@ipsum.foo",
        locations: [
            {
                title: "cupidatat non proident",
                to: "/location/bar",
            },
            {
                title: "tristique",
                to: "/location/baz",
            },
        ],
        phone: "(222) 444-5555",
    },
    {
        to: "/staff/foo",
        image: API.image,
        jobTitle: "Ullamco",
        staffName: "Fames ac turpis",
        department: "Inceptos Himenaeos",
        email: "loreum@ipsum.foo",
        locations: [
            {
                title: "cupidatat non proident",
                to: "/location/bar",
            },
            {
                title: "tristique",
                to: "/location/baz",
            },
        ],
        phone: "(222) 444-5555",
    },
]

// Variations of stories below
export const Default = () => ({
    data() {
        return { items: mock }
    },
    components: { SectionStaffList },
    template: `
      <section-staff-list
        :items="items"
      />
  `,
})
