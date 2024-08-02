import { computed } from 'vue'

// Import component
import SectionTeaserCard from '@/lib-components/SectionTeaserCard'

// Import mock api data
import * as API from '@/stories/mock-api.json'

// Storybook default settings
export default {
  title: 'SECTION / Teaser / Card',
  component: SectionTeaserCard,
}

const mockDefault = [
  {
    image: null,
    to: '/visit/foo/bar/',
    category: 'Feugiat',
    title: 'Vel Quam Elementum',
    startDate: '2021-02-05T11:00:00-08:00',
    endDate: '2021-02-05T11:00:00-08:00',
    sectionHandle: 'workshopOrEventSeries',
    isOnline: true,
  },
  {
    image: API.image,
    to: '/visit/foo/baz/',
    category: 'Tincidunt',
    title: 'Mauris pellentesque pulvinar pellentesque habitant morbi tristique',
    sectionHandle: 'event',
    isOnline: true,
  },
  {
    image: API.image,
    to: '/visit/foo/bat/',
    title: 'Adipiscing Tristique',
    sectionHandle: 'event',
    isOnline: false,
  },
  {
    image: API.image,
    to: '/visit/foo/ban/',
    category: 'Ullamco',
    title: 'Fames ac turpis egestas sed tempus lorem ipsum',
    startDate: '2021-02-05T11:00:00-08:00',
    endDate: '2021-02-05T11:00:00-08:00',
    sectionHandle: 'event',
    isOnline: false,
  },
  {
    image: API.image,
    to: '/visit/foo/barf/',
    category: 'Curabitur ',
    title: 'Quam Elementum',
    startDate: '2021-02-05T11:00:00-08:00',
    endDate: '2021-02-05T11:00:00-08:00',
    sectionHandle: 'event',
    isOnline: true,
  },
  {
    image: API.image,
    to: '/visit/foo/bad/',
    category: 'Sagittis',
    title: 'Aenean Lectus Elit',
    startDate: '2021-02-05T11:00:00-08:00',
    endDate: '2021-02-05T11:00:00-08:00',
    sectionHandle: 'event',
    isOnline: true,
  },
  {
    image: null,
    to: '/visit/foo/bag/',
    category: 'Tortor',
    title: 'Vivamus Consectetuer Risus et Tortor',
    startDate: '2021-02-05T11:00:00-08:00',
    endDate: '2021-02-05T11:00:00-08:00',
    sectionHandle: 'event',
    isOnline: false,
  },
  {
    image: API.image,
    to: '/visit/foo/bam/',
    category: 'Maecenas',
    sectionHandle: 'event',
    title: 'Proin ut Ligula vel Nunc Egestas Porttitor',
    text: 'Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien.',
    isOnline: false,
  },
]

const mockFtva = [
  {
    id: "2847944",
    to: "events/la-région-centrale-03-08-24",
    title: "TEST - La Région Centrale Screening",
    startDate: '2027-03-31T07:00:00+00:00',
    endDate: null,
    image: {
      id: "3131261",
      src: "https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/pinkcloud-crop.png",
      height: 1920,
      width: 2560,
      srcset: "https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/pinkcloud-crop.png 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/pinkcloud-crop.png 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/pinkcloud-crop.png 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/pinkcloud-crop.png 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/pinkcloud-crop.png 2560w",
      alt: "A woman writing on a window.",
      focalPoint: [
        0.5,
        0.5
      ]
    }
  },
  {
    id: "3145808",
    to: "events/step-up-3-07-19-25",
    title: "TEST - Step Up 3D (2010) Sequel to 2008's Step Up 2: The Streets and the third installment in the Step Up film series",
    startDate: '2028-03-31T07:00:00+00:00',
    image: null
  },
  {
    id: "3145784",
    to: "events/step-up-2-07-07-25",
    title: "TEST - Step Up 2: The Streets (2008)",
    startDate: '2026-03-31T07:00:00+00:00',
    image: {
      id: "3157357",
      src: "https://static.library.ucla.edu/craftassetstest/FTVA/_fullscreen/step2.jpg",
      height: 1705,
      width: 2560,
      srcset: "https://static.library.ucla.edu/craftassetstest/FTVA/_375xAUTO_crop_center-center_none/step2.jpg 375w, https://static.library.ucla.edu/craftassetstest/FTVA/_960xAUTO_crop_center-center_none/step2.jpg 960w, https://static.library.ucla.edu/craftassetstest/FTVA/_1280xAUTO_crop_center-center_none/step2.jpg 1280w, https://static.library.ucla.edu/craftassetstest/FTVA/_1920xAUTO_crop_center-center_none/step2.jpg 1920w, https://static.library.ucla.edu/craftassetstest/FTVA/_2560xAUTO_crop_center-center_none/step2.jpg 2560w",
      alt: null,
      focalPoint: [
        0.5,
        0.5
      ]
    }
  },
]
// Variations of stories below
export function Default() {
  return {
    data() {
      return { items: mockDefault }
    },
    components: { SectionTeaserCard },
    template: `
      <section-teaser-card
        :items="items"
      />
  `,
  }
}

// const FTVAMock = mock.slice(3, 6).map((item) => {
//   return {
//     ...item,
//     category: ''
//   }
// })
export function FTVAWithSectionTitle() {
  return {
    data() {
      return { items: mockFtva }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionTeaserCard },
    template: `
      <section-teaser-card
        :items="items"
        section-title="section title here"
      />
  `,
  }
}
