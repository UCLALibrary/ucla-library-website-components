/*
Reference: LADI-5244, LADI-5311

Format YouTube embed urls for call to YouTube's oEmbed API in the `useOEmbedFetch` composable.

URL input patterns:

- From VideoEmbed: 
  - [ "https://www.youtube.com/embed/uYr_SvIKKuI?si=ihenbmyE91KqyXK5" ]
  - [ "https://www.youtube.com/embed/uYr_SvIKKuI" ]
  - [ "//www.youtube.com/embed/uYr_SvIKKuI" ]

- From RichText: [ "//www.youtube.com/embed/RdAp0_iB7iU", "//www.youtube.com/embed/wYtQ3wH062c", ... ]
*/

export function formatYouTubeUrlsForOembed(urlArr) {

  const urlObjsArr = urlArr.map((url, index) => {

    // Remove extra characters after '?' in url, inclusive
    const firstParse = url.replace(/\?.*$/, '')

    // Replace 'embed' keyword because oEmbed only returns data with 'watch...' keyword
    const secondParse = firstParse.replace('embed/', 'watch?v=')
    
    return {
      initialURL: url,
      oEmbedURL: secondParse,
      videoTitle: `YouTube Video Player ${index + 1}` // Fallback title
    }
  })

  return urlObjsArr
}


/*
Reference: LADI-5453

For VideoEmbed component, trailer data could potentially be entered into Craft as a plain YouTube link instead of embed code (iframe element). If this happens, browsers will not allow the video to display as an embed. This utility reformats YouTube urls to be embeddable.

Covers the following URL patterns:

- https://www.youtube.com/watch?v=DMCSduwSuoo&amp;index=68&amp;list=PLVTStOGUY_UfGKefP_CMnDZkn31Mwoxux

- https://www.youtube.com/watch?v=dQw4w9WgXcQ

- https://youtu.be/SwqdTlbGSkM
*/

export function formatYouTubeUrlForVideoEmbedding(url) {

  const youtubePattern = /(?:watch\?v=|youtu\.be\/)([\w-]{11})/

  const videoID = url.match(youtubePattern)?.[1] ?? ''

  if (!videoID) {
    return ''
  }

  const formattedURL = `https://www.youtube.com/embed/${videoID}`

  return formattedURL
}