/*
Reference: LADI-5244, LADI-5311

To resolve accessibiity issues with YouTube iframes that have missing titles, we make calls to YouTube's oEmbed API to retrieve the embed video's title from its metadata.
*/

import { onMounted, ref } from 'vue'

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

  onMounted(async () => {
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
  })

  return { data, error }
}
