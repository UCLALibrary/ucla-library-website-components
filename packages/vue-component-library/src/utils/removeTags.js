/**
 * Takes a String and removes HTML tags and double quotes
 * @param {string}
 * @returns {string}
 */

function removeTags(str) {
  if (str) {
    const stripHtml = str.replace(/(<([^>]+)>)/ig, '')
    const removeBreaks = stripHtml.replace(/[\n]/g, '')
    const removeQuotes = removeBreaks.replace(/"/ig, '')
    return removeQuotes
  }
  else {
    return ''
  }
}

export default removeTags
