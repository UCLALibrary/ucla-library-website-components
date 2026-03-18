import { computed } from 'vue'

// Import components
import FooterPrimary from '../lib-components/FooterPrimary.vue'
import FooterSock from '../lib-components/FooterSock.vue'
import HeaderSmart from '../lib-components/HeaderSmart.vue'
import CollectionOverview from '../lib-components/CollectionOverview.vue'
import GridMetadata from '../lib-components/GridMetadata.vue'
import SectionTeaserCard from '../lib-components/SectionTeaserCard.vue'
import ButtonMore from '../lib-components/ButtonMore.vue'
import ExcerptPod from '../lib-components/ExcerptPod.vue'
import NavSearch from '../lib-components/NavSearch.vue'
import SectionWrapper from '../lib-components/SectionWrapper.vue'

// Import mock data
import {
  getMockGlobalNavSearch,
  setupGlobalStore,
} from './helpers/storyHelpers'
import { mockPageCollectionsDetailVariants } from '@/stories/mock/Funkhaus/MockPageCollectionsDetail'

// Import styles
import './PageCollectionsDetail.scss'

export default {
  title: 'Funkhaus / Pages / Page Collections Detail',
  component: {},
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
                    'A single page layout with header, main content area, and footer. This serves as a template for collections detail pages.',
      },
    },
  },
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['default', 'dlc'],
      description: 'Theme variant for the page',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'albanian', 'variant2', 'variant3'],
      description:
                'Collection page variant (different metadata & overview)',
    },
  },
}

// Template function for the main landing page
function Template(args) {
  return {
    components: {
      HeaderSmart,
      FooterPrimary,
      FooterSock,
      SectionWrapper,
      CollectionOverview,
      GridMetadata,
      SectionTeaserCard,
      ButtonMore,
      ExcerptPod,
      NavSearch,
    },
    provide() {
      return {
        theme: computed(() => args.theme),
      }
    },
    setup() {
      // Set up global store with mock header navigation
      setupGlobalStore()

      // Use args from Storybook closure - props are NOT passed by Storybook
      const variant = args?.variant || 'default'
      const mockData = mockPageCollectionsDetailVariants[variant]

      // Nav Search
      const mockGlobalNavSearch = getMockGlobalNavSearch()
      // Collection Overview
      const collectionOverviewProps = mockData.collectionOverview
      // Grid Metadata
      const gridMetadataItems = mockData.gridMetadata.items
      const buttonMore = mockData.gridMetadata.buttonMore
      const excerptPod = mockData.gridMetadata.excerptPod
      // Section Teaser Cards (shared across all variants)
      const sectionTeaserCards = mockData.sectionTeaserCards

      const splitText = (text, sentenceCount) => {
        if (!text)
          return { truncated: '', remaining: '' }
        const sentenceRegex = /\.\s+(?=[A-Z])/g
        const sentences = text.split(sentenceRegex)
        if (sentences.length <= sentenceCount)
          return { truncated: text, remaining: '' }
        let truncated = sentences.slice(0, sentenceCount).join('. ')
        if (!truncated.endsWith('.'))
          truncated += '.'
        const remaining = ` ${sentences.slice(sentenceCount).join('.')}`
        return { truncated, remaining }
      }

      return {
        args,
        mockGlobalNavSearch,
        collectionOverviewProps,
        gridMetadataItems,
        sectionTeaserCards,
        buttonMore,
        excerptPod,
        splitText,
      }
    },
    template: `
       <div class="collections-detail-page">
         <!-- Header -->
        <HeaderSmart class="header-smart"/>

        <!-- Collection Overview -->
        <div class="search-field-composite-wrapper">
          <NavSearch
            :show-divider="true"
            :dropdown-options="mockGlobalNavSearch.dropdownOptions"
            :dropdown-default-value="mockGlobalNavSearch.dropdownDefaultValue"
            :placeholder="mockGlobalNavSearch.placeholder"
            bottom-text=""
            :bottom-link="null"
          />
        </div>

        <main class="main-content">
          <SectionWrapper class="collection-overview-wrapper">
            <CollectionOverview v-bind="collectionOverviewProps" />

            <!-- Grid Metadata -->
            <GridMetadata :items="gridMetadataItems">
              <template #after>
                <div v-if="excerptPod" class="excerpt-pod-wrapper">
                  <!-- Excerpt Pod (only when variant has excerptPod) -->
                  <ExcerptPod
                    :title="excerptPod.title"
                    :subtitle="excerptPod.subtitle"
                    :label-open="excerptPod.labelOpen"
                    :label-close="excerptPod.labelClose"
                    :sentence-split-count="excerptPod.sentenceSplitCount"
                  >
                    <template #default>
                      <p v-html="splitText(excerptPod.text, excerptPod.sentenceSplitCount).truncated" />
                    </template>
                    <template #content>
                      <p v-html="splitText(excerptPod.text, excerptPod.sentenceSplitCount).remaining" />
                    </template>
                  </ExcerptPod>
                </div>
              </template>
            </GridMetadata>
            
            <!-- Button More -->
            <ButtonMore
              class="button-more"
              :text="buttonMore.text"
              :to="buttonMore.to"
            />
          </SectionWrapper>

          <SectionWrapper class="section-teaser-card-wrapper">
              <p class="subtitle-grid-assets">
                {{ sectionTeaserCards.subtitle }}
              </p>
              <h2 class="title-grid-assets">
                {{ sectionTeaserCards.title }}
              </h2>
              <SectionTeaserCard
                :items="sectionTeaserCards.items"
                :section-title="sectionTeaserCards.sectionTitle"
                :grid-layout="true"
              />
          </SectionWrapper>
        </main>
         
         <!-- Footer -->
         <FooterPrimary />
         <!-- Footer Sock -->
         <FooterSock />
       </div>
     `,
  }
}

// Default story (Los Angeles Times)
export const Default = Template.bind({})
Default.args = {
  theme: 'dlc',
  variant: 'default',
}

// Albanian Photographic and Graphic Art Collection (scraped)
export const Albanian = Template.bind({})
Albanian.args = {
  theme: 'dlc',
  variant: 'albanian',
}

// Placeholder variant 2
export const Variant2 = Template.bind({})
Variant2.args = {
  theme: 'dlc',
  variant: 'variant2',
}

// Placeholder variant 3
export const Variant3 = Template.bind({})
Variant3.args = {
  theme: 'dlc',
  variant: 'variant3',
}
