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
        image: API.image_people,
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
        image: API.image_people,
        to: "/staff/id/",
        staffName: "Ada Lovelace",
        alternativeFullName: "生懸命",
        language: "ja",
        jobTitle: "Library Supervisor",
        locations: [
            { title: "Powellarium", to: "/location/bar" },
            {
                title: "Research Library (Charles E. Young)",
                to: "/location/baz",
            },
        ],
        email: "ada@somewhere.com",
        phone: "555-555-5555",
        departments: ["DIIT", "Other Departments"],
    },
    {
        to: "/staff/foo",
        jobTitle: "Ullamco",
        staffName: "Fames ac turpis",
        department: "Inceptos Himenaeos",
        email: "loreum@ipsum.foo",
        alternativeFullName: "生懸命",
        language: "ja",
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
        alternativeFullName: "生懸命",
        language: "ja",
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
