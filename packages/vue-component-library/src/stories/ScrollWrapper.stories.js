import { computed } from 'vue'
import ScrollWrapper from '../lib-components/ScrollWrapper.vue'
import SectionTeaserCard from '../lib-components/SectionTeaserCard.vue'
import { parsedFTVABlogSeries } from './mock/FTVAMedia'

export default {
  title: 'ScrollWrapper',
  component: ScrollWrapper,
}

export function Default() {
  return {
    data() {
      return { items: parsedFTVABlogSeries }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { ScrollWrapper, SectionTeaserCard },
    template: `
      <scroll-wrapper>
        <section-teaser-card
        :items="items"
        />
      <scroll-wrapper/>
  `,
  }
}

export function SixItems() {
  return {
    data() {
      return { items: parsedFTVABlogSeries.concat(parsedFTVABlogSeries) }
    },
    provide() {
      return {
        theme: computed(() => 'ftva'),
      }
    },
    components: { ScrollWrapper, SectionTeaserCard },
    template: `
      <scroll-wrapper>
        <section-teaser-card
        :items="items"
        />
      <scroll-wrapper/>
  `,
  }
}
