import BannerFeatured from '@/lib-components/BannerFeatured'
import HeadingArrow from '@/lib-components/HeadingArrow'

// import BlockFormData from '@/stories/mock/BlockFormData.json'

// Import mock api data
import * as API from '@/stories/mock-api.json'

export default {
  title: 'Banner Featured',
  component: BannerFeatured,
}

const mock = {
  image: API.image,
  to: '/help/foo/bar/',
  title: 'Curabitur Tortor Pellentesque Nibh Aenean',
  category: 'Ullamcorper',
  description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  breadcrumb: 'Lectus',
  startDate: '1995-12-17T03:24:00',
  endDate: '1995-12-17T03:24:00',
  byline: ['Excepteur sint occaecat', 'non proident, sunt in culpa qui'],
  locations: [
    {
      id: '523',
      title: 'Powell Library',
      to: 'visit/locations/powell-library',
    },
    {
      id: '801',
      title: 'YRL',
      to: 'visit/locations/yrl',
    },
    {
      id: '3062',
      title: 'Online',
      to: 'visit/locations/online',
    },
  ],
  prompt: 'Cursus Quis',
  alignRight: true,
  sectionHandle: 'event',
}

export function Default() {
  return {
    data() {
      return {
        ...mock,
      }
    },
    components: { BannerFeatured },
    template: `
        <banner-featured
            :image="image"
            :to="to"
            :title="title"
            :category="category"
            :breadcrumb="breadcrumb"
            :byline="byline"
            :prompt="prompt"
            :locations="locations"
            :section-handle="sectionHandle"
        />
    `,
  }
}

// export function LeftAligned() {
//   return {
//     data() {
//       return {
//         ...mock,
//       }
//     },
//     components: { BannerFeatured },
//     template: `
//         <banner-featured
//             :image="image"
//             :to="to"
//             :title="title"
//             :category="category"
//             :breadcrumb="breadcrumb"
//             :start-date="startDate"
//             :end-date="endDate"
//             :prompt="prompt"
//             :align-right="false"
//             :locations="locations"
//             :section-handle="sectionHandle"
//         />
//     `,
//   }
// }

// export function NotOnline() {
//   return {
//     data() {
//       return {
//         ...mock,
//       }
//     },
//     components: { BannerFeatured },
//     template: `
//         <banner-featured
//             :image="image"
//             :to="to"
//             :title="title"
//             :category="category"
//             :breadcrumb="breadcrumb"
//             :start-date="startDate"
//             :end-date="endDate"
//             :prompt="prompt"
//             :align-right="alignRight"
//             :section-handle="sectionHandle"
//         />
//     `,
//   }
// }

// export function Slot() {
//   return {
//     data() {
//       return {
//         image: API.image,
//         to: '/visit/foo/bar/',
//         title: 'Sed Lectus Inceptos: Suspendisse in Justo eu Magna Luctus Suscipit',
//         category: 'Torquent',
//         breadcrumb: 'Torquent',
//         startDate: '1995-12-17T03:24:00',
//         endDate: '1995-12-17T03:24:00',
//         prompt: 'Cursus Quis',
//         alignRight: false,
//         sectionHandle: 'workshopOrEventSeries',
//       }
//     },
//     components: { BannerFeatured, HeadingArrow },
//     template: `
//         <banner-featured
//             :image="image"
//             to="/about/foo/bar/"
//             :title="title"
//             :category="category"
//             :breadcrumb="breadcrumb"
//             :start-date="startDate"
//             :end-date="endDate"
//             :prompt="prompt"
//             :align-right="alignRight"
//             :section-handle="sectionHandle"
//         >
//             <heading-arrow
//                 v-if="breadcrumb"
//                 :text="breadcrumb"
//             />
//         </banner-featured>
//     `,
//   }
// }

// export function LongHeading() {
//   return {
//     data() {
//       return {
//         image: API.image,
//         to: '/visit/foo/bar/',
//         title: 'Sit Amet Augue Congue Elementum Aliquet Risus Ultricies',
//         category: 'Curabitur',
//         breadcrumb: 'Curabitur Sollicitudin',
//         startDate: '1995-12-17T03:24:00',
//         endDate: '1997-12-17T03:24:00',
//         prompt: 'Amet Mauris',
//         alignRight: false,
//         sectionHandle: 'workshopOrEventSeries',
//       }
//     },
//     components: { BannerFeatured, HeadingArrow },
//     template: `
//         <banner-featured
//             :image="image"
//             :to="to"
//             :title="title"
//             :category="category"
//             :breadcrumb="breadcrumb"
//             :start-date="startDate"
//             :end-date="endDate"
//             :prompt="prompt"
//             :align-right="alignRight"
//             :section-handle="sectionHandle"
//         >
//             <heading-arrow
//                 v-if="breadcrumb"
//                 :text="breadcrumb"
//             />
//         </banner-featured>
//     `,
//   }
// }

