<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'
import type { PropType } from 'vue'
import type { MediaItemType } from '@/types/types'

const props = defineProps({
  media: {
    type: Object as PropType<MediaItemType>,
    default: () => ({})
  },
  mode: {
    type: String,
    default: 'intrinsic-ratio',
  },
  aspectRatio: {
    type: Number,
    default: 0,
  },
  objectFit: {
    type: String,
    default: 'cover',
  },
  playsinline: {
    type: Boolean,
    default: true,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  loop: {
    type: Boolean,
    default: false,
  },
  muted: {
    type: Boolean,
    default: true,
  },
  controls: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(['ended', 'error', 'error-image', 'error-video', 'loaded', 'loaded-image', 'loaded-video', 'playing'])

const videoRef = ref<HTMLMediaElement | null> (null)

const loadedStatus = reactive({
  video: false,
})

const errorStatus = ref({
  video: false,
})

const hasError = computed(() => {
  return Object.values(errorStatus.value).includes(true)
})

const hasLoaded = computed(() => {
  // Check if all are true. To handle if we have a video.
  return Object.values(loadedStatus).every(Boolean)
})

const parsedVideoUrl = computed(() => {
  return props.media.src
})

const parsedHeight = computed(() => {
  // default to defined height
  const height = props.media.height
  if (height && typeof height === 'string')
    return Number.parseInt(height)

  return height!
})

const parsedWidth = computed(() => {
  // default to defined width
  const width = props.media.width
  if (width && typeof width === 'string')
    return Number.parseInt(width)

  return width!
})

const orientation = computed(() => {
  let output = 'landscape'
  switch (true) {
    case parsedHeight.value > parsedWidth.value:
      output = 'portrait'
      break
    case parsedHeight.value === parsedWidth.value:
      output = 'square'
      break
  }

  return output
})

const classes = computed(() => {
  return [
    'responsive-video',
    `mode-${props.mode}`,
    { 'has-loaded': hasLoaded.value },
    { 'has-error': hasError.value },
    { 'has-video-error': errorStatus.value.video },
              `is-orientation-${orientation.value}`,
              `object-fit-${props.objectFit}`,
  ]
})

const aspectPadding = computed(() => {
  let output
              = props.aspectRatio || (parsedHeight.value / parsedWidth.value) * 100
  if (!output)
    output = 0

  return output
})

const parsedFocalPoint = computed(() => {
  if (props.media.focalPoint!.length > 0) {
    return {
      x: props.media.focalPoint![0],
      y: props.media.focalPoint![1],
    }
  }
  else {
    return {
      x: '0.5',
      y: '0.5'
    }
  }
})

const parsedAlt = computed(() => {
  return props.media.alt
})

const sizerStyles = computed(() => {
  const styles: Record<string, any> = {}
  // Set padding for size
  if (props.mode === 'intrinsic-ratio')
    styles.paddingBottom = `${aspectPadding.value}%`

  return styles
})

const mediaStyles = computed(() => {
  const styles: Record<string, any> = {}
  if (
    parsedFocalPoint.value.x !== ''
              && parsedFocalPoint.value.y !== ''
  )
    styles.objectPosition = `${parsedFocalPoint.value.x}% ${parsedFocalPoint.value.y}%`

  return styles
})

// Update loaded state if new src set
watch(parsedVideoUrl, (newVal) => {
  if (newVal) {
    loadedStatus.video = false
    errorStatus.value.video = false
  }
})

onMounted(() => {
  // Setup loaded state tracking
  if (parsedVideoUrl.value)
    loadedStatus.video = videoRef.value!.readyState >= 3
})

function onLoaded(type: 'video') {
  loadedStatus[type] = true
  emit('loaded', type)
  emit(`loaded-${type}`)
}

function onError(type: 'video') {
  errorStatus.value[type] = true
  emit('error', type)
  emit(`error-${type}`)
}

function onEnded(event: Event) {
  emit('ended', event)
}

function onPlaying() {
  emit('playing')
}
</script>

<template>
  <figure :class="classes">
    <video
      v-if="parsedVideoUrl"
      ref="videoRef"
      class="media media-video"
      :src="parsedVideoUrl"
      :alt="parsedAlt"
      :style="mediaStyles"
      :controls="controls"
      :autoplay="autoplay"
      :muted="muted"
      :loop="loop"
      :playsinline="playsinline"
      @loadeddata="onLoaded('video')"
      @error="onError('video')"
      @ended="onEnded"
      @playing="onPlaying"
    />

    <div class="sizer" :style="sizerStyles" />
    <div class="background-color" />

    <slot />
  </figure>
</template>

<style lang="scss" scoped>
.responsive-video {
  margin: 0;
  width: 100%;
  .sizer {
      position: relative;
      z-index: 0;
  }
  .background-color {
      opacity: 0.1;
      z-index: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
  }
  .media {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity 0.4s ease-in-out;
      z-index: 10;
  }
  .media-video {
      z-index: 20;
  }
  .caption {
      display: none;
  }
  // Modes
  &.mode-intrinsic-ratio {
      position: relative;
  }
  &.mode-cover,
  &.mode-fullbleed {
      position: relative;
      .sizer {
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          position: absolute;
      }
  }
  // Object fit modes
  &.object-fit-cover .media {
      object-fit: cover;
      object-position: left center;
  }
  &.object-fit-contain .media {
      object-fit: contain;
  }
  // Loaded state
  &.has-loaded .media {
      opacity: 1;
  }
  // SVG overides as we won't have a height/width for intrinsic ratio.
  &.is-svg {
      .media {
          object-fit: contain;
          position: relative;
          height: auto;
          width: 100%;
      }
  }
  // Error state (only show the media that is working)
  &.has-error {
      .media {
          opacity: 1;
      }
      &.has-image-error .media-image {
          opacity: 0;
      }
      &.has-video-error .media-video {
          opacity: 0;
      }
  }
}
</style>
