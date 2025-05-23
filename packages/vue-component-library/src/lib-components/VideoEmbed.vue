<!-- The VideoEmbed component creates an iframe with a youtube video embed
 it has an optional custom posterImage and icon -->
<script lang='ts' setup>
import type { PropType } from 'vue'
import SvgIconPlayFilled from 'ucla-library-design-tokens/assets/svgs/icon-ftva-playvideo.svg'
import { computed, defineProps } from 'vue'
import type { MediaItemType } from '@/types/types'

const { trailer, posterImage } = defineProps({
  trailer: {
    type: String,
    required: true
  },
  posterImage: {
    type: Object as PropType<MediaItemType>,
    required: false
  }
})

// this component doesn't have themes currently
const classes = computed(() => {
  const src = posterImage?.src
  return ['video-embed', src ? 'has-poster' : 'no-poster']
})
// Updated trailer parsing to use a regex for safer and more reliable extraction of the `src` value.
// This handles cases where `trailer` may be undefined, null, or missing the expected `src="..."` pattern.
const parsedTrailer = computed(() => {
  if (!trailer || typeof trailer !== 'string')
    return ''

  const match = trailer.match(/src="([^"]+)"/)
  return match ? match[1] : ''
})
</script>

<template>
  <div
    v-if="trailer"
    :class="classes"
  >
    <div
      class="cover-container"
      onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"
    >
      <img
        v-if="posterImage?.src"
        :src="posterImage.src"
        class="cover"
      >
      <SvgIconPlayFilled class="play-button" />
    </div>

    <div
      v-if="parsedTrailer"
      class="video-container"
    >
      <iframe
        :src="parsedTrailer"
        title="YouTube video player"
        class="responsive-iframe"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        loading="lazy"
      />
    </div>
  </div>
</template>

<style lang='scss' scoped>
.video-embed {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;

  &.has-poster {
    .video-container {
      display: none;
    }
  }

  &.no-poster {
    .cover-container {
      display: none;
    }
  }

  .cover-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template: 1fr / 1fr;
    place-items: center;

    >* {
      grid-column: 1 / 1;
      grid-row: 1 / 1;
    }

    .cover {
      cursor: pointer;
      width: 100%;
      height: 100%;
      aspect-ratio: 16 / 9;
      object-fit: cover;
    }

    .play-button {
      width: 55px;
      height: 55px;
      z-index: 5;
      transition: all 250ms ease-in-out;
    }
  }

  .video-container,
  .responsive-iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>
