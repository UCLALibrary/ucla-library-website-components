// Import mock api data
import * as API from '@/stories/mock-api.json'

// Import component
import SectionStaffList from '@/lib-components/SectionStaffList'

// Import mock api data

// Storybook default settings
export default {
  title: 'SECTION / Staff / List',
  component: SectionStaffList,
}

const mockDefault = [
  {
    to: '/staff/foo',
    image: API.image_people,
    jobTitle: 'Ullamco',
    staffName: 'Fames ac turpis',
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
  {
    image: API.image_people,
    to: '/staff/id/',
    staffName: 'Ada Lovelace',
    alternativeFullName: '生懸命',
    language: 'ja',
    jobTitle: 'Library Supervisor',
    locations: [
      { title: 'Powellarium', to: '/location/bar' },
      {
        title: 'Research Library (Charles E. Young)',
        to: '/location/baz',
      },
    ],
    email: 'ada@somewhere.com',
    phone: '555-555-5555',
    departments: ['DIIT', 'Other Departments'],
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

const mockImageNull = [
  {
    id: '4273',
    email: 'szlee@library.ucla.edu',
    phone: null,
    jobTitle: 'Public Programs and Communications Manager',
    nameFirst: 'Suzy',
    nameLast: 'Lee',
    to: '/about/staff/suzy-lee',
    consultation: null,
    departments: [{ id: '7272', title: 'Communications' }],
    locations: [],
    image: null,
    staffName: 'Suzy Lee'
  },
  {
    id: '3522',
    email: 'dianneweinthal@library.ucla.edu',
    phone: '',
    jobTitle: 'Visual Designer',
    nameFirst: 'Dianne',
    nameLast: 'Weinthal',
    to: '/about/staff/dianne',
    consultation: 'https://calendar.library.ucla.edu/appointments/dweinthal',
    departments: [{ id: '6357', title: 'Digital Initiatives and Information Technology' }, { id: '7250', title: 'Software Development and Library Systems' }],
    locations: [],
    image: {
      id: '60352',
      src: 'https://static.library.ucla.edu/craftassetstest/Portraits/_fullscreen/Dianne-Weinthal-1780a.jpeg',
      height: 3840,
      width: 2560,
      srcset: 'https://static.library.ucla.edu/craftassetstest/Portraits/_375xAUTO_crop_center-center_none/Dianne-Weinthal-1780a.jpeg 375w, https://static.library.ucla.edu/craftassetstest/Portraits/_960xAUTO_crop_center-center_none/Dianne-Weinthal-1780a.jpeg 960w, https://static.library.ucla.edu/craftassetstest/Portraits/_1280xAUTO_crop_center-center_none/Dianne-Weinthal-1780a.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/Portraits/_1920xAUTO_crop_center-center_none/Dianne-Weinthal-1780a.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/Portraits/_2560xAUTO_crop_center-center_none/Dianne-Weinthal-1780a.jpeg 2560w',
      alt: 'color photograph of woman with long hair and hoop earrings wearing a black sweater against a blue background',
      focalPoint: [0.5, 0.5]
    },
    staffName: 'Dianne Weinthal'
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

export function ImageNull() {
  return {
    data() {
      return { items: mockImageNull }
    },
    components: { SectionStaffList },
    template: `
      <section-staff-list
        :items="items"
      />
  `,
  }
}
