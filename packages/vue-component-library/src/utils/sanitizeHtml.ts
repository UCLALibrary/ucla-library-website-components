import DOMPurify from 'isomorphic-dompurify'

type SanitizeOptions = Parameters<typeof DOMPurify.sanitize>[1]
// for documentation on options, see: https://github.com/cure53/DOMPurify/tree/main/demos#what-is-this

export function sanitizeHtml(value: string, options?: SanitizeOptions): string {
  if (!value)
    return ''

  return DOMPurify.sanitize(value, options)
}
