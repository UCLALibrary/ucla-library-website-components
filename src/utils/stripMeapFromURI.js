/**
 * Strip 'meap/' from the URI and handle leading slashes and HTTP/HTTPS protocols.
 * @param {string} uri
 * @returns {string}
 */
export default function stripMeapFromURI(uri = '') {
  if (uri === null)
    return uri // don't try string method .replace

  // Do not do anything if URI contains HTTP or HTTPS protocol
  if (uri.match(/^(http|https):\/\//))
    return uri

  // Add a leading slash if URI does not begin with one
  if (!uri.startsWith('/'))
    uri = `/${uri}`

  // Remove 'meap/' from the URI
  return uri.replace('meap/', '')
}