// export function WideImage() {
//   return {
//     data() {
//       return {
//         ...mock,
//       }
//     },
//     components: { BannerFeatured },
//     template: `
//         <banner-featured
//             :image="image"
//             :to="to"
//             :title="title"
//             :category="category"
//             :breadcrumb="breadcrumb"
//             :start-date="startDate"
//             :end-date="endDate"
//             :prompt="prompt"
//             :ratio="42"
//             :locations="locations"
//             :section-handle="sectionHandle"
//         />
//     `,
//   }
// }

// export function WideImageLeftAligned() {
//   return {
//     data() {
//       return {
//         ...mock,
//       }
//     },
//     components: { BannerFeatured },
//     template: `
//         <banner-featured
//             :image="image"
//             :to="to"
//             :title="title"
//             :category="category"
//             :breadcrumb="breadcrumb"
//             :start-date="startDate"
//             :end-date="endDate"
//             :prompt="prompt"
//             :ratio="42"
//             :align-right="false"
//             :locations="locations"
//             :section-handle="sectionHandle"
//         />
//     `,
//   }
// }

// export function NoButton() {
//   return {
//     data() {
//       return {
//         ...mock,
//       }
//     },
//     components: { BannerFeatured },
//     template: `
//         <banner-featured
//             :image="image"
//             :title="title"
//             :category="category"
//             :breadcrumb="breadcrumb"
//             :start-date="startDate"
//             :end-date="endDate"
//             :ratio="42"
//             :align-right="false"
//             :section-handle="sectionHandle"
//         />
//     `,
//   }
// }

// export function WithDescription() {
//   return {
//     data() {
//       return {
//         ...mock,
//       }
//     },
//     components: { BannerFeatured },
//     template: `
//         <banner-featured
//             :image="image"
//             :category="category"
//             :to="to"
//             :title="title"
//             :description="description"
//             :prompt="prompt"
//         />
//     `,
//   }
// }

// export function Video() {
//   return {
//     data() {
//       return {
//         ...mock,
//         image: API.video,
//       }
//     },
//     components: { BannerFeatured },
//     template: `
//         <banner-featured
//             :image="image"
//             :category="category"
//             :to="to"
//             :title="title"
//             :description="description"
//             :prompt="prompt"
//         />
//     `,
//   }
// }

// export function WithBlockForm() {
//   return {
//     data() {
//       return {
//         ...mock,
//         ...BlockFormData,
//       }
//     },
//     provide: {
//       // explicitly provide a computed property
//       eventId: '9383207',
//       blockFormData: BlockFormData.mock0,
//       libcalEndpoint: 'https://proxy.calendar.library.ucla.edu/',
//       registrationType: 'in-person',
//     },
//     components: { BannerFeatured },
//     template: `
//         <banner-featured
//             :image="image"
//             :category="category"
//             :title="title"
//             :description="description"
//             :prompt="prompt"
//             :registerEvent="true"
//         />
//     `,
//   }
// }

// const mock2 = {
//   image: API.image,
//   to: '/help/foo/bar/',
//   titleLink: '/confections/explore',
//   title: 'The Curious Case of the Siamese Cats',
//   category: 'Ullamcorper',
//   description:
//         'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//   breadcrumb: 'Lectus',
//   startDate: '1995-12-17T03:24:00',
//   endDate: '1995-12-17T03:24:00',
//   byline: ['Excepteur sint occaecat', 'non proident, sunt in culpa qui'],
//   locations: [
//     {
//       id: '523',
//       title: 'Powell Library',
//       to: 'visit/locations/powell-library',
//     },
//   ],
//   prompt: 'Cursus Quis',
//   alignRight: true,
// }

// export function LinkedTitle() {
//   return {
//     data() {
//       return {
//         ...mock2,
//       }
//     },
//     components: { BannerFeatured },
//     template: `
//         <banner-featured
//             :image="image"
//             :to="to"
//             :title="title"
//             :titleLink= "titleLink"
//             :category="category"
//             :breadcrumb="breadcrumb"
//             :byline="byline"
//             :prompt="prompt"
//             :locations="locations"
//         />
//     `,
//   }
// }
