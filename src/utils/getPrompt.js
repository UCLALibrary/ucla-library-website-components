/**
 * Take a contentType and figure out what should be the button prompt
 * @param {string} contentType
 * @returns {string}
 */

function getPrompt ( contentType = '' ) {
  let output = ''
  const lowerCaseContentType = contentType.toLowerCase()

  switch ( true ) {
    case lowerCaseContentType.includes( 'article' ):
      output = 'Read more'
      break

    case lowerCaseContentType.includes( 'project' ):
      output = 'View project'
      break

    case lowerCaseContentType.includes( 'event' ):
      output = 'View event'
      break
    case lowerCaseContentType.includes( 'exhibition' ):
      output = 'View exhibition'
      break
    case lowerCaseContentType.includes( 'collection' ):
      output = 'View collection'
      break
    case lowerCaseContentType.includes( 'impactreportstory' ):
      output = 'Read full story'
      break
  }

  return output
}

export default getPrompt
