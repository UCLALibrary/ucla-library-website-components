<!-- The VideoEmbed component creates an iframe with a youtube video embed
 it has an optional custom posterImage and icon -->
<script lang="ts" setup>
import type { PropType } from 'vue'
import SvgIconPlayFilled from 'ucla-library-design-tokens/assets/svgs/icon-ftva-playvideo.svg'
import { computed, defineProps, ref, onMounted } from 'vue'
import type { MediaItemType } from '@/types/types'

const { trailer, posterImage } = defineProps({
  trailer: {
    type: String,
    required: true,
  },
  posterImage: {
    type: Object as PropType<MediaItemType>,
    required: false,
  },
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

/**
 * Convert embed URL → watch URL (needed for oEmbed)
 */
const videoUrl = computed(() => {
  if (!parsedTrailer.value) return ''

  // YouTube
  if (parsedTrailer.value.includes('youtube.com/embed/')) {
    const id = parsedTrailer.value.split('/embed/')[1]?.split('?')[0]
    return `https://www.youtube.com/watch?v=${id}`
  }

  // Vimeo
  if (parsedTrailer.value.includes('vimeo.com/video/')) {
    const id = parsedTrailer.value.split('/video/')[1]?.split('?')[0]
    return `https://vimeo.com/${id}`
  }

  return ''
})

/**
 * oEmbed title fetch
 */
const oembedTitle = ref('')

onMounted(async () => {
  if (!videoUrl.value) return

  try {
    let endpoint = ''

    if (videoUrl.value.includes('youtube.com')) {
      endpoint = `https://www.youtube.com/oembed?url=${encodeURIComponent(videoUrl.value)}&format=json`
    } else if (videoUrl.value.includes('vimeo.com')) {
      endpoint = `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(videoUrl.value)}`
    }

    if (!endpoint) return

    const res = await fetch(endpoint)
    const data = await res.json()

    oembedTitle.value = data.title || ''
  } catch (e) {
    // fail silently
  }
})

/**
 * Final safe title (fixes Chrome)
 */
const iframeTitle = computed(() => {
  return oembedTitle.value || 'Embedded video player'
})
</script>

<template>
  <div v-if="trailer" :class="classes">
    <div
      class="cover-container"
      onclick="this.nextElementSibling.style.display='block'; this.style.display='none'"
    >
      <img
        v-if="posterImage?.src"
        :src="posterImage.src"
        :alt="posterImage.alt || ''"
        :srcset="posterImage.srcset || ''"
        :sizes="posterImage.sizes || ''"
        class="cover"
      >
      <SvgIconPlayFilled class="play-button" />
    </div>

    <div v-if="parsedTrailer" class="video-container">
      <iframe
        :src="parsedTrailer"
        :title="iframeTitle"
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

<style lang="scss" scoped>
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

        > * {
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
