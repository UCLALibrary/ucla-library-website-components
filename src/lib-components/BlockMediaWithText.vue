<script lang="ts" setup>
import { computed, defineAsyncComponent, ref } from 'vue'

// Helper functions

import type { PropType } from 'vue'
import SvgIconHeadphones from 'ucla-library-design-tokens/assets/svgs/molecule-headphones.svg'
import type { MediaGalleryItemType, MediaItemType } from '@/types/types'

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
/* const SvgIconHeadphones = defineAsyncComponent(() =>
  import(
    'ucla-library-design-tokens/assets/svgs/molecule-headphones.svg'
  )) */
const SvgIconPlayFilled = defineAsyncComponent(() =>
  import(
    'ucla-library-design-tokens/assets/svgs/icon-play-filled.svg'
  ))
// const SmartLink = defineAsyncComponent(() =>
// import('@/lib-components/SmartLink.vue'))
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
  <div class="media-with-text">
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
        v-if="buttonUrl"
        class="button"
        :to="buttonUrl"
        :label="buttonText"
        :is-secondary="true"
        :is-download="parsedIsDownload"
      />
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
.media-with-text {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  max-width: $container-l-main + px;
  // Themes
  --background-color: var(--color-theme, var(--color-white));

  &.color-grey {
    --background-color: var(--color-secondary-grey-02);
  }

  .text-grouping {
    margin-right: 50px;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: flex-start;
    align-items: flex-start;
  }

  .section-header {
    @include step-3;
    color: var(--color-primary-blue-03);
    margin-bottom: 24px;
  }

  .short-description {
    @include step-0;
    margin-bottom: 24px;
  }

  .meta {
    max-width: 500px;
    z-index: 0;
    position: relative;
  }

  .media {
    z-index: 0;
    position: relative;
    max-width: 100%;
    min-width: 426px;
    height: auto;
  }

  .no-media {
    z-index: 0;
    position: relative;
    width: 426px;
    height: 240px;
    background-color: var(--color-primary-blue-02);
  }

  .meta-mobile {
    display: none;
  }

  .clippy {
    z-index: 100;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .floating-highlight {
    z-index: 200;
    position: absolute;
    bottom: 8px;
    left: 5px;
    width: 112px;
    height: 72px;
    background-color: var(--color-visit-fushia-03);

    clip-path: polygon(0 0,
        calc(100% - 37px) 0,
        100% 75px,
        calc(100% - 1.5px) 75px,
        calc(100% - 38px) 1.5px,
        0 1.5px);
  }

  .clipped-play {
    bottom: 0;
    left: 0;
    z-index: 200;
    position: absolute;
    width: 112px;
    height: 72px;
    background-color: var(--background-color);

    clip-path: polygon(0 0,
        calc(100% - 38px) 0,
        100% 78px,
        calc(100% - 1.5px) 84px,
        0 84px,
        0 1.5px);
  }

  .svg__icon-play {
    fill: var(--color-primary-blue-03);
  }

  .icon-play-filled {
    z-index: 400;
    position: absolute;
    bottom: 16px;
    margin-left: 24px;
  }

  .icon-headphones {
    z-index: 400;
    position: absolute;
    left: 50%;
    margin-left: -40px;
    top: 50%;
    margin-top: -40px;
  }

  // Breakpoints

  @media #{$medium} {
    .media {
      width: calc(50% - 48px);
      height: auto;
      max-width: 100%;
      min-width: 296px;
    }

    .no-media {
      width: calc(50% - 48px);
      max-width: 100%;
      min-width: 296px;
    }
  }

  @media #{$small} {
    &.media-with-text {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-content: center;
      align-items: center;

      max-width: 100%;

      .text-grouping {
        max-width: 100%;
        margin-right: 0;
      }

      .meta {
        display: none;
      }

      .meta-mobile {
        display: block;

        display: block;
        width: 100%;
        height: auto;
        margin-bottom: 24px;
        z-index: 0;
        position: relative;
      }

      .media-mobile {
        width: 100%;
        height: auto;
        z-index: 10;
        position: relative;
      }

      .no-media-mobile {
        width: 100%;
        height: 200px;
        z-index: 10;
        position: relative;
        background-color: var(--color-primary-blue-02);
      }

      .floating-highlight-mobile {
        z-index: 200;
        position: absolute;
        bottom: 8px;
        left: 5px;
        width: 112px;
        height: 72px;
        background-color: var(--color-visit-fushia-03);

        clip-path: polygon(0 0,
            calc(100% - 37px) 0,
            100% 75px,
            calc(100% - 1.5px) 75px,
            calc(100% - 38px) 1.5px,
            0 1.5px);
      }

      .clipped-play-mobile {
        bottom: 0;
        left: 0;
        z-index: 200;
        position: absolute;
        width: 112px;
        height: 72px;
        background-color: var(--background-color);

        clip-path: polygon(0 0,
            calc(100% - 38px) 0,
            100% 78px,
            calc(100% - 1.5px) 84px,
            0 84px,
            0 1.5px);
      }

      .icon-play-filled-mobile {
        z-index: 400;
        position: absolute;
        bottom: 16px;
        margin-left: 24px;
      }

      .icon-headphones-mobile {
        z-index: 400;
        position: absolute;
        left: 50%;
        margin-left: -40px;
        top: 50%;
        margin-top: -40px;
      }

      .button {
        width: 100%;
        margin-left: 0;
      }
    }
  }
}
</style>
