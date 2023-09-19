<script setup lang="ts">
import { computed, ref } from 'vue'
import type { PropType } from 'vue'

import FlexibleMediaGalleryBannerImage from '@/lib-components/Flexible/MediaGallery/BannerImage.vue'
import FlexibleMediaGalleryNewLightbox from '@/lib-components/Flexible/MediaGallery/NewLightbox.vue'
import FlexibleMediaGalleryThumbnailCard from '@/lib-components/Flexible/MediaGallery/ThumbnailCard.vue'

import type { FlexibleMediaGallery } from '@/types/flexible_types'

const { block } = defineProps({
  block: {
    type: Object as PropType<FlexibleMediaGallery>,
    required: true,
  }
})

const expandThumbnails = ref(false)
const selectionIndex = ref(0)
const showLightboxModal = ref(false)

const nItems = computed(() => {
  return block.mediaGallery.length
})

const halfWidthTitle = computed(() => {
  return block.mediaGalleryStyle === 'halfWidth'
    ? block.sectionTitle
    : ''
})

const halfWidthSummary = computed(() => {
  return block.mediaGalleryStyle === 'halfWidth'
    ? block.richTextSimplified
    : ''
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
  <!-- <section class="media-gallery"> -->
  <section
    v-if="block.mediaGallery && block.mediaGallery.length > 0"
    class="media-gallery"
  >
    <FlexibleMediaGalleryNewLightbox
      v-if="showLightboxModal"
      :items="block.mediaGallery"
      :selected-item="selectionIndex"
      tabindex="0"
      @close-modal="hideLightboxModal"
      @keydown.esc="hideLightboxModal"
    />

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

<style lang="scss" scoped>
.media-gallery {
  background-color: var(--color-theme, var(--color-white));

  .thumbnails {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(292px, 1fr));
    column-gap: var(--space-m);
    row-gap: var(--space-xl);
    padding-top: var(--space-xl);
    list-style-type: none;
  }
}
</style>
