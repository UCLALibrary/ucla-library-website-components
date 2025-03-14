import { computed } from 'vue'
import ScrollWrapper from '../lib-components/ScrollWrapper.vue'
import SectionTeaserCard from '../lib-components/SectionTeaserCard.vue'
import { parsedFTVABlogSeries } from './mock/FTVAMedia'

export default {
  title: 'ScrollWrapper',
  component: ScrollWrapper,
}

/**
 * A component to wrap other components in slide-show like scrollable list.
 * Uses vuetify's `v-slide-group` and a singular `v-slide-group-item` to wrap all scrollable items.
 * This allows a section like `SectionTeaserCard` or list of individual cards like `FlexibleCardWithImage` to be slotted in
 */
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
      </scroll-wrapper>
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
      </scroll-wrapper>
  `,
  }
}
