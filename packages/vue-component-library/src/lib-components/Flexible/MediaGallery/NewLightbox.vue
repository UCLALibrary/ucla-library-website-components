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
// note: this is overwritten with css styles for ftva media gallery carousels
const parsedObjectFit = computed(() => {
  return theme?.value === 'ftva' ? 'cover' : 'contain'
})

const lightbox = ref<HTMLElement | null>(null) // replacing this.$refs.lightbox

// For FTVA Homepage Carousel:
const prevBtnRef = ref()
const nextBtnRef = ref()
const paginationCounterRef = ref()

// A11Y FIX - Announce slide changes to screen readers
const slideAnnouncement = computed(() => {
  const title = captionTitle.value[selectionIndex.value]
  return `Slide ${selectionIndex.value + 1} of ${items.length}${title ? `: ${title}` : ''}`
})

onMounted(async () => {
  lightbox.value?.focus()

  // Dynamically load Wicg-inert - only load in browser if needed
  if (typeof window !== 'undefined') {
    try {
      const moduleName = 'wicg-inert'
      await import(/* @vite-ignore */ moduleName)
    }
    catch {
      // ignore if not available
    }
  }

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

function handleTabKeyNav(event: KeyboardEvent, index: number) {
  if (event.key === 'ArrowRight') {
    event.preventDefault()
    setCurrentSlide((index + 1) % items.length)
  }

  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    setCurrentSlide((index - 1 + items.length) % items.length)
  }
}
</script>

<template>
  <div ref="lightbox" :class="classes">
    <!-- A11Y FIX: screen reader live region -->
    <p class="sr-only" aria-live="polite" aria-atomic="true">
      {{ slideAnnouncement }}
    </p>

    <!-- Close button -->
    <button class="button-close" aria-label="Close" @click="closeModal">
      <SvgIconClose aria-hidden="true" focusable="false" />
    </button>

    <!-- Carousel -->
    <Carousel v-model="selectionIndex" class="media-container">
      <Slide
        v-for="(item, index) in items"
        :key="`media-container-${index}`"
        :aria-hidden="index !== selectionIndex"
      >
        <!-- wrapper div for the slide -->
        <div
          :inert="index !== selectionIndex"
          :tabindex="index === selectionIndex ? 0 : -1"
        >
          <MediaItem
            :key="`${item.captionTitle}-${index}`"
            :object-fit="parsedObjectFit"
            :item="item.item"
            :cover-image="item.coverImage"
            :embed-code="item.embedCode"
            class="library-media-item"
          >
            <div v-if="item.credit" class="credit-text">
              <span v-text="item.credit" />
            </div>
          </MediaItem>
        </div>
      </Slide>
    </Carousel>

    <!-- Navigation -->
    <button v-if="items.length > 1" ref="prevBtnRef" class="button-prev" aria-label="Show previous image" :disabled="selectionIndex <= 0" @click="selectionIndex -= 1">
      <SvgIconCaretLeft aria-hidden="true" focusable="false" />
    </button>
    <button
      v-if="items.length > 1" ref="nextBtnRef" class="button-next" aria-label="Show next image" :disabled="selectionIndex >= items.length - 1"
      @click="selectionIndex += 1"
    >
      <SvgIconCaretRight aria-hidden="true" focusable="false" />
    </button>

    <!-- Pagination -->
    <div class="caption-block">
      <div v-if="items.length > 1" ref="paginationCounterRef" class="media-counter" role="tablist" aria-label="Slide navigation">
        <button
          v-for="index in items.length"
          :key="`caption-block-${index}`"
          role="tab"
          class="media-counter-item"
          :aria-label="`Go to slide ${index} of ${items.length}`"
          :aria-selected="index - 1 === selectionIndex"
          :tabindex="index - 1 === selectionIndex ? 0 : -1"
          @click="setCurrentSlide(index - 1)"
          @keydown="handleTabKeyNav($event, index - 1)"
        >
          <SvgIconMoleculeBullet aria-hidden="true" focusable="false" />
        </button>
      </div>

      <!-- Captions -->
      <div class="caption-content" aria-live="polite">
        <div class="media-object-caption-slot">
          <slot :selection-index="selectionIndex" />
          <!-- additional blocktags/labels/simple elements can be slotted in here by parent -->
        </div>
        <!-- if a url is provided make the title clickable -->
        <h4 v-if="captionTitle[selectionIndex]" class="media-object-title">
          <template v-if="items && items[selectionIndex] && items[selectionIndex].linkUrl">
            <SmartLink :to="items[selectionIndex].linkUrl">
              {{ captionTitle[selectionIndex] }}
            </SmartLink>
          </template>
          <template v-else>
            {{ captionTitle[selectionIndex] }}
          </template>
        </h4>
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
          <SvgExternalLink aria-hidden="true" focusable="false" />
        </SmartLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_new-lightbox.scss";
@import "@/styles/ftva/_new-lightbox.scss";
// A11Y style for screen reader live region
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}
</style>
