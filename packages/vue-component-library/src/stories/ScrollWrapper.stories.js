import { computed } from 'vue'
import ScrollWrapper from '../lib-components/ScrollWrapper.vue'
import SectionTeaserCard from '../lib-components/SectionTeaserCard.vue'
import BlockCardWithImage from '../lib-components/BlockCardWithImage.vue'
import { parsedFTVABlogSeries } from './mock/FTVAMedia'

export default {
  title: 'ScrollWrapper',
  component: ScrollWrapper,
}

/**
 * A component to wrap other components in slide-show like scrollable list.
 * Uses vuetify's `v-slide-group` and `v-slide-group-item` to wrap all scrollable items.
 * Can be used to wrap a group of components that needs to scroll horizontally with styled arrows.
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
    components: { ScrollWrapper, BlockCardWithImage },
    template: `
      <scroll-wrapper>
        <template v-for="item in items" :key="item.id">
          <block-card-with-image class="card" :byline-one="item.bylineOne" :byline-two="item.bylineTwo" :category="item.category" :date-created="item.postDate" :image="item.image" date-format="short" :start-date="item.startDate" :end-date="item.endDate" :title="item.title" :to="item.to" tag="div" :image-aspect-ratio="60" :is-vertical="true" />
        </template>
      </scroll-wrapper>
  `,
  }
}

Default.parameters = {
  chromatic: { disableSnapshot: false },
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
    components: { ScrollWrapper, BlockCardWithImage },
    template: `
      <scroll-wrapper>
        <template v-for="item in items" :key="item.id">
          <block-card-with-image class="card" :byline-one="item.bylineOne" :byline-two="item.bylineTwo" :category="item.category" :date-created="item.postDate" :image="item.image" date-format="short" :start-date="item.startDate" :end-date="item.endDate" :title="item.title" :to="item.to" tag="div" :image-aspect-ratio="60" :is-vertical="true" />
        </template>
      </scroll-wrapper>
  `,
  }
}
