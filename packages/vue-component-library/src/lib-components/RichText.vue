<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'

import stripCraftURLFromText from '@/utils/stripCraftURLFromText'
import accessibleExternalLinks from '@/utils/accessibleExternalLinks'

import { useTheme } from '@/composables/useTheme'

import { useOEmbedFetch } from '@/composables/useOEmbedFetch'
import { formatYouTubeUrlsForOembed } from '@/utils/formatYouTubeUrls'

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

const content = computed(() => {
  return stripCraftURLFromText(props.richTextContent) ?? ''
})

/*
Reference: LADI-5311

Inline YouTube embeds may not always have title attribute; this can accessibility errors. To address this, RichText content has to go through extra parsing for YouTube embeds. YouTube urls are extracted and used in a fetch call to YouTube's oEmbed API to retrieve video titles from metadata.
*/

const youTubeEmbedArray = ref<string[]>([])

const iframeWithYouTubePattern = /<iframe\b[^>]*\bsrc=["']((?:https?:)?\/\/(?:www\.)?(?:youtube\.com|youtube-nocookie\.com)\/[^"']+)["'][^>]*><\/iframe>/gi

// Identify YouTube urls in rich text content
const youtubeUrls = computed(() =>
  [...content.value.matchAll(iframeWithYouTubePattern)]
    .map(match => match[1])
)

// If urls exist, format them for oEmbed; make fetch call to oEmbed
// TODO: Make this reactive
if (youtubeUrls.value.length > 0) {
  const urlObjs = formatYouTubeUrlsForOembed(youtubeUrls.value)

  const { titles } = useOEmbedFetch(urlObjs)

  watchEffect(() => {
    youTubeEmbedArray.value = titles.value
  })
}

const parsedContent = computed(() => {
  let index = 0

  return accessibleExternalLinks(
    content.value.replace(
      iframeWithYouTubePattern,
      (iframeElement: string) => {
        const title = youTubeEmbedArray.value[index++]

        return iframeElement.replace(
          '<iframe',
          `<iframe title="${title}"`
        )
      }
    )
  )
})
</script>

<template>
  <div :class="classes">
    <div
      class="parsed-content"
      v-html="parsedContent"
    />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/default/_rich-text.scss" as *;
@use "@/styles/ftva/_rich-text.scss" as *;
@use "@/styles/dlc/_rich-text.scss" as *;
</style>
