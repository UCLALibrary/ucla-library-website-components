/*
Explanation:

URL input patterns:

From Video Embed: [https://www.youtube.com/embed/uYr_SvIKKuI?si=ihenbmyE91KqyXK5]

From Rich Text: ["//www.youtube.com/embed/RdAp0_iB7iU", "//www.youtube.com/embed/wYtQ3wH062c", ...]
*/

export default function formatYouTubeUrlsForOembed(urlArr) {
  const urlObjsArr = urlArr.map((url, index) => {
    // Remove extra characters after '?' in url, inclusive
    const firstParse = url.replace(/\?.*$/, '')

    // oEmbed only returns data with 'watch...' keyword
    const secondParse = firstParse.replace('embed/', 'watch?v=')

    return {
      initialURL: url,
      oEmbedURL: secondParse,
      videoTitle: `YouTube Video Player ${index}` // Fallback title
    }
  })

  return urlObjsArr
}
