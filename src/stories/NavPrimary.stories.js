// Import mock api data
import * as API from '@/stories/mock-api.json'
import NavPrimary from '@/lib-components/NavPrimary'

// Storybook default settings
export default {
  title: 'NAV / Primary',
  component: NavPrimary,

}

const items = [
  { ...API.primaryNavlinks[0] },
  {
    ...API.primaryNavlinks[0],
    name: 'Visit',
    url: '/visit/',
  },
  {
    ...API.primaryNavlinks[0],
    name: 'About',
    url: '/about/',
  },
  { ...API.primaryNavlinks[3] },
]

const micrositeItems = [
  {
    id: '25356',
    name: 'Who We Are',
    to: null,
    classes: '',
    target: '',
    children: [
      {
        id: '29029',
        name: 'About the Program',
        to: '/about',
        classes: '',
        target: '',
      },
      {
        id: '29030',
        name: 'Available Funding',
        to: '/available-funding',
        classes: null,
        target: '',
      },
      {
        id: '29031',
        name: 'Takedown Notice',
        to: '/take-down-notice',
        classes: null,
        target: '',
      },
      {
        id: '29032',
        name: 'Ethical/Collections Statement',
        to: null,
        classes: null,
        target: '',
      },
      {
        id: '29033',
        name: 'News',
        to: '/about/news',
        classes: null,
        target: '',
      },
      {
        id: '29034',
        name: 'Contact Us',
        to: '/',
        classes: null,
        target: '',
      },
    ],
  },
  {
    id: '25360',
    name: 'For Applicants',
    to: null,
    classes: null,
    target: '',
    children: [
      {
        id: '29035',
        name: 'How to Apply',
        to: '/applicants/how-to-apply',
        classes: null,
        target: '',
      },
      {
        id: '29036',
        name: 'Applicant Resources',
        to: '/applicants/applicants-resources',
        classes: null,
        target: '',
      },
      {
        id: '29037',
        name: 'Grantee Resources',
        to: '/applicants/grantee-resources',
        classes: null,
        target: '',
      },
      {
        id: '29038',
        name: 'All Resources',
        to: '/applicants/resources',
        classes: null,
        target: '',
      },
    ],
  },
  {
    id: '25359',
    name: 'Projects',
    to: null,
    classes: '',
    target: '',
    children: [
      {
        id: '29460',
        name: 'All Projects',
        to: '/projects',
        classes: '',
        target: '',
      },
    ],
  },
  {
    id: '25363',
    name: 'Browse Collections',
    to: 'https://digital.library.ucla.edu/catalog/ark:/21198/z13b7wpn',
    classes: '',
    target: '1',
    children: [],
  },
]

// TODO Write seperate story for NavMenuItem

// Variations of stories below
export function Default() {
  return {
    data() {
      return {
        items,
      }
    },
    components: { NavPrimary },
    template: `
        <nav-primary
            :items="items"
            current-path="/about/foo/bar"
        />
    `,
  }
}
export function ImpactReport() {
  return {
    components: { NavPrimary },
    template: `
        <nav-primary
        />
    `,
  }
}

export function ExtraSupportLinks() {
  return {
    data() {
      const newItems = items
      newItems.push({ ...API.primaryNavlinks[3] })

      return {
        items: newItems,
      }
    },
    components: { NavPrimary },
    template: `
        <nav-primary
            :items="items"
            current-path="/about/foo/bar"
        />
    `,
  }
}

export function WithMicrositeTitle() {
  return {
    data() {
      return {
        micrositeItems,
      }
    },
    components: { NavPrimary },
    template: `
        <nav-primary
            :items="micrositeItems"
            current-path="/about/foo/bar"
            title="Modern Endangered Archives Program"
            acronym="MEAP"
        />
    `,
  }
}

/* Notes on FTVA version
NavPrimary is used in the ftva site, however it's much more dependent on headersticky for positioning and styles, especially in mobile views.
Therefore, it does not have a standalone story, but is instead used in the HeaderSticky story.

If the FTVA product ever uses NavPrimary outside of headersticky context, a story should be created for it.
*/
