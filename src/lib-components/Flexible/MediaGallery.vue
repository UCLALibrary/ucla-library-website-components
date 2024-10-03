<script
  setup
  lang="ts"
>
import { computed, ref } from 'vue'
import type { PropType } from 'vue'

import FlexibleMediaGalleryBannerImage from '@/lib-components/Flexible/MediaGallery/BannerImage.vue'
import FlexibleMediaGalleryNewLightbox from '@/lib-components/Flexible/MediaGallery/NewLightbox.vue'
import FlexibleMediaGalleryThumbnailCard from '@/lib-components/Flexible/MediaGallery/ThumbnailCard.vue'

import type { FlexibleMediaGallery } from '@/types/flexible_types'
import { useTheme } from '@/composables/useTheme'

const { block, inline } = defineProps({
  block: {
    type: Object as PropType<FlexibleMediaGallery>,
    required: true,
  },

  // Triggers Lightbox to be overlaid (default) or inline
  inline: {
    type: Boolean,
    default: false
  }
})

const expandThumbnails = ref(false)
const selectionIndex = ref(0)
const showLightboxModal = ref(false)

const nItems = computed(() => {
  return block.mediaGallery.length
})

const galleryTitle = computed(() => {
  return block.sectionTitle
})

const fullWidthGallery = computed(() => {
  return block.mediaGalleryStyle === 'fullWidth'
})

const halfWidthGallery = computed(() => {
  return block.mediaGalleryStyle === 'halfWidth'
})

const halfWidthTitle = computed(() => {
  return halfWidthGallery.value
    ? block.sectionTitle
    : ''
})

const halfWidthSummary = computed(() => {
  return halfWidthGallery.value
    ? block.richTextSimplified
    : ''
})

const theme = useTheme()
const parsedClasses = computed(() => {
  return ['media-gallery', theme?.value || '']
})

// methods:
function hideLightboxModal() {
  showLightboxModal.value = false
}

function toggleThumbnails() {
  expandThumbnails.value = !expandThumbnails.value
}

function selectItem(itemIndex: number) {
  selectionIndex.value = itemIndex
  showLightboxModal.value = true
}
</script>

<template>
  <section
    v-if="block.mediaGallery && block.mediaGallery.length > 0"
    :class="parsedClasses"
  >
    <FlexibleMediaGalleryNewLightbox
      v-if="showLightboxModal"
      :items="block.mediaGallery"
      :selected-item="selectionIndex"
      tabindex="0"
      :inline="inline"
      @close-modal="hideLightboxModal"
      @keydown.esc="hideLightboxModal"
    />

    <section v-if="theme && fullWidthGallery" class="gallery-header">
      <h2 class="gallery-title">
        {{ galleryTitle }}
      </h2>
      <h3 class="selected-image-title">
        {{ block.mediaGallery[selectionIndex].captionTitle }}
      </h3>
      <p class="selected-image-caption">
        {{ block.mediaGallery[selectionIndex].captionText }}
      </p>
    </section>

    <FlexibleMediaGalleryBannerImage
      v-if="block.mediaGallery && block.mediaGallery[selectionIndex].item"
      :item="block.mediaGallery[selectionIndex].item"
      :cover-image="block.mediaGallery[selectionIndex].coverImage"
      :embed-code="block.mediaGallery[selectionIndex].embedCode"
      :n-items="nItems"
      :expanded="expandThumbnails"
      :is-half-width="block.mediaGalleryStyle"
      :section-title="halfWidthTitle"
      :section-summary="halfWidthSummary"
      @toggle-thumbnails="toggleThumbnails"
    />

    <div
      v-if="expandThumbnails"
      class="thumbnails"
    >
      <FlexibleMediaGalleryThumbnailCard
        v-for="(item, index) in block.mediaGallery"
        :key="item.id"
        v-bind="item"
        @click="selectItem(index)"
      />
    </div>
  </section>
</template>

<style
  lang="scss"
  scoped
>
@import "@/styles/default/_media-gallery.scss";
@import "@/styles/ftva/_media-gallery.scss";
</style>
