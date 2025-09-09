import * as API from '../../../stories/mock-api.json'

// Sticky header
export const primaryItems = [
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
export const secondaryItems = [
  { ...API.links[0] },
  { ...API.links[1] },
  { ...API.links[2] },
]
