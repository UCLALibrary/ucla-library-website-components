<script setup lang="ts">
// UTILITY FUNCTIONS
import { computed, ref, watchEffect } from 'vue'
import stripCraftURLFromText from '@/utils/stripCraftURLFromText'
import accessibleExternalLinks from '@/utils/accessibleExternalLinks'

import { useTheme } from '@/composables/useTheme'
import { useOEmbedFetch } from '@/composables/useOEmbedFetch'
import formatYouTubeUrlsForOembed from '@/utils/formatYouTubeUrlsForOembed'

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

const content = stripCraftURLFromText(props.richTextContent)

/*
Reference: LADI 5311

Inline YouTube embeds may not always have title attribute; this causes accessibility errors. To resolve this, RichText content has to go through extra parsing for YouTube embeds. YouTube urls are retrieved to make a fetch call to the oEmbed api to retrieve video titles from metadata.
*/

interface UrlObj {
  initialURL: string
  oEmbedURL: string
  videoTitle: string
}

const youTubeEmbedArray = ref<UrlObj[]>([])

const iframeWithYouTubePattern = /<iframe\b[^>]*\bsrc=["']((?:https?:)?\/\/(?:www\.)?(?:youtube\.com|youtube-nocookie\.com)\/[^"']+)["'][^>]*><\/iframe>/gi

// Identify YouTube urls
const youtubeUrls = [...content.matchAll(iframeWithYouTubePattern)].map(match => match[1])

// If urls exist, format them for oEmbed and make the fetch call
if (youtubeUrls.length > 0) {
  const urlObjs = formatYouTubeUrlsForOembed(youtubeUrls)

  const { data } = useOEmbedFetch(urlObjs)

  watchEffect(() => {
    if (!data.value)
      return

    // Update url(s) with returned video title(s)
    const results = data?.value.map((item, index) => ({
      initialURL: urlObjs[index]?.initialURL ?? '',
      oEmbedURL: urlObjs[index]?.oEmbedURL ?? '',
      videoTitle: item.title ?? urlObjs[index]?.videoTitle ?? ''
    }))

    youTubeEmbedArray.value = results
  })
}

const parsedContent = computed(() => {
  // Find inline YouTube iframe(s) and add fetched video title(s)
  return accessibleExternalLinks(content.replace(
    iframeWithYouTubePattern,
    (iframeElement: string, url: string) => {
      const embed = youTubeEmbedArray.value.find(item => item.initialURL === url)

      if (!embed)
        return iframeElement

      return iframeElement.replace('<iframe', `<iframe title="${embed.videoTitle}"`)
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
