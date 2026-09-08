<script setup lang="ts">
// UTILITY FUNCTIONS
import { computed, onMounted, ref } from 'vue'
import stripCraftURLFromText from '@/utils/stripCraftURLFromText'
import accessibleExternalLinks from '@/utils/accessibleExternalLinks'

import { useTheme } from '@/composables/useTheme'

const props = defineProps({
  richTextContent: {
    type: String,
    default: '',
  },
})

const theme = useTheme()

const classes = computed(() => {
  return ['rich-text', theme?.value || '']
})

/*
Reference: LADI 5311

Inline YouTube embeds sometimes are missing their title attribute; this causes SiteImprove / A11Y errors. To resolve this, YouTube video titles have to be retrieved with the oEmbed api, and RichText content has to go through extra parsing for YouTube embeds.
*/

const youTubeEmbedArray = ref<{
  initialURL: string
  oEmbedURL: string
  videoTitle: string
}[]>([])

const iframeWithYouTubePattern = /<iframe\b[^>]*\bsrc=["']((?:https?:)?\/\/(?:www\.)?(?:youtube\.com|youtube-nocookie\.com)\/[^"']+)["'][^>]*><\/iframe>/gi

// Call to oEmbed
onMounted(async () => {
  const content = stripCraftURLFromText(props.richTextContent)

  const youtubeUrls = [...content.matchAll(iframeWithYouTubePattern)].map(match => match[1])

  if (youtubeUrls.length > 0) {
    youTubeEmbedArray.value = youtubeUrls.map((item, index) => {
      const urlForOembedFetch = item.replace('embed/', 'watch?v=')
      return {
        initialURL: item,
        oEmbedURL: urlForOembedFetch,
        videoTitle: `YouTube Video Player ${index}` // Fallback title
      }
    })
  }

  if (youTubeEmbedArray.value.length > 0) {
    const data = await Promise.all(
      youTubeEmbedArray.value.map(async (urlObj) => {
        const url = `https://www.youtube.com/oembed?url=${urlObj.oEmbedURL}`
        const response = await fetch(url)
        if (!response.ok)
          throw new Error(`Failed: ${url}`)
        return response.json()
      }),
    )

    youTubeEmbedArray.value = youTubeEmbedArray.value.map((obj, index) => ({
      ...obj,
      videoTitle: data[index]?.title || obj.videoTitle,
    }))
  }
})

const parsedContent = computed(() => {
  const content = stripCraftURLFromText(props.richTextContent)

  // Find inline YouTube iframe(s) and add fetched video title(s)
  return accessibleExternalLinks(content.replace(
    iframeWithYouTubePattern,
    (iframe: string, url: string) => {
      const embed = youTubeEmbedArray.value.find(item => item.initialURL === url)

      if (!embed)
        return iframe

      return iframe.replace('<iframe', `<iframe title="${embed.videoTitle}"`)
    },
  ))
})
</script>

<template>
  <div :class="classes">
    <div class="parsed-content" v-html="parsedContent" />
    <slot />
  </div>
</template>

<style
    lang="scss"
    scoped
>
@use "@/styles/default/_rich-text.scss" as *;
@use "@/styles/ftva/_rich-text.scss" as *;
@use "@/styles/dlc/_rich-text.scss" as *;
</style>
