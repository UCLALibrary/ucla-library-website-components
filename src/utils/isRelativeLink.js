export default function isRelativeLink(uri = '') {
  let output = false

  switch (true) {
    case String(uri).indexOf('/') === 0:
      output = true
      break
  }

  return output
}
