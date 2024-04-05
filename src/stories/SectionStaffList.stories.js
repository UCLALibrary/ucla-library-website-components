// Import component
import SectionStaffList from '@/lib-components/SectionStaffList'

// Import mock api data
import * as API from '@/stories/mock-api.json'

// Storybook default settings
export default {
  title: 'SECTION / Staff / List',
  component: SectionStaffList,
}

const mock = [
  {
    id: '2975759',
    sectionHandle: 'staffMember',
    slug: 'test-subject-librarian',
    uri: 'about/staff/test-subject-librarian',
    title: 'TEST - Subject Librarian',
    image: [{src: API.image_people}],
    to: 'test-subject-librarian',
    nameFirst: 'TEST - Subject',
    nameLast: 'Librarian',
    alternativeName: [
      {
        fullName: '司書',
        languageAltName: 'ja'
      }
    ],
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
    to: '/staff/foo',
    jobTitle: 'Ullamco',
    staffName: 'Fames ac turpis',
    department: 'Inceptos Himenaeos',
    email: 'loreum@ipsum.foo',
    alternativeFullName: '生懸命',
    language: 'ja',
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
    phone: '(222) 444-5555',
  },
  {
    to: '/staff/foo',
    image: API.image,
    jobTitle: 'Ullamco',
    staffName: 'Fames ac turpis',
    alternativeFullName: '生懸命',
    language: 'ja',
    department: 'Inceptos Himenaeos',
    email: 'loreum@ipsum.foo',
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
    phone: '(222) 444-5555',
  },
]

// Variations of stories below
export function Default() {
  return {
    data() {
      return { items: mock }
    },
    components: { SectionStaffList },
    template: `
      <section-staff-list
        :items="items"
      />
  `,
  }
}
