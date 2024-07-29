import { computed } from 'vue'
import BlockScreeningDetail from '@/lib-components/BlockScreeningDetail'

// Import mock api data
import * as API from '@/stories/mock-api.json'

// Storybook default settings
export default {
  title: 'BLOCK / Screening Detail',
  component: BlockScreeningDetail
}

const mockDefault = {
  title: 'The Central Region',
  alternateTitle: 'La Central Region',
  language: 'sp',
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
  text: '<p><em>This is the first part of a two-part article, the second half of which will be published in the December issue.</em></p> <p><a href="https://www.cinema.ucla.edu/events/2023/11/05/la-region-centrale">The late avant-garde master Michael Snow’s work</a> explores the nature of perception, consciousness, participation, and in many ways is uncategorizable but relation to time is evident.</p>',
  trailer: '<figure><iframe width="560" height="315" src="https://www.youtube.com/embed/uYr_SvIKKuI?si=DzBCtX84znzh9EML" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></figure>',
  image: API.image
}

const mockSceeningOnlyTitle = {
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
}

// Variations of stories below
export function Default() {
  return {
    data() {
      return { ...mockDefault }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockScreeningDetail },
    template: `
      <block-screening-detail
        :title="title"
        :alternateTitle="alternateTitle"
        :language="language"
        :year="year"
        :country="country"
        :languageInfo="languageInfo"
        :runtime="runtime"
        :tagLabels="screeningTags"
        :text="text"
        :trailer= "trailer"
        :image="image"
      />
  `,
  }
}

export function NoTrailer() {
  return {
    data() {
      return { ...mockDefault }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockScreeningDetail },
    template: `
      <block-screening-detail
        :title="title"
        :alternateTitle="alternateTitle"
        :language="language"
        :year="year"
        :country="country"
        :languageInfo="languageInfo"
        :runtime="runtime"
        :tagLabels="screeningTags"
        :text="text"
        trailer= null
        image=[]
      />
  `,
  }
}

export function OnlyScreeningTitle() {
  return {
    data() {
      return { ...mockSceeningOnlyTitle }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { BlockScreeningDetail },
    template: `
      <block-screening-detail
        :title="title"
        :alternateTitle="alternateTitle"
        :language="language"
        :year="year"
        :country="country"
        :languageInfo="languageInfo"
        :runtime="runtime"
        :tagLabels="screeningTags"
        :text="text"
        :trailer= "trailer"
        :image="image"
      />
  `,
  }
}
