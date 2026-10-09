<!-- The VideoEmbed component creates an iframe with a YouTube video embed; it has an optional custom posterImage and icon. It has a default aspect ratio of 16:9, which can be changed with the aspectRatio prop (set as a percentage value). -->

<script lang="ts" setup>
import type { PropType } from 'vue'
import SvgIconPlayFilled from 'ucla-library-design-tokens/assets/svgs/icon-ftva-playvideo.svg'
import { computed, onMounted, ref } from 'vue'
import type { MediaItemType } from '@/types/types'
import { useOEmbedFetch } from '@/composables/useOEmbedFetch'
import formatYouTubeUrlsForOembed from '@/utils/formatYouTubeUrlsForOembed'

const { aspectRatio, posterImage, trailer } = defineProps({
  aspectRatio: {
    type: Number,
    default: 56.25, // 16:9
    required: true
  },
  posterImage: {
    type: Object as PropType<MediaItemType>,
    required: false,
  },
  trailer: {
    type: String,
    required: true,
  }
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

YouTube embed code contains generic iframe title 'YouTube video player' that Chrome does not override. (Other browsers are able to pull and retain a video's original title.) This generic title becomes an accessibility issue when there are multiple embed videos on a page. To address this issue in Chrome, we use YouTube's oEmbed API to retrieve a video's title from its metadata and assign it to the iframe element's title attribute.
*/

const urlObj = formatYouTubeUrlsForOembed([parsedTrailer.value])

const { titles } = useOEmbedFetch(urlObj)

const parsedIframeTitle = computed(() => titles.value[0])

const trailerContainerRef = ref()
const coverContainerRef = ref()

function setAspectRatio() {
  const trailerContainer = trailerContainerRef.value
  trailerContainer.style.setProperty('--aspect-ratio', `${aspectRatio}%`)

  const coverContainer = coverContainerRef.value
  coverContainer.style.setProperty('--aspect-ratio', `${aspectRatio}%`)
}

onMounted(() => {
  setAspectRatio()
})
</script>

<template>
  <div v-if="trailer" :class="classes">
    <div
      ref="coverContainerRef"
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

    <div v-if="parsedTrailer" ref="trailerContainerRef" class="video-container">
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
        position: relative;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template: 1fr / 1fr;
        place-items: center;
        padding-top: var(--aspect-ratio); // Set by aspect-ratio prop

        .cover {
          position: absolute;
          cursor: pointer;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .play-button {
          position: absolute;
          width: 55px;
          height: 55px;
          z-index: 5;
          transition: all 250ms ease-in-out;
        }
    }

    .video-container {
      padding-top: var(--aspect-ratio); // Set by aspect-ratio prop
    }

    .responsive-iframe {
      position: absolute;
      width: 100%;
      height: 100%;
      top:0;
      left: 0;
    }
}
</style>
