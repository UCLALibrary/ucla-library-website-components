<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'

import SvgMoleculeImageStack from 'ucla-library-design-tokens/assets/svgs/molecule-image-stack.svg'
import SvgIconFtvaDropTriangle from 'ucla-library-design-tokens/assets/svgs/icon-ftva-drop-triangle.svg'
import MediaItem from '@/lib-components/Media/Item.vue'
import MediaBadge from '@/lib-components/MediaBadge.vue'
import RichText from '@/lib-components/RichText.vue'
import type { MediaItemType } from '@/types/types'

import { useTheme } from '@/composables/useTheme'

const props = defineProps({
  item: {
    type: Array as PropType<MediaItemType[]>,
    default: () => [],
  },
  coverImage: {
    type: Array as PropType<MediaItemType[]>,
    default: () => [],
  },
  embedCode: {
    type: String,
    default: '',
  },
  nItems: {
    type: Number,
    required: true,
  },
  expanded: {
    type: Boolean,
    required: true,
  },
  isHalfWidth: {
    type: String,
    default: '',
  },
  sectionTitle: {
    type: String,
    default: '',
  },
  sectionSummary: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['toggleThumbnails'])

const theme = useTheme()

const classes = computed(() => {
  return [
    'banner-image', theme?.value || '',
    props.isHalfWidth === 'halfWidth' ? 'half-width-media-item' : '',
  ]
})
</script>

<template>
  <div :class="classes">
    <MediaItem
      :item="item"
      :embed-code="embedCode"
      :cover-image="coverImage"
      :aspect-ratio="60"
      object-fit="cover"
      class="media-item"
      @click="emit('toggleThumbnails')"
    >
      <div v-if="nItems > 1 && !expanded">
        <div class="gradient" />
        <SvgMoleculeImageStack
          class="molecule-image-stack"
          aria-hidden="true"
        />
      </div>
      <MediaBadge v-if="nItems > 1" :is-expanded="expanded">
        <span v-if="theme">
          View all {{ nItems }} images
        </span>
        <span v-else>
          {{ nItems }}
          images
        </span>

        <!-- Toggle Icons -->
        <SvgIconFtvaDropTriangle v-if="theme" class="drop-triangle" />
        <svg v-else class="glyph-expand">
          <line
            x1="20%"
            y1="50%"
            x2="80%"
            y2="50%"
            stroke-width="1.5px"
          />
          <line
            v-if="!expanded"
            y1="20%"
            x1="50%"
            y2="80%"
            x2="50%"
            stroke-width="1.5px"
          />
        </svg>
      </MediaBadge>
    </MediaItem>

    <!-- Half-Width Gallery -->
    <div v-if="isHalfWidth" class="text-wrapper">
      <h3 v-if="sectionTitle" class="title" v-text="sectionTitle" />

      <RichText
        v-if="sectionSummary"
        class="summary"
        v-html="sectionSummary"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_media-gallery-banner-image.scss";
@import "@/styles/ftva/_media-gallery-banner-image.scss";
</style>
