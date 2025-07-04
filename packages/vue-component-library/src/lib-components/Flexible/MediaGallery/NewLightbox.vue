<script lang="ts" setup>
import { computed, defineAsyncComponent, onMounted, ref } from 'vue'
import type { PropType } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

import SvgIconCaretLeft from 'ucla-library-design-tokens/assets/svgs/icon-caret-circle-left.svg'
import SvgIconCaretRight from 'ucla-library-design-tokens/assets/svgs/icon-caret-circle-right.svg'
import SvgIconClose from 'ucla-library-design-tokens/assets/svgs/icon-close-large.svg'
import SvgIconMoleculeBullet from 'ucla-library-design-tokens/assets/svgs/icon-molecule-bullet-filled.svg'
import SmartLink from '../../SmartLink.vue'
import type { MediaGalleryItemType } from '@/types/types'
import MediaItem from '@/lib-components/Media/Item.vue'

import { useTheme } from '@/composables/useTheme'

const { items, selectedItem, inline } = defineProps({
  items: {
    type: Array as PropType<MediaGalleryItemType[]>,
    default: () => [],
    required: true,
  },

  selectedItem: {
    type: Number,
    default: 0,
  },

  // Triggers Lightbox to be overlaid (default) or inline
  inline: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits<{
  (e: 'closeModal'): void
}>()

const theme = useTheme()

const SvgExternalLink = defineAsyncComponent(() =>
  import(
    'ucla-library-design-tokens/assets/svgs/icon-external-link.svg'
  )
)

const selectionIndex = ref(selectedItem)

const captionTitle = computed(() => {
  return items.map(item => item.captionTitle)
})
const captionText = computed(() => {
  return items.map(item => item.captionText)
})
const classes = computed(() => {
  return ['lightbox', theme?.value || '', inline ? 'inline' : '']
})
// if ftva, pass cover as object fit, otherwise contain
const parsedObjectFit = computed(() => {
  return theme?.value === 'ftva' ? 'cover' : 'contain'
})

const lightbox = ref<HTMLElement | null>(null) // replacing this.$refs.lightbox

// For FTVA Homepage Carousel:
const prevBtnRef = ref()
const nextBtnRef = ref()
const paginationCounterRef = ref()

onMounted(() => {
  lightbox.value?.focus()

  // Sets placement of arrows for FTVA Homepage Carousel
  setFTVAHomepageNavigationArrows()
})

// For FTVA Homepage Carousel:
// Offset placement of navigation arrows based on width of pagination counter
function setFTVAHomepageNavigationArrows() {
  // Prevent getBoundingClientRect error when there is no pagination counter, i.e., only single item in the carousel
  if (items.length < 2)
    return null

  const coordinates = paginationCounterRef.value.getBoundingClientRect()

  prevBtnRef.value.style.setProperty('--counterWidth', `${coordinates.width}px`)
  nextBtnRef.value.style.setProperty('--counterWidth', `${coordinates.width}px`)
}

function closeModal() {
  emit('closeModal')
}

function setCurrentSlide(currentSlide: number) {
  selectionIndex.value = currentSlide
}
</script>

<template>
  <div ref="lightbox" :class="classes">
    <button class="button-close" @click="closeModal">
      <SvgIconClose aria-label="Close" />
    </button>

    <Carousel v-model="selectionIndex" class="media-container">
      <Slide v-for="(item, index) in items" :key="`media-container-${index}`">
        <MediaItem
          :key="`${item.captionTitle}-${index}`" :object-fit="parsedObjectFit" :item="item.item"
          :cover-image="item.coverImage" :embed-code="item.embedCode"
        >
          <div v-if="item.credit" class="credit-text">
            <span v-text="item.credit" />
          </div>
        </MediaItem>
      </Slide>
    </Carousel>

    <!-- Navigation -->
    <button v-if="items.length > 1" ref="prevBtnRef" class="button-prev" :disabled="selectionIndex <= 0" @click="selectionIndex -= 1">
      <SvgIconCaretLeft aria-label="Show previous image" />
    </button>
    <button
      v-if="items.length > 1" ref="nextBtnRef" class="button-next" :disabled="selectionIndex >= items.length - 1"
      @click="selectionIndex += 1"
    >
      <SvgIconCaretRight aria-label="Show next image" />
    </button>

    <!-- Pagination -->
    <div class="caption-block">
      <div v-if="items.length > 1" ref="paginationCounterRef" class="media-counter" role="tablist">
        <button
          v-for="index in items.length" :key="`caption-block-${index}`" :disabled="index - 1 === selectionIndex"
          class="media-counter-item" @click="setCurrentSlide(index - 1)"
        >
          <SvgIconMoleculeBullet />
        </button>
      </div>
      <!-- Captions -->
      <div class="caption-content">
        <div class="media-object-caption-slot">
          <slot :selection-index="selectionIndex" />
          <!-- additional blocktags/labels/simple elements can be slotted in here by parent -->
        </div>
        <h4 v-if="captionTitle" class="media-object-title" v-text="captionTitle[selectionIndex]" />

        <p v-if="captionText" class="media-object-caption" v-text="captionText[selectionIndex]" />

        <p v-if="items && items[selectionIndex] && items[selectionIndex].credit" class="media-object-credit">
          {{ items[selectionIndex].credit }}
        </p>

        <SmartLink
          v-if="items && items[selectionIndex] && items[selectionIndex].linkUrl
            && items[selectionIndex].linkText
          " class="media-object-caption-link" :to="items[selectionIndex].linkUrl"
        >
          {{ items[selectionIndex].linkText }}
          <SvgExternalLink />
        </SmartLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_new-lightbox.scss";
@import "@/styles/ftva/_new-lightbox.scss";
</style>
