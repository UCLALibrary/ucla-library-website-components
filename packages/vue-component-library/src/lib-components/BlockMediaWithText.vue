<script lang="ts" setup>
import { computed, defineAsyncComponent, ref } from 'vue'

import type { PropType } from 'vue'
import SvgIconHeadphones from 'ucla-library-design-tokens/assets/svgs/molecule-headphones.svg'
import type { MediaGalleryItemType, MediaItemType } from '@/types/types'

import { useTheme } from '@/composables/useTheme'

const props = defineProps({
  sectionHeader: {
    type: String,
    default: '',
  },
  shortDescription: {
    type: String,
    default: '',
  },
  buttonText: {
    type: String,
    default: '',
  },
  buttonUrl: {
    type: String,
    default: '',
  },
  embedCode: {
    type: String,
    default: '',
  },
  typeMedia: {
    type: String,
    default: '',
  },
  item: {
    type: Array as PropType<MediaItemType[]>,
    default: () => [],
  },
  coverImage: {
    type: Array as PropType<MediaItemType[]>,
    default: () => [],
  },
})

const theme = useTheme()

const classes = computed(() => {
  return ['media-with-text', theme?.value || '']
})

/* const SvgIconHeadphones = defineAsyncComponent(() =>
  import(
    'ucla-library-design-tokens/assets/svgs/molecule-headphones.svg'
  )) */
const SvgIconPlayFilled = defineAsyncComponent(() =>
  import(
    'ucla-library-design-tokens/assets/svgs/icon-play-filled.svg'
  ))
const SmartLink = defineAsyncComponent(() =>
  import('@/lib-components/SmartLink.vue'))
const ButtonLink = defineAsyncComponent(() =>
  import('@/lib-components/ButtonLink.vue'))
const MediaItem = defineAsyncComponent(() =>
  import('@/lib-components/Media/Item.vue'))
const NewLightbox = defineAsyncComponent(() =>
  import(
    '@/lib-components/Flexible/MediaGallery/NewLightbox.vue'
  ))

const showLightbox = ref(false)

const isAudio = computed(() => {
  return (
    props.typeMedia === 'audio'
    || (props.item && props.item[0] && props.item[0].kind === 'audio')
  )
})
const isVideo = computed(() => {
  return (
    props.typeMedia === 'video'
    || (props.item && props.item[0] && props.item[0].kind === 'video')
  )
})
const lightboxItems = computed<MediaGalleryItemType[]>(() => {
  return [
    {
      item: props.item,
      coverImage: props.coverImage,
      embedCode: props.embedCode,
      captionTitle: props.sectionHeader,
      captionText: props.shortDescription,
    },
  ]
})
const parsedIsDownload = computed(() => {
  return !!(props.buttonUrl && props.typeMedia === 'other')
})
</script>

<template>
  <div :class="classes">
    <div class="text-grouping">
      <h3
        class="section-header"
        v-html="sectionHeader"
      />
      <div class="meta-mobile">
        <!-- <smart-link
          v-if="mediaLink"
          :to="mediaLink"
          class="media-link"
        > -->
        <MediaItem
          v-if="item || coverImage"
          :item="item"
          :cover-image="coverImage"
          :cover-only="true"
          class="media-mobile"
          @click="showLightbox = true"
        />
        <!-- </smart-link> -->
        <div
          v-if="!(item || coverImage)"
          class="no-media-mobile"
        />
        <div class="clippy">
          <div
            v-if="isVideo || isAudio"
            class="floating-highlight-mobile"
          />
          <div
            v-if="isVideo || isAudio"
            class="clipped-play-mobile"
          />
          <SvgIconPlayFilled
            v-if="isVideo || isAudio"
            class="icon-play-filled-mobile"
          />
        </div>
        <SvgIconHeadphones
          v-if="isAudio"
          class="icon-headphones-mobile"
        />
      </div>
      <div
        v-if="shortDescription"
        class="short-description"
        v-html="shortDescription"
      />

      <ButtonLink
        v-if="buttonUrl && theme !== 'ftva'"
        class="button"
        :to="buttonUrl"
        :label="buttonText"
        :is-secondary="true"
        :is-download="parsedIsDownload"
      />
      <SmartLink
        v-else
        :to="buttonUrl"
        class="text-link"
      >
        {{ buttonText }}
      </SmartLink>
    </div>

    <MediaItem
      v-if="item || coverImage"
      :item="item"
      :cover-image="coverImage"
      :cover-only="true"
      class="meta media"
      @click="isAudio || isVideo ? showLightbox = true : showLightbox = false"
    >
      <div class="clippy">
        <div
          v-if="isVideo || isAudio"
          class="floating-highlight"
        />
        <div
          v-if="isVideo || isAudio"
          class="clipped-play"
        />
        <SvgIconPlayFilled
          v-if="isVideo || isAudio"
          class="icon-play-filled"
        />
      </div>
      <SvgIconHeadphones
        v-if="isAudio"
        class="icon-headphones"
      />
      <SvgIconHeadphones
        v-if="isAudio"
        class="icon-headphones"
      />
    </MediaItem>

    <div
      v-if="!(item || coverImage)"
      class="no-media"
    />
    <!--eslint-disable-->

    <NewLightbox
      v-if="showLightbox"
      :items="lightboxItems"
      @closeModal="showLightbox = false"
      @keydown.esc="showLightbox = false"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_block-media-with-text.scss";
@import "@/styles/ftva/_block-media-with-text.scss";
</style>
