import { computed } from 'vue'

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

const mockFTVAtableHeaders = ['Image', 'Film', 'Role', 'Year']
// TODO type for this data structure, remove qutoes or paste from BlockStaffSubjectLibrarian
const mockFTVAfilmdata = [
  {
    image: [
      {
        id: '3593326',
        src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/gay-abel-bey.jpeg',
        height: 1434,
        width: 2560,
        srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/gay-abel-bey.jpeg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/gay-abel-bey.jpeg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/gay-abel-bey.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/gay-abel-bey.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/gay-abel-bey.jpeg 2560w',
        alt: null,
        focalPoint: [
          0.5,
          0.5
        ]
      }
    ],
    titleGeneral: 'Associated Film #1 Title',
    description: 'Associated Film #1 Description',
    roles: 'Associated Film #1 Role(s)',
    year: '1990',
    filmLink: [
      {
        uri: 'collections/l-a-rebellion/as-above-so-below',
        slug: 'as-above-so-below'
      }
    ]
  },
  {
    image: [
      {
        id: '3593326',
        src: 'https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/gay-abel-bey.jpeg',
        height: 1434,
        width: 2560,
        srcset: 'https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/gay-abel-bey.jpeg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/gay-abel-bey.jpeg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/gay-abel-bey.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/gay-abel-bey.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/gay-abel-bey.jpeg 2560w',
        alt: null,
        focalPoint: [
          0.5,
          0.5
        ]
      }
    ],
    titleGeneral: 'Associated Film #2 Title',
    description: 'Associated Film #2 Description',
    roles: 'Associated Film #2 Role(s)',
    year: '1996',
    filmLink: [
      {
        uri: 'collections/l-a-rebellion/as-above-so-below',
        slug: 'as-above-so-below'
      }
    ]
  }]
// This component is used to display Filmography data in the FTVA site
export function FTVAFilmography() {
  return {
    data() {
      return { items: mockFTVAfilmdata, tableHeaders: mockFTVAtableHeaders }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
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
