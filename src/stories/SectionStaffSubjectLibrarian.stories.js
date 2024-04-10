// Import component
import SectionStaffSubjectLibrarian from '@/lib-components/SectionStaffSubjectLibrarian'

// Storybook default settings
export default {
  title: 'SECTION / Staff / SubjectLibrarian',
  component: SectionStaffSubjectLibrarian,
}

const mockDefault = [
  {
    subjectArea: 'Female Outlaw Studies',
    nameLast: 'Bullion',
    nameFirst: 'Laura',
    image: null,
    phone: null,
    jobTitle: 'Director of Outlaw Investegation',
    departments: [
      {
        id: '7272',
        title: 'Communications',
      },
    ],
    consultation: 'https://calendar.library.ucla.edu/appointments/aogarcia',
    alternativeName: [
      {
        fullName: '娘の洋子より',
        languageAltName: 'zh',
      },
    ],
    uri: 'about/staff/ariane-bicho',
    email: 'abicho@library.ucla.edu',
    academicDepartments: [
      {
        id: '11947',
        title: 'African American Studies',
      },
      {
        id: '11955',
        title: 'Cluster 60: America in Sixties: Politics, Society, and Culture, 1954 to 1974',
      },
    ],
    to: '/about/staff/ariane-bicho',
  },
  {
    subjectArea: 'Pirate Studies',
    nameLast: 'Bonny',
    image: null,
    nameFirst: 'Anne',
    phone: null,
    jobTitle: 'Director of Pirate Investegation',
    departments: [
      {
        id: '7272',
        title: 'Communications',
      },
    ],
    consultation: 'https://calendar.library.ucla.edu/appointments/aogarcia',
    alternativeName: [],
    uri: 'about/staff/ariane-bicho',
    email: 'abicho@library.ucla.edu',
    academicDepartments: [
      {
        id: '11947',
        title: 'African American Studies',
      },
      {
        id: '11955',
        title: 'Cluster 60: America in Sixties: Politics, Society, and Culture, 1954 to 1974',
      },
    ],
    to: '/about/staff/ariane-bicho',
  },
  {
    subjectArea: 'African American Studies',
    nameLast: 'Bicho',
    image: null,
    nameFirst: 'Ariane',
    phone: null,
    jobTitle: 'Director of Communications and Marketing',
    departments: [
      {
        id: '7272',
        title: 'Communications',
      },
    ],
    locations: [
      {
        title: 'cupidatat non proident',
        to: '/location/bar',
      },
      {
        title: 'tristique',
        to: '/location/baz',
      },
    ],
    consultation: 'https://calendar.library.ucla.edu/appointments/aogarcia',
    alternativeName: [
      {
        fullName: 'のより娘',
        languageAltName: 'ch',
      },
    ],
    uri: 'about/staff/ariane-bicho',
    email: 'abicho@library.ucla.edu',
    academicDepartments: [
      {
        id: '11947',
        title: 'African American Studies',
      },
      {
        id: '11955',
        title: 'Cluster 60: America in Sixties: Politics, Society, and Culture, 1954 to 1974',
      },
    ],
    to: '/about/staff/ariane-bicho',
    staffName: 'Ariane Bicho のより娘',
  },
]

const tableH = ['Academic Departments', 'Name', 'Contact Information']

// Variations of stories below
export function Default() {
  return {
    data() {
      return { items: mockDefault, tableHeaders: tableH }
    },
    components: { SectionStaffSubjectLibrarian },
    template: `
      <section-staff-subject-librarian
        :items="items"
        :tableHeaders="tableHeaders"
      />
  `,
  }
}
