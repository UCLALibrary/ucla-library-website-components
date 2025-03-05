export default function stripCraftURLFromText(text = '') {
  if (text == null)
    return text // don't try string method .replace

  if (text.includes('https://test-craft.library.ucla.edu'))
    return text.replaceAll('https://test-craft.library.ucla.edu', '')
  else if (text.includes('https://stage-craft.library.ucla.edu'))
    return text.replaceAll('https://stage-craft.library.ucla.edu', '')
  else return text.replaceAll('https://craft.library.ucla.edu', '')
}
