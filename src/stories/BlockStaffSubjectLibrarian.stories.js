// Import mock api data
import BlockStaffSubjectLibrarian from "@/lib-components/BlockStaffSubjectLibrarian"

// A storybook decorator that allows you to use routing-aware components in your stories
import StoryRouter from "storybook-vue-router"

// Storybook default settings
export default {
    title: "BLOCK / Staff / SubjectLibrarian",
    component: BlockStaffSubjectLibrarian,
    decorators: [
        StoryRouter(
            {},
            {
                routes: [
                    {
                        path: "/staff/foo",
                        component: BlockStaffSubjectLibrarian,
                    },
                    {
                        path: "/location/bar",
                        component: BlockStaffSubjectLibrarian,
                    },
                    {
                        path: "/location/baz",
                        component: BlockStaffSubjectLibrarian,
                    },
                ],
            }
        ),
    ],
}

const mock = {
    subjectArea: "African American Studies",
    nameFirst: "Ariane",
    nameLast: "Bicho",
    to: "/about/staff/ariane-bicho",
    staffName: "Ariane Bicho 娘の洋子より",
    image: null,

    jobTitle: "Director of Communications and Marketing",
    departments: [
        {
            id: "7272",
            title: "Communications",
        },
    ],
    alternativeName: [
        {
            fullName: "娘の洋子より",
            languageAltName: "zh",
        },
    ],
    uri: "about/staff/ariane-bicho",
    phone: "(222) 444-5555",
    email: "abicho@library.ucla.edu",
    consultation: "https://calendar.library.ucla.edu/appointments/aogarcia",
    academicDepartments: [
        {
            id: "11947",
            title: "African American Studies",
        },
        {
            id: "11955",
            title: "Cluster 60: America in Sixties: Politics, Society, and Culture, 1954 to 1974",
        },
    ],
    locations: [
        {
            title: "DIIT",
            to: "/location/bar",
        },
    ],
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            item: {
                ...mock,
            },
        }
    },
    components: { BlockStaffSubjectLibrarian },
    template: `
      <block-staff-subject-librarian
        v-bind="item"
      />
  `,
})
