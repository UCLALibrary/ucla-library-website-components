import isInternalLink from '@/utils/isInternalLink'

const NEW_TAB = ['1', '_blank', 'blank']
const UNSPECIFIED = ['', null]

export default function formatLinkTarget(string = '', url = '') {
  let output = ''

  if (
    NEW_TAB.includes(string)
    || (UNSPECIFIED.includes(string) && !isInternalLink(url))
  )
    output = '_blank'
  else
    output = ''

  return output
}
