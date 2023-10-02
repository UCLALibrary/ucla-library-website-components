function kebabCase(string) {
  const stringWithNoSpecialChars = string
    .replace('&', '')
    .replace(/\s+/g, ' ')
    .trim()
  return stringWithNoSpecialChars.toLowerCase().replace(/ /g, '-')
}
export default kebabCase
