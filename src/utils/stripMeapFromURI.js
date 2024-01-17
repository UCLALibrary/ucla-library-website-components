export default function stripMeapFromURI(uri = '') {
  if (uri === null)
    return uri // don't try string method .replace

  return uri.replace('meap/', '')
}
