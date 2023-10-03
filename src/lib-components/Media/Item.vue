<script lang="ts" setup>
import { computed } from 'vue'
import VideoJs from './VideoJs.vue'
import type { PropType } from 'vue'
import type { MediaItemType } from '@/types/types'

const props = defineProps({
  // the image / video / audio / embed
  item: { type: Array as PropType<MediaItemType[]>, default: () => [] },
  embedCode: { type: String, default: '' },
  coverImage: { type: Array as PropType<MediaItemType[]>, default: () => [] },
  coverOnly: { type: Boolean, default: false },
  // sizing for the container (not the media item itself)
  height: { type: Number, default: 0 },
  width: { type: Number, default: 0 },
  aspectRatio: { type: Number, default: 0 },
  // Layout options
  backgroundColor: { type: String, default: '' },
  focalPoint: { type: Array, default: () => [] },
  mode: { type: String, default: 'intrinsic-ratio' },
  objectFit: { type: String, default: 'contain' },
  // video options
  controls: { type: Boolean, default: true },
  autoplay: { type: Boolean, default: false },
  loop: { type: Boolean, default: false },
  muted: { type: Boolean, default: false },
  playsinline: { type: Boolean, default: true },
})

const isAudio = computed<boolean>(() => {
  return props.item[0] && props.item[0].kind === 'audio'
})
const isEmbed = computed<boolean>(() => {
  return !!(props.embedCode && props.embedCode.length)
})
const isImage = computed<boolean>(() => {
  return props.item[0] && props.item[0].kind === 'image'
})
const isVideo = computed<boolean>(() => {
  return props.item[0] && props.item[0].kind === 'video'
})
const coverImageSrc = computed<string>(() => {
  return props.coverImage[0] && props.coverImage[0].src
})
const mediaStyles = computed(() => {
  return [
    `objectFit: ${props.objectFit}`,
    `objectPosition:
        ${props.item[0]
    && props.item[0].focalPoint
    && props.item[0].focalPoint
      .map(obj => `${obj * 100}%`)
      .join(' ')}`,
  ]
})
const parsedAspectRatio = computed(() => {
  return (
    props.aspectRatio ||
    (props.height / props.width) * 100 ||
    (!props.coverOnly &&
      props.item[0] &&
      (props.item[0].height / props.item[0].width) * 100) ||
    (props.coverImage[0] &&
      props.coverImage[0].height / props.coverImage[0].width) *
    100 ||
    (9 / 16) * 100
  )
})
const sizerStyles = computed(() => {
  return [
    `paddingBottom: ${parsedAspectRatio.value}%`,
  ]
})
</script>

<template>
  <div class="media-item">
    {{ parsedAspectRatio }}
    <div v-if="isEmbed" class="media media-embed" v-html="embedCode" />
    <img v-else-if="isImage" class="media media-image" :style="mediaStyles" v-bind="item[0]">
    <img v-else-if="props.coverOnly" class="media media-image" :style="mediaStyles" v-bind="props.coverImage[0]">
    <VideoJs v-else-if="isVideo || isAudio" class="media media-video" :style="mediaStyles" :sources="props.item"
      :poster="coverImageSrc" :controls="props.controls" :autoplay="props.autoplay" :loop="props.loop"
      :muted="props.muted" :playsinline="props.playsinline" :audio-poster-mode="isAudio" />
    <p v-else class="media" style="background-color: white; padding: 10px" v-text="isAudio
      ? 'Audio uploads not supported yet'
      : 'Could not identify media type'
      " />
    <div class="sizer" :style="sizerStyles" />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.media-item {
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

    ::v-deep figure,
    ::v-deep iframe {
      width: 100%;
      height: 100%;
    }
  }

  .sizer {
    width: 100%;
  }
}
</style>
