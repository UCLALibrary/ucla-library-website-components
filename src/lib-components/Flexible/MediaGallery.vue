<script setup>
import { computed, ref } from 'vue'
import FlexibleMediaGalleryBannerImage from '@/lib-components/Flexible/MediaGallery/BannerImage.vue'
import FlexibleMediaGalleryNewLightbox from '@/lib-components/Flexible/MediaGallery/NewLightbox.vue'
import FlexibleMediaGalleryThumbnailCard from '@/lib-components/Flexible/MediaGallery/ThumbnailCard.vue'

const { block } = defineProps({
  block: {
    type: Object,
    required: true,
  }
})

const expandThumbnails = ref(false)
const selectionIndex = ref(1)
const showLightboxModal = ref(false)

// const expand_toggle_text = computed(() => {
//   return `${props.block.mediaGallery.length} images ${
//             expandThumbnails.value ? '-' : '+'
//           }`
// })

// const glyphExpandClass = computed(() => {
//   return [
//     'glyph-expand',
//     isExpanded ? 'glyph-expand-minus' : 'glyph-expand-plus',
//   ]
// })

// const glyphExpandSVGContent = computed(() => {
//   // eslint-disable-next-line no-constant-condition
//   return `<line x1="0%" y1="50%" x2="100%" y2="50%" stroke="black" />${expandThumbnails.value}`
//     ? ''
//     : '<line x1="0" y1="80" x2="100" y2="20" stroke="black" />'
// })

const nItems = computed(() => {
  return block.mediaGallery.length
})

// const plusMinusIcon = computed(() => {
//   // These are the "fullwidth" unicode plus (U+FF0B) & minus (U+FF0D)
//   return expandThumbnails.value ? '－' : '＋'
// })

// const getMediaGalleryStyle = computed(() => {
//   // return this.block.mediaGallery.mediaGalleryStyle == "halfWidth"
//   return !!block.mediaGallery
// })

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

// function clickNext() {
//   if (selectionIndex.value + 1 < nItems.value)
//     selectionIndex.value += 1
// }

// function clickPrev() {
//   if (selectionIndex.value > 0)
//     selectionIndex.value -= 1
// }

function selectItem(itemIndex) {
  selectionIndex.value = itemIndex
  showLightboxModal.value = true
}
</script>

<template>
  <section class="media-gallery">
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

    <div v-if="expandThumbnails" class="thumbnails">
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
