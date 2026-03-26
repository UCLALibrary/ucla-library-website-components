<script setup>
import { computed, defineAsyncComponent } from 'vue'

// LODASH
import _kebabCase from 'lodash/kebabCase'
import omit from 'lodash/omit'

// COMPONENTS
import SectionWrapper from './SectionWrapper.vue'
import DividerWayFinder from './DividerWayFinder.vue'
import SectionHeader from './SectionHeader.vue'
import Fragment from './Fragment.vue'
import { useTheme } from '@/composables/useTheme'

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
const FlexibleInfo = defineAsyncComponent(() =>
  import('@/lib-components/Flexible/Info.vue')
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
const FlexibleDLViewer = defineAsyncComponent(() =>
  import('@/lib-components/Flexible/DLViewer.vue')
)
const ScrollWrapper = defineAsyncComponent(() =>
  import('@/lib-components/ScrollWrapper.vue')
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
  'flexible-info-block': FlexibleInfo,
  'flexible-media-gallery': FlexibleMediaGallery,
  'flexible-media-with-text': FlexibleMediaWithText,
  'flexible-pull-quote': FlexiblePullQuote,
  'flexible-rich-text': FlexibleRichText,
  'flexible-simple-cards': FlexibleSimpleCards,
  'flexible-dl-viewer': FlexibleDLViewer,
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
  'flexible-dl-viewer',
]

const classes = computed(() => {
  return ['flexible-blocks', theme?.value || '']
})

const parsedBlocks = computed(() => {
  // Map over the blocks and add additional properties to each block
  const output = props.blocks.map((obj) => {
    const hasDividerAssigned = obj?.needsDivider !== undefined

    return {
      ...obj,
      componentName: convertName(obj.typeHandle),
      theme: 'white', // Default theme to white
      hasDividerAssigned,
      needsDivider: hasDividerAssigned ? obj?.needsDivider : false, // Default no divider, but can be overridden by the block itself
    }
  })

  // Iterate over blocks and set the theme/divider logic
  output.forEach((block, index, arr) => {
    // Apply specific theming for ftva
    if (theme?.value === 'ftva') {
      block.theme = 'white' // Force theme to white
      block.needsDivider = false // No dividers in ftva theme
    }
    else if (theme?.value === 'dlc') {
      block.theme = 'white' // DLC: all white sections
      block.needsDivider = block.hasDividerAssigned
        ? block.needsDivider
        : true // Default has a divider, but can be overridden by the block itself
    }
    else {
      // Normal theme logic for other themes
      if (
        index > 0
                && arr[index - 1].theme === 'white'
                && !NEVER_GRAY.includes(block.componentName)
                && index < arr.length - 1
      )
        block.theme = 'gray' // Apply gray theme when needed

      if (
        theme?.value !== 'dlc'
                && index > 0
                && block.theme === 'white'
                && arr[index - 1].theme === 'white'
      )
        block.needsDivider = true // Set divider if needed
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

function getWrapperComponent(block) {
  // if not ftva, never use scroll wrapper
  if (theme?.value !== 'ftva')
    return Fragment

  // else if ftva, add scroll wrapper to specific components in specific cases
  return block.componentName === 'flexible-card-with-image'
        && block.cardWithImageType === 'horizontalScroll'
    ? ScrollWrapper
    : Fragment
}
</script>

<template>
  <SectionWrapper :class="classes" :no-margins="true">
    <SectionHeader class="more-information">
      More Information
    </SectionHeader>

    <div
      v-for="(block, index) in parsedBlocks"
      :key="`flexibleblocks-${index}`"
    >
      <SectionWrapper v-if="block.needsDivider" theme="divider">
        <DividerWayFinder />
      </SectionWrapper>

      <SectionWrapper
        :theme="block.theme"
        :section-title="sectionTitle(block)"
        :section-summary="sectionSummary(block)"
        :no-constraints="block.noConstraints"
        class="flexible-block-section-wrapper"
      >
        <component :is="getWrapperComponent(block)">
          <component
            :is="getComponent(block.componentName)"
            :block="
              block.mediaGalleryStyle === 'halfWidth'
                ? block
                : omit(block, [
                  'sectionTitle',
                  'sectionSummary',
                ])
            "
            class="flexible-block"
            :class="{ 'outlined-container': block.hasOutline }"
          />
        </component>
      </SectionWrapper>
    </div>
  </SectionWrapper>
</template>

<style lang="scss" scoped>
// default theme
.flexible-blocks {
    .more-information {
        @include visually-hidden;
    }
}

// ftva theme
.ftva.flexible-blocks {
    .flexible-block-section-wrapper {
        // sections within flexible blocks have bold titles and medium grey summaries
        :deep(.section-header) {
            margin-bottom: 12px;
            .section-title {
                @include ftva-h5;
                color: $accent-blue;
            }
            .section-summary {
                @include ftva-body;
                color: $medium-grey;
            }
        }
    }
}

// dlc theme – matches PageUsingDigitalCollections (section title, rich text, outline, viewer)
.dlc.flexible-blocks {
    .flexible-block-section-wrapper {
        :deep(.section-header) {
            .section-title {
                max-width: 640px;
                margin: 0 auto 24px;
                font-size: 32px;
                font-style: normal;
                font-weight: 400;
                line-height: 120%;
                color: var(--color-primary-blue-03);
            }
        }

        :deep(.flexible-block.rich-text .parsed-content > *:not(.full-width)) {
            max-width: 640px;
            margin-left: auto;
            margin-right: auto;
        }

        :deep(.flexible-block.rich-text .parsed-content > .full-width) {
            max-width: none;
        }

        /* DL viewer: full width so the viewer is not narrow */
        :deep(.flexible-block.flexible-dl-viewer) {
            max-width: 100%;
        }

        :deep(.flexible-block.outlined-container) {
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
            padding: 32px;
            border: 1px solid var(--color-secondary-grey-02);
            border-radius: 15px;
        }
    }

    @media #{$small} {
        .flexible-block-section-wrapper
            :deep(.flexible-block.outlined-container) {
            padding: 24px;
        }
    }
}
</style>
