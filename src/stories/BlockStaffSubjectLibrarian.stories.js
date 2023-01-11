// Import mock api data
import * as API from "@/stories/mock-api.json"
import BlockStaffSubjectLibrarian from "@/lib-components/BlockStaffSubjectLibrarian"
import StoryRouter from "storybook-vue-router"

// Storybook default settings
export default {
    title: "BLOCK / Staff / SubjectLibrarian",
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
    nameLast: "Bicho",
    image: null,
    nameFirst: "Ariane",
    phone: null,
    jobTitle: "Director of Communications and Marketing",
    departments: [
        {
            id: "7272",
            title: "Communications",
        },
    ],
    consultation: "https://calendar.library.ucla.edu/appointments/aogarcia",
    alternativeName: [
        {
            fullName: "娘の洋子より",
            languageAltName: "zh",
        },
    ],
    uri: "about/staff/ariane-bicho",
    email: "abicho@library.ucla.edu",
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
    to: "/about/staff/ariane-bicho",
    staffName: "Ariane Bicho 娘の洋子より",
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            item: {
                ...mock,
                image: API.image_people,
                locations: [
                    {
                        title: "Cupidatat non Proident",
                        to: "/location/bar",
                    },
                    {
                        title: "tristique",
                        to: "/location/baz",
                    },
                ],
            },
        }
    },
    components: { BlockStaffSubjectLibrarian },
    template: `
      <block-staff-subject-librarian
        v-bind="item"
        phone="(222) 444-5555"
      />
  `,
})
