// Import mock api data
import * as API from '@/stories/mock-api.json'

// Import component
import SectionLocationList from '@/lib-components/SectionLocationList'

// Storybook default settings
export default {
  title: 'SECTION / Location / List',
  component: SectionLocationList,
}

const mock = [
  {
    isUclaLibrary: true,
    locationType: 'uclaLibrary',
    campusMapId: '81513',
    libcalLocationIdForHours: '2081',
    libcalSpacesUrl: 'https://calendar.library.ucla.edu/spaces?lid=6578',
    reserveSeat: 'http://google.com/reserveSeat',
    title: 'Louise M. Darling Biomedical Library',
    image: API.image,
    address:
            '12-077 Center for the Health Sciences Los Angeles, CA 9009-1798',
    addressLink: 'http://google.com/address',
    amenities: [
      { title: '24 Hour Study Space', icon: 'IconClock' },
      { title: 'ADA Stations', icon: 'IconAccessible' },
      { title: 'Cafe', icon: 'IconChair' },
      { title: 'Computer/Laptop Access', icon: 'IconVirtual' },
      { title: 'Laptop Lending', icon: 'IconLaptop' },
      { title: 'Lockers', icon: 'IconLocker' },
      { title: 'Makerspace', icon: 'IconLight' },
      {
        title: 'Printing, Scanning, and Copying',
        icon: 'IconShare',
      },
      { title: 'Research Help', icon: 'IconBook' },
    ],
    uri: 'visit/locations/biomed',
    affiliateLibraryUrl: null,
    to: 'http://google.com/title',
  },
  {
    locationType: 'uclaLibrary',
    isUclaLibrary: true,
    title: 'Arts Library',
    libcalLocationIdForHours: '4690',
    image: API.image,
    reserveSeat: 'http://google.com/reserveSeat',
    address: '1400 Public Affairs Building Los Angeles, CA 90095-1392',
    addressLink: 'http://google.com/address',
    amenities: [
      { title: 'Cafe', icon: 'IconChair' },
      { title: 'Computer/Laptop Access', icon: 'IconVirtual' },
      { title: 'Laptop Lending', icon: 'IconLaptop' },
      { title: 'Lockers', icon: 'IconLocker' },
      { title: 'Makerspace', icon: 'IconLight' },
    ],
    to: 'http://google.com/title',
  },
  {
    locationType: 'affiliateLibrary',
    affiliateLibraryUrl: 'https://pubmed.ncbi.nlm.nih.gov/?otool=uclalib',
    campusMapId: '324',
    isUclaLibrary: false,
    libcalLocationIdForHours: '2082',
    libcalSpacesUrl: 'https://calendar.library.ucla.edu/spaces?lid=657',
    title: 'William Andrews Clark Memorial Library',
    image: null,
    address: '2520 Cimarron St. BOX 951575 Los Angeles, CA 90018',
    addressLink: 'http://google.com/address',
    amenities: [
      { title: 'ADA Stations', icon: 'IconAccessible' },
      { title: 'Computer/Laptop Access', icon: 'IconVirtual' },
      { title: 'Laptop Lending', icon: 'IconLaptop' },
      { title: 'Makerspace', icon: 'IconLight' },
      { title: 'Printing, Scanning, and Copying', icon: 'IconShare' },
    ],
    uri: 'visit/locations/william-andrews-clark-memorial-library',
  },
]

const mockHoursResponse = {
  locations: [
    {
      status: 'open',
      day: 'Monday',
      times: {
        hours: [{ from: '3am', to: '3pm' }],
        status: 'open',
        text: '',
      },
    },
  ],
}

// Variations of stories below
export function Default() {
  return {
    setup() {
      /*
      Prevent a fetch call from being made to the actual API
      during visual regression testing, because Chromatic creates
      differences each time data changes. Instead mock a fetch
      call to return static [location hours] data.
      */

      const originalFetch = globalThis.fetch

      // Use mock/fixed hours for UCLA Library locations only
      if (mock.some(({ isUclaLibrary }) => isUclaLibrary)) {
        globalThis.fetch = async () => {
          globalThis.fetch = originalFetch // Restore original fetch

          return {
            ok: true,
            json: async () => mockHoursResponse,
          }
        }
      }
    },
    data() {
      return { items: mock }
    },
    components: { SectionLocationList },
    template: `
      <section-location-list
        :items="items"
      />
  `,
  }
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
}
