export function accessibleExternalLinks(text = '') {
  if (text == null)
    return text // don't try string method .replace

  const regex = /<a\s+(?:[^>]*?\s+)?target=(["_blank'])(.*?)\1*>(.*?)<\/a>/g

  return text.replace(regex, (match) => {
    const xmatch = match.replace('</a>', '')
    return (
      `${xmatch
             }<span class="visually-hidden">(opens in a new tab)</span></a>`
    )
  })
}
