import { computed } from 'vue'
import SectionScreeningDetails from '@/lib-components/SectionScreeningDetails'

// Import mock api data
import * as API from '@/stories/mock-api.json'

// Storybook default settings
export default {
  title: 'SECTION / Screening Details',
  component: SectionScreeningDetails,
}

const mockDefault = [
  {
    typeHandle: 'screeningDetails',
    title: 'Trailer with Cover image - The Central Regions',
    alternateTitle: null,
    language: 'es',
    year: '2025',
    country: 'South Country',
    languageInfo: 'Spanglish',
    runtime: '190 minutes',
    tagLabels: [
      {
        title: 'IMAX'
      },
      {
        title: 'Experimental Film'
      }
    ],
    text: '<p><em>La Région Centrale</em> is three long hours, composed of seventeen shots of an uninhabited mountainous</p>',
    trailer: '<figure><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/uYr_SvIKKuI?si=ihenbmyE91KqyXK5\" title=\"YouTube video player\" frameborder=\"0\"></iframe></figure>',
    image: API.image
  },
]

const mockMultiple = [
  {
    typeHandle: 'screeningDetails',
    title: 'Trailer with Cover image - The Central Regions',
    alternateTitle: null,
    language: 'jp',
    year: '2025',
    country: 'South Country',
    languageInfo: 'Spanglish',
    runtime: '190 minutes',
    tagLabels: [
      {
        title: 'IMAX'
      },
      {
        title: 'Experimental Film'
      }
    ],
    text: '<p><em>La Région Centrale</em> is three long hours, composed of seventeen shots of an uninhabited mountainous</p>',
    trailer: '<figure><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/uYr_SvIKKuI?si=ihenbmyE91KqyXK5\" title=\"YouTube video player\" frameborder=\"0\"></iframe></figure>',
    image: API.image
  },
  {
    typeHandle: 'screeningDetails',
    title: 'No trailer - Alternate Title - South America is Super Interesting',
    alternateTitle: 'Sudamérica es súper interesante',
    language: 'sp',
    year: '1971',
    country: 'South America',
    languageInfo: 'Spanish',
    runtime: '3 hours',
    tagLabels: [
      {
        title: 'Guest Speaker'
      }
    ],
    text: '<p>Snow shot <em>La Région Centrale</em> from September 14 to 20, 1970 with his wife <a href=\"https://en.wikipedia.org/wiki/Joyce_Wieland\" title=\"Joyce Wieland\">Joyce Wieland</a>, Abbeloos, and Bernard Goussard. They chartered a helicopter to transport them to the mountain.< Snow and his team were shooting for five days, producing sixty hours of footage. He edited the film during a residency at the <a href=\"https://en.wikipedia.org/wiki/Nova_Scotia_College_of_Art_and_Design\" title=\"Nova Scotia College of Art and Design\">Nova Scotia College of Art and Design</a>.</p>',
    trailer: null,
    image: []
  },
  {
    title: "Only Screening Title",
    alternateTitle: null,
    language: "ar",
    year: null,
    country: null,
    languageInfo: null,
    runtime: null,
    tagLabels: [],
    text: null,
    trailer: null,
    image: []
  },
  {
    typeHandle: 'screeningDetails',
    title: 'Trailer - No Cover image - Michael Snow 1983',
    alternateTitle: null,
    language: 'es',
    year: '1983',
    country: 'Spain',
    languageInfo: 'Spanish',
    runtime: '30 minutes',
    tagLabels: [
      {
        title: 'Interview'
      },
      {
        title: 'Film'
      }
    ],
    text: '<p>Interview and profile of experimental filmmaker Michael Snow from 1983. Includes extracts from \'Back and Forth\', \'Wavelength\', \'La Region Central\', \'So Is This\' and gallery piece \'Two Sides To Every Story\'. Made for Channel 4 \'Visions\' and broadcast 19 January 1983. Interview: Simon Field; Director: Keith Griffiths</p>',
    trailer: '<figure><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/nir7aNK5794?si=QZAJFI1fYNGZ96rc\" title=\"YouTube video player\" frameborder=\"0\"></iframe></figure>',
    image: []
  }
]

// Variations of stories below
export function Default() {
  return {
    data() {
      return { items: mockDefault }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionScreeningDetails },
    template: `
    <div>
      <section-screening-details
        :items="items"
      />
    </div>
  `,
  }
}

export function MultipleScreenings() {
  return {
    data() {
      return { items: mockMultiple }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { SectionScreeningDetails },
    template: `
    <div>
      <section-screening-details
        :items="items"
      />
      </div>
  `,
  }
}
