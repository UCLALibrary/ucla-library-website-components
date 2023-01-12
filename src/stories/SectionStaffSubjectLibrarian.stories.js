// Import component
import SectionStaffSubjectLibrarian from "@/lib-components/SectionStaffSubjectLibrarian"

// A storybook decorator that allows you to use routing-aware components in your stories
import StoryRouter from "storybook-vue-router"

// Storybook default settings
export default {
    title: "SECTION / Staff / SubjectLibrarian",
    component: SectionStaffSubjectLibrarian,
    decorators: [StoryRouter()],
}

const mock = [
    {
        subjectArea: "Female Outlaw Studies",
        nameLast: "Bullion",
        nameFirst: "Laura",
        image: null,
        phone: null,
        jobTitle: "Director of Outlaw Investegation",
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
        staffName: "Laura Bullion 娘の洋子より",
    },
    {
        subjectArea: "Pirate Studies",
        nameLast: "Bonny",
        image: null,
        nameFirst: "Anne",
        phone: null,
        jobTitle: "Director of Pirate Investegation",
        departments: [
            {
                id: "7272",
                title: "Communications",
            },
        ],
        consultation: "https://calendar.library.ucla.edu/appointments/aogarcia",
        alternativeName: null,
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
        staffName: "Anne Bonny",
    },
    {
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
                fullName: "のより娘",
                languageAltName: "ch",
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
        staffName: "Ariane Bicho のより娘",
    },
]

const tableH = ["Academic Departments", "Name", "Contact Information"]

// Variations of stories below
export const Default = () => ({
    data() {
        return { items: mock, tableHeaders: tableH }
    },
    components: { SectionStaffSubjectLibrarian },
    template: `
      <section-staff-subject-librarian
        :items="items"
        :tableHeaders="tableHeaders"
      />
  `,
})

// tableHeaders= ["Academic Departments", "Name", "Contact Information"]
