// Import component
import SectionStaffList from '@/lib-components/SectionStaffList'

// Import mock api data
import * as API from '@/stories/mock-api.json'

// Storybook default settings
export default {
  title: 'SECTION / Staff / List',
  component: SectionStaffList,
}

const mockDefault = [
  {
    id: '2975759',
    sectionHandle: 'staffMember',
    slug: 'test-subject-librarian',
    uri: 'about/staff/test-subject-librarian',
    title: 'TEST - Subject Librarian',
    image: [{ src: API.image_people }],
    to: 'test-subject-librarian',
    nameFirst: 'TEST - Subject',
    nameLast: 'Librarian',
    alternativeName: [],
    jobTitle: 'Head of Everything',
    departments: [
      {
        id: '7272',
        title: 'Communications'
      },
      {
        id: '7270',
        title: 'East Asian Library'
      }
    ],
    locations: [
      {
        title: 'Richard C. Rudolph East Asian Library',
        to: 'visit/locations/east-asian-library',
        id: '11497'
      },
      {
        title: 'UCLA Film & Television Archive',
        to: 'visit/locations/film-television-archive',
        id: '11612'
      }
    ],
    pronouns: 'she/his/them',
    email: 'subject.librarian@email.com',
    phone: '(555) 475-1523',
    consultation: 'http://help.com',
    topics: [
      {
        title: 'diaries',
        id: '2975760'
      },
      {
        title: 'decorative arts',
        id: '2975783'
      }
    ],
    academicDepartments: [
      {
        id: '11947',
        title: 'African American Studies'
      },
      {
        id: '11956',
        title: 'cats'
      }
    ],
    biography: '<p>li Wong is a stand-up comedian who has written and performed two specials: Baby Cobra and Hard Knock Wife. She co-wrote, produced, and starred in the romantic comedy Always Be My Maybe. She is the proud mother of two rowdy-ass girls who inspired this entire book. She aspires to lie down but somehow keeps getting pressured into doing more sh*t that gets in the way of her lying down.</p>',
    subjectLibrarian: 'yes',
    orcid: 'http://1234',
    publications: '<ul><li>Lembo, Mary Frances; Hallmark, Julie</li></ul>'
  },
  {
    id: '11910',
    sectionHandle: 'staffMember',
    slug: 'sylvia-page',
    uri: 'about/staff/sylvia-page',
    title: 'Test  NO IMAGE Penelope Pitstop',
    image: [],
    to: 'sylvia-page',
    nameFirst: 'Test  NO IMAGE Penelope',
    nameLast: 'Pitstop',
    alternativeName: [],
    jobTitle: 'Research and Instruction Librarian for Arts, Music, and Powell (AMP)',
    departments: [
      {
        id: '6339',
        title: 'User Engagement'
      }
    ],
    locations: [
      {
        title: 'Powell Library',
        to: 'visit/locations/powell-library',
        id: '523'
      }
    ],
    pronouns: 'she/her',
    email: 'thejendiamond@gmail.com',
    phone: '(323) 555-5555',
    consultation: 'https://calendar.library.ucla.edu/appointments/spage',
    topics: [
      {
        title: 'Zines',
        id: '11858'
      },
      {
        title: 'Comics/Graphic Novels',
        id: '11859'
      },
      {
        title: 'English Composition',
        id: '11860'
      },
      {
        title: 'dogs',
        id: '11959'
      },
      {
        title: 'balloons',
        id: '11952'
      }
    ],
    academicDepartments: [
      {
        id: '11947',
        title: 'African American Studies'
      },
      {
        id: '11936',
        title: 'test african american studies'
      },
      {
        id: '11954',
        title: 'African Studies'
      },
      {
        id: '11955',
        title: 'Cluster 60: America in Sixties: Politics, Society, and Culture, 1954 to 1974'
      },
      {
        id: '11956',
        title: 'cats'
      }
    ],
    biography: '<p>Sylvia Page works to support the research needs of the UCLA community through reference, instruction, outreach, and collections. Her experience prior to UCLA includes work in academic libraries, museums, and galleries.</p>',
    subjectLibrarian: 'yes',
    orcid: null,
    publications: null
  }
]

// Variations of stories below
export function Default() {
  return {
    data() {
      return { items: mockDefault }
    },
    components: { SectionStaffList },
    template: `
      <section-staff-list
        :items="items"
      />
  `,
  }
}
