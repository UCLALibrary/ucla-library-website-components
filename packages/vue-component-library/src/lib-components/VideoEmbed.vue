<!-- The VideoEmbed component creates an iframe with a youtube video embed; it has an optional custom posterImage and icon -->
<script lang="ts" setup>
import type { PropType } from 'vue'
import SvgIconPlayFilled from 'ucla-library-design-tokens/assets/svgs/icon-ftva-playvideo.svg'
import { computed, ref, watchEffect } from 'vue'
import type { MediaItemType } from '@/types/types'
import { useOEmbedFetch } from '@/composables/useOEmbedFetch'
import formatYouTubeUrlsForOembed from '@/utils/formatYouTubeUrlsForOembed'
import escapeHtml from '@/utils/escapeHtml'

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

const classes = computed(() => {
  const src = posterImage?.src
  return ['video-embed', src ? 'has-poster' : 'no-poster']
})

/*
Updated trailer parsing to use a regex for safer and more reliable extraction of the `src` value. This handles cases where `trailer` may be undefined, null, or missing the expected `src="..."` pattern.
*/
const parsedTrailer = computed(() => {
  if (!trailer || typeof trailer !== 'string')
    return ''

  const match = trailer.match(/src="([^"]+)"/)
  return match ? match[1] : ''
})

/*
Reference: LADI-5244

Craft injects a generic iframe title 'YouTube video player' into embedded video content that Chrome is unable to override. (Other browsers are able to pull and retain a video's original title.) This generic title becomes an accessibility issue when there are multiple embed videos on a page. To address this issue in Chrome, we use YouTube's oEmbed API to retrieve a video's title from its metadata and assign it to the iframe element's title attribute.
*/

const parsedIframeTitle = ref('')

if (parsedTrailer.value) {
  const urlObj = formatYouTubeUrlsForOembed([parsedTrailer.value])

  const { data } = useOEmbedFetch(urlObj)

  watchEffect(() => {
    if (!data.value)
      return

    const result = Array.isArray(data.value) ? data.value[0] : data.value

    const videoTitle = escapeHtml(result?.title)

    parsedIframeTitle.value = videoTitle ?? 'YouTube Video Player'
  })
}
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
        class="responsive-iframe"
        :title="parsedIframeTitle"
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
