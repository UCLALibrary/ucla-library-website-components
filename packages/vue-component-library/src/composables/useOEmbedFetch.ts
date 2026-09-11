/*
Explanation:

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
