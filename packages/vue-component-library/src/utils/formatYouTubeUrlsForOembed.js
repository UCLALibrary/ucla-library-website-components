/*
Reference: LADI-5244, LADI-5311

Format YouTube embed urls for use in call to YouTube's oEmbed API.

URL input patterns:

- From VideoEmbed: [ https://www.youtube.com/embed/uYr_SvIKKuI?si=ihenbmyE91KqyXK5 ]

- From RichText: [ "//www.youtube.com/embed/RdAp0_iB7iU", "//www.youtube.com/embed/wYtQ3wH062c", ... ]
*/

export default function formatYouTubeUrlsForOembed(urlArr) {
  const urlObjsArr = urlArr.map((url, index) => {
    // Remove extra characters after '?' in url, inclusive
    const firstParse = url.replace(/\?.*$/, '')

    // Replace 'embed' keyword because oEmbed only returns data with 'watch...' keyword
    const secondParse = firstParse.replace('embed/', 'watch?v=')

    return {
      initialURL: url,
      oEmbedURL: secondParse,
      videoTitle: `YouTube Video Player ${index}` // Fallback title
    }
  })

  return urlObjsArr
}
