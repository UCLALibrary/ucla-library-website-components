<script setup lang="ts">
import { computed, ref } from 'vue'

import type { PropType } from 'vue'
import type { MediaItemType } from '@/types/types'

const props = defineProps({
  media: {
    type: Object as PropType<MediaItemType>,
    default: () => {},
  },
  src: {
    type: String,
    default: '',
  },
  height: {
    type: Number,
    default: 0,
  },
  width: {
    type: Number,
    default: 0,
  },
  alt: {
    type: String,
    default: '',
  },
  srcset: {
    type: String,
    default: '',
  },
  sizes: {
    type: String,
    default: '',
  },
  caption: {
    type: String,
    default: '',
  },
  aspectRatio: {
    type: Number,
    default: 0,
  },
  objectFit: {
    type: String,
    default: '',
  }
})

const hasLoaded = ref(false)
const hasErrored = ref(false)

function onLoad() {
  hasLoaded.value = true
}

function onError() {
  hasErrored.value = true
}

const parsedFocalPoint = computed (() => {
  let objectPosition = ''
  if (props.media.focalPoint && props.media.focalPoint.length > 0) {
    const points = props.media.focalPoint.map((obj) => {
      return `${obj * 100}%`
    })
    objectPosition = `object-position:${points.join(' ')}`
  }
  return objectPosition
})

const parsedAspectRatio = computed (() => {
  const height = props.media.height || props.height
  const width = props.media.width || props.width
  return props.aspectRatio || (height / width) * 100
})

const styles = computed (() => {
  return {
    paddingBottom: `${parsedAspectRatio.value}%`,
  }
})

const classes = computed (() => {
  return [
    'responsive-image',
              `object-fit-${props.objectFit}`,
              { 'has-loaded': hasLoaded },
              { 'has-errored': hasErrored },
  ]
})
</script>

<template>
  <figure v-if="props.media && props.media.src" :class="classes">
    <img
      :src="props.media.src || props.src"
      :height="props.media.width || props.width"
      :width="props.media.height || props.height"
      :alt="props.media.alt || props.alt"
      :srcset="props.media.srcset || props.srcset"
      :sizes="props.media.sizes || props.sizes"
      :object-fit="props.objectFit" :style="parsedFocalPoint"
      class="media"
      @load="onLoad"
      @error="onError"
    >
    <figcaption
      v-if="props.media.caption || props.caption"
      class="caption"
      v-html="props.media.caption || props.caption"
    />
    <div class="sizer" :style="styles" />
    <slot />
    <div v-if="$slots.credit" class="credit">
      <slot name="credit" />
    </div>
  </figure>
</template>

<style lang="scss" scoped>
.responsive-image {
  position: relative;
  margin: 0;
  z-index: 0;
  // opacity: 0; // TODO add this back when we resolve why onload is not firing on craft images in netlify, works locally
  transition: opacity 400ms ease-in-out;
  .media {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      object-fit: cover;
  }
  .caption {
      display: none;
  }
  .sizer {
      width: 100%;
  }
  // Variants
  &.object-fit-cover {
      .media {
          object-fit: cover;
      }
  }
  &.object-fit-contain {
      .media {
          object-fit: contain;
      }
  }
  // State
  &.has-loaded {
      opacity: 1;
  }

  // Credit text slot
    .credit {
      position: absolute;
      font-family: var(--font-secondary);
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.64);
      color: #f1f1f1;
      padding: 4px 8px;
      font-size: 16px;
      // enforce 1 line, 50 char limit
      height: 32px;
      max-width: 385px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
}
</style>
