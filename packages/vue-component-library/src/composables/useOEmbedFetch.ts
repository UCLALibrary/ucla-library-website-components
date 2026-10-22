/*
Reference: LADI-5244, LADI-5311

To resolve accessibiity issues with YouTube iframes that have missing titles, we make calls to YouTube's oEmbed API to retrieve the embed video's title from its metadata.
*/

import { computed, ref } from 'vue'
import escapeHtml from '@/utils/escapeHtml'

interface OEmbedResponse {
  title?: string
}

interface YouTubeUrlObj {
  initialURL: string
  oEmbedURL: string
  videoTitle: string
}

export function useOEmbedFetch(urlObjs: YouTubeUrlObj[]) {
  const data = ref<OEmbedResponse[] | null>(null)
  const error = ref<Error | null>(null)

  const fetchOEmbed = async () => {
    try {
      data.value = await Promise.all(
        urlObjs.map(async (obj) => {
          const res = await fetch(`https://www.youtube.com/oembed?url=${obj.oEmbedURL}`)

          if (!res.ok)
            throw new Error('Error fetching oEmbed data.')

          return res.json()
        }),
      )
    }
    catch (err) {
      error.value = err instanceof Error ? err : new Error('Error fetching oEmbed data.')
    }
  }

  fetchOEmbed()

  const titles = computed(() => {
    if (!data.value || !data.value.length)
      return urlObjs.map(urlObj => urlObj.videoTitle)

    return urlObjs.map((urlObj, index) => {
      const oEmbedVideoTitle = data.value?.[index]?.title
      return oEmbedVideoTitle ? escapeHtml(oEmbedVideoTitle) : urlObj.videoTitle
    })
  })

  return { titles }
}
