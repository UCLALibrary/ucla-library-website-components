<script setup lang="ts">
import { computed, ref } from 'vue'

import type { PropType } from 'vue'
import type { ImageItemType } from '@/types/types'

const props = defineProps({
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
  },
  image: {
    type: Object as PropType<ImageItemType>,
    default: () => {},
  },
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
  if (props.image.focalPoint && props.image.focalPoint.length > 0) {
    const points = props.image.focalPoint.map((obj) => {
      return `${obj * 100}%`
    })
    objectPosition = `object-position:${points.join(' ')}`
  }
  return objectPosition
})

const parsedAspectRatio = computed (() => {
  const height = props.image.height || props.height
  const width = props.image.width || props.width
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
  <figure v-if="props.image && props.image.src" :class="classes">
    <img
      :src="props.image.src || props.src"
      :height="props.image.width || props.width"
      :width="props.image.height || props.height"
      :alt="props.image.alt || props.alt"
      :srcset="props.image.srcset || props.srcset"
      :sizes="props.image.sizes || props.sizes"
      :object-fit="props.objectFit"
      :style="parsedFocalPoint"
      class="media"
      @load="onLoad"
      @error="onError"
    >
    <figcaption
      v-if="props.image.caption || props.caption"
      class="caption"
      v-html="props.image.caption || props.caption"
    />
    <div class="sizer" :style="styles" />
    <slot />
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
}
</style>
