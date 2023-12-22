<script setup>
import { computed, onMounted, ref, watch } from 'vue'

const props = defineProps({
  video: {
    type: Object,
    default: () => ({})
  },
  // image: {
  //   type: Object,
  //   default: () => ({}),
  // },
  height: {
    type: Number,
    default: 0,
  },
  width: {
    type: Number,
    default: 0,
  },
  src: {
    type: String,
    default: '',
  },
  poster: {
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
  alt: {
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
    default: 'cover',
  },
  mode: {
    type: String,
    default: 'intrinsic-ratio',
  },
  backgroundColor: {
    type: String,
    default: '',
  },
  loop: {
    type: Boolean,
    default: false,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  muted: {
    type: Boolean,
    default: true,
  },
  controls: {
    type: Boolean,
    default: false,
  },
  playsinline: {
    type: Boolean,
    default: true,
  },
  focalPoint: {
    type: Array,
    default: () => ([]),
  }
})

const emit = defineEmits(['ended', 'error', 'error-media', 'error-video', 'loaded', 'loaded-media', 'loaded-video', 'playing'])

const img = ref(null)
const videoRef = ref(null)

const loadedStatus = ref({
  booted: false,
})

const errorStatus = ref({
  image: false,
  video: false,
})

const hasError = computed(() => {
  return Object.values(errorStatus.value).includes(true)
})

const hasLoaded = computed(() => {
  // Check if all are true. To handle if we have a video and an image.
  return Object.values(loadedStatus.value).every(Boolean)
})

const parsedVideoUrl = computed(() => {
  return props.video.src
})

const parsedSrc = computed(() => {
  return props.src
})

const isSvg = computed(() => {
  return parsedSrc.value.includes('.svg')
})

const parsedColor = computed(() => {
  return props.backgroundColor
})

const parsedHeight = computed(() => {
  // default to defined height
  const height = props.video.height || props.height
  if (height)
    return Number.parseInt(height)

  return 'auto'
})

const parsedWidth = computed(() => {
  // default to defined width
  const width = props.video.width || props.width
  if (width)
    return Number.parseInt(width)

  return 'auto'
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
              { 'has-background-color': parsedColor.value },
              { 'has-error': hasError.value },
              { 'has-image-error': errorStatus.value.image },
              { 'has-video-error': errorStatus.value.video },
              `is-orientation-${orientation.value}`,
              `object-fit-${props.objectFit}`,
              { 'is-svg': isSvg.value },
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
  return {
    x: props.video.focalPoint[0],
    y: props.video.focalPoint[1],
  } || {
    x: props.focalPoint[0],
    y: props.focalPoint[1],
  }
})

const parsedAlt = computed(() => {
  return props.video.alt || props.alt
})

const sizerStyles = computed(() => {
  const styles = {}
  // Set padding for size
  if (props.mode === 'intrinsic-ratio')
    styles.paddingBottom = `${aspectPadding.value}%`

  return styles
})

const backgroundStyles = computed(() => {
  const styles = {}
  // Set background color
  if (parsedColor.value)
    styles.backgroundColor = `${parsedColor.value}`

  return styles
})

const mediaStyles = computed(() => {
  const styles = {}
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
    loadedStatus.value.video = false
    errorStatus.value.video = false
  }
})

// Update loaded state if new src set
watch(parsedSrc, (newVal) => {
  if (newVal) {
    loadedStatus.value.image = false
    errorStatus.value.image = false
  }
})

onMounted(() => {
  // Setup loaded state tracking
  if (parsedVideoUrl.value)
    loadedStatus.value.video = videoRef.value.readyState >= 3

  if (parsedSrc.value)
    loadedStatus.value.image = img.value.complete

  // Set the booted flag
  loadedStatus.value.booted = true
})

function onLoaded(type) {
  loadedStatus.value[type] = true

  emit('loaded', type)
  emit(`loaded-${type}`)
}

function onError(type) {
  errorStatus.value[type] = true

  emit('error', type)
  emit(`error-${type}`)
}

function onEnded(event) {
  emit('ended', event)
}

function onPlaying(event) {
  emit('playing', event)
}

// TODO: Verify purpose of these methods with TL
// function play() {
//   if (videoRef.value) {
//     // HTML5 video method
//     return videoRef.value.play()
//   }
// }

// function volume(amount = false) {
//   if (videoRef.value) {
//     // HTML5 video method
//     if (amount === false)
//       videoRef.value.volume = amount

//     return videoRef.value.volume
//   }
// }

// function pause() {
//   if (videoRef.value) {
//     // HTML5 video method
//     videoRef.value.pause()
//   }
// }

// function seekTo(seconds = 0) {
//   if (videoRef.value) {
//     // HTML5 video method
//     videoRef.value.currentTime = seconds
//   }
// }
</script>

<template>
  <figure :class="classes">
    <video
      v-if="parsedVideoUrl"
      ref="videoRef"
      class="media media-video"
      :src="parsedVideoUrl"
      :style="mediaStyles"
      :poster="poster"
      :loop="loop"
      :autoplay="autoplay"
      :muted="muted"
      :controls="controls"
      :playsinline="playsinline"
      :alt="parsedAlt"
      @loadeddata="onLoaded('video')"
      @error="onError('video')"
      @ended="onEnded"
      @playing="onPlaying"
    />

    <div class="sizer" :style="sizerStyles" />
    <div class="background-color" :style="backgroundStyles" />

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
