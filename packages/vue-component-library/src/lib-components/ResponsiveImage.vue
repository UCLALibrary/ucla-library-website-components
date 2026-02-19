<script setup lang="ts">
import { computed, ref } from 'vue'
import MoleculePlaceholder from 'ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg'
import type {
  MediaItemType,
  ResponsiveImageType as ResponsiveImagepProps,
} from '@/types/types'

// Props
const props = withDefaults(defineProps<ResponsiveImagepProps>(), {
  media: () => ({} as MediaItemType),
  src: '',
  height: 0,
  width: 0,
  alt: '',
  srcset: '',
  sizes: '',
  caption: '',
  aspectRatio: 0,
  objectFit: '',
})

const hasLoaded = ref(false)
const hasErrored = ref(false)

function onLoad() {
  hasLoaded.value = true
}

function onError() {
  hasErrored.value = true
}

const parsedImage = computed(() => {
  if (props.media?.src && props.media.src !== '')
    return props.media.src
  if (props.src && props.src !== '')
    return props.src
  return null
})

const parsedFocalPoint = computed(() => {
  let objectPosition = ''
  if (props.media.focalPoint && props.media.focalPoint.length > 0) {
    const points = props.media.focalPoint.map((obj) => {
      return `${obj * 100}%`
    })
    objectPosition = `object-position:${points.join(' ')}`
  }
  return objectPosition
})

const parsedAspectRatio = computed(() => {
  const height = props.media?.height || props.height
  const width = props.media?.width || props.width
  return props.aspectRatio || (height / width) * 100
})

const styles = computed(() => {
  return {
    paddingBottom: `${parsedAspectRatio.value}%`,
  }
})

const classes = computed(() => {
  return [
    'responsive-image',
        `object-fit-${props.objectFit}`,
        { 'has-loaded': hasLoaded },
        { 'has-errored': hasErrored },
  ]
})
</script>

<template>
  <figure :class="classes">
    <img
      v-if="parsedImage"
      :src="props.media?.src || props.src"
      :alt="props.media?.alt || props.alt"
      :srcset="props.media?.srcset || props.srcset"
      :sizes="props.media?.sizes || props.sizes"
      :object-fit="props.objectFit"
      :style="parsedFocalPoint"
      class="media"
      @load="onLoad"
      @error="onError"
    >
    <div v-else class="molecule-no-image">
      <MoleculePlaceholder
        class="molecule"
        aria-hidden="true"
      />
    </div>

    <figcaption
      v-if="props.media?.caption || props.caption"
      class="caption"
      v-html="props.media?.caption || props.caption"
    />
    <div class="sizer" :style="styles" />
    <slot />
    <div v-if="$slots.toptext" class="toptext">
      <div class="image-top-text">
        <slot name="toptext" />
      </div>
    </div>
    <div v-if="$slots.credit" class="credit">
      <div class="credit-text">
        <slot name="credit" />
      </div>
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
    .media, .molecule-no-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        object-fit: cover;
    }
    .molecule-no-image {
      display: flex;
      align-items: center;
      overflow: clip;
      background: var(--gradient-01);
    }
    .molecule {
      flex-shrink: 0;
      opacity: 0.7;
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
        color: #f1f1f1;
        font-size: 16px;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        .credit-text {
            background-color: rgba(0, 0, 0, 0.64);
            padding: 4px 8px;
            // enforce 1 line, 50 char limit
            height: 32px;
            max-width: 385px;
            white-space: pre;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    .toptext {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        .image-top-text {
            padding: 16px 16px;
            :deep(svg.svg__icon-ftva-video) {
                margin: -10px; // remove extra space from edges of 'icon-ftva-video' icon specifically
            }
        }
    }
}
</style>
