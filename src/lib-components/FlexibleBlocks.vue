<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { useTheme } from '@/composables/useTheme'

// LODASH
import _kebabCase from 'lodash/kebabCase'
import omit from 'lodash/omit'


// COMPONENTS
import SectionWrapper from './SectionWrapper.vue'
import DividerWayFinder from './DividerWayFinder.vue'
import SectionHeader from './SectionHeader.vue'

const props = defineProps({
  blocks: {
    type: Array,
    default: () => [],
  },
})

// THEME
const theme = useTheme()

// Async components with explicit definitions
const FlexibleAssociatedTopicCards = defineAsyncComponent(() =>
  import('@/lib-components/Flexible/AssociatedTopicCards.vue')
)
const FlexibleBannerFeatured = defineAsyncComponent(() =>
  import('@/lib-components/Flexible/BannerFeatured.vue')
)
const FlexibleCallToAction = defineAsyncComponent(() =>
  import('@/lib-components/Flexible/CallToAction.vue')
)
const FlexibleCardWithImage = defineAsyncComponent(() =>
  import('@/lib-components/Flexible/CardWithImage.vue')
)
const FlexibleForm = defineAsyncComponent(() =>
  import('@/lib-components/Flexible/Form.vue')
)
const FlexibleGridGalleryCards = defineAsyncComponent(() =>
  import('@/lib-components/Flexible/GridGalleryCards.vue')
)
const FlexibleHighlight = defineAsyncComponent(() =>
  import('@/lib-components/Flexible/Highlight.vue')
)
const FlexibleHorizontalDivider = defineAsyncComponent(() =>
  import('@/lib-components/Flexible/HorizontalDivider.vue')
)
const FlexibleImpactNumberCards = defineAsyncComponent(() =>
  import('@/lib-components/Flexible/ImpactNumberCards.vue')
)
const FlexibleImpactNumbersCarousel = defineAsyncComponent(() =>
  import('@/lib-components/Flexible/ImpactNumbersCarousel.vue')
)

const FlexibleMediaGallery = defineAsyncComponent(() =>
  import('@/lib-components/Flexible/MediaGallery.vue')
)
const FlexibleMediaWithText = defineAsyncComponent(() =>
  import('@/lib-components/Flexible/MediaWithText.vue')
)
const FlexiblePullQuote = defineAsyncComponent(() =>
  import('@/lib-components/Flexible/PullQuote.vue')
)
const FlexibleRichText = defineAsyncComponent(() =>
  import('@/lib-components/Flexible/RichText.vue')
)
const FlexibleSimpleCards = defineAsyncComponent(() =>
  import('@/lib-components/Flexible/SimpleCards.vue')
)

const components = {
  'flexible-associated-topic-cards': FlexibleAssociatedTopicCards,
  'flexible-banner-featured': FlexibleBannerFeatured,
  'flexible-call-to-action': FlexibleCallToAction,
  'flexible-card-with-image': FlexibleCardWithImage,
  'flexible-form': FlexibleForm,
  'flexible-grid-gallery-cards': FlexibleGridGalleryCards,
  'flexible-highlight': FlexibleHighlight,
  'flexible-horizontal-divider': FlexibleHorizontalDivider,
  'flexible-impact-number-cards': FlexibleImpactNumberCards,
  'flexible-impact-numbers-carousel': FlexibleImpactNumbersCarousel,
  'flexible-media-gallery': FlexibleMediaGallery,
  'flexible-media-with-text': FlexibleMediaWithText,
  'flexible-pull-quote': FlexiblePullQuote,
  'flexible-rich-text': FlexibleRichText,
  'flexible-simple-cards': FlexibleSimpleCards,
  // Add other components here if needed
}

const NEVER_GRAY = [
  'flexible-associated-topic-cards',
  'flexible-banner-featured',
  'flexible-divider-general',
  'flexible-form',
  'flexible-impact-numbers-carousel',
  'flexible-pull-quote',
  'flexible-simple-cards',
  'flexible-call-to-action',
  'flexible-cta-block2-up',
  'flexible-impact-number-cards',
  'flexible-grid-gallery-cards',
]

const classes = computed(() => {
  return ['flexible-blocks', theme?.value || '']
})

const parsedBlocks = computed(() => {
  // Map over the blocks and add additional properties to each block
  const output = props.blocks.map(obj => ({
    ...obj,
    componentName: convertName(obj.typeHandle),
    theme: 'white', // Default theme to white
    needsDivider: false, // Default no divider
  }))

  // Iterate over blocks and set the theme/divider logic
  output.forEach((block, index, arr) => {
    // Apply specific theming for ftva
    if (theme?.value === 'ftva') {
      block.theme = 'white' // Force theme to white
      block.needsDivider = false // No dividers in ftva theme
    } else {
      // Normal theme logic for other themes
      if (
        index > 0
        && arr[index - 1].theme === 'white'
        && !NEVER_GRAY.includes(block.componentName)
        && index < arr.length - 1
      ) {
        block.theme = 'gray' // Apply gray theme when needed
      }

      if (
        index > 0
        && block.theme === 'white'
        && arr[index - 1].theme === 'white'
      ) {
        block.needsDivider = true // Set divider if needed
      }
    }
  })

  return output.filter(block =>
    Object.keys(components).includes(block.componentName)
  )
})

function convertName(typeHandle) {
  return _kebabCase(`flexible-${typeHandle}`)
}
// Type guard to check if a ContentType is a FlexibleMediaGallery
function isFlexibleMediaGallery(block) {
  return block.mediaGalleryStyle !== undefined
}

function sectionTitle(block) {
  // Use the type guard to narrow down the type
  if (isFlexibleMediaGallery(block)) {
    // TypeScript now knows block is FlexibleMediaGallery, so it's safe to access mediaGalleryStyle
    return block.mediaGalleryStyle === 'halfWidth' ? '' : block.sectionTitle
  }
  else {
    return block.sectionTitle
  }
}

function sectionSummary(block) {
  return block.mediaGalleryStyle === 'halfWidth'
    ? ''
    : block.sectionSummary || block.richTextSimplified
}

function getComponent(name) {
  return components[name]
}
</script>

<template>
  <SectionWrapper
    :class="classes"
    :no-margins="true"
  >
    <SectionHeader class="more-information">
      More Information
    </SectionHeader>

    <div
      v-for="(block, index) in parsedBlocks"
      :key="`flexibleblocks-${index}`"
    >
      <SectionWrapper
        v-if="block.needsDivider"
        theme="divider"
      >
        <DividerWayFinder />
      </SectionWrapper>

      <SectionWrapper
        :theme="block.theme"
        :section-title="sectionTitle(block)"
        :section-summary="sectionSummary(block)"
      >
        <component
          :is="getComponent(block.componentName)"
          :block="block.mediaGalleryStyle === 'halfWidth'
      ? block
      : omit(block, ['sectionTitle', 'sectionSummary'])
      "
          class="flexible-block"
        />
      </SectionWrapper>
    </div>
  </SectionWrapper>
</template>

<style
  lang="scss"
  scoped
>
.flexible-blocks {
  .more-information {
    @include visually-hidden;
  }
}
</style>
