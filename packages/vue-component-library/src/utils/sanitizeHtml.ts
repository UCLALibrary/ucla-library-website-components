import DOMPurify, { clearWindow } from 'isomorphic-dompurify'

const CLEAR_WINDOW_INTERVAL = 100
let sanitizeCallCount = 0

interface SanitizeConfig {
  ADD_ATTR?: string[]
  ADD_TAGS?: string[]
}

// always allow default tags like aria-hidden, but allow for additional tags and attributes to be added in the config
const DEFAULT_CONFIG: SanitizeConfig = {
  ADD_ATTR: ['aria-hidden', 'target', 'rel'],
}

// pre-made config for components that need to allow iframes, like the RichText component
const IFRAME_CONFIG: SanitizeConfig = {
  ADD_TAGS: ['iframe'],
  ADD_ATTR: [
    'allow',
    'allowfullscreen',
    'frameborder',
    'scrolling',
    'title',
  ],
}

export function sanitizeHtml(
  html: string,
  config: SanitizeConfig = {},
): string {
  try {
    return DOMPurify.sanitize(html, {
      ...DEFAULT_CONFIG,
      ...config,
      ADD_ATTR: [
        ...new Set([
          ...(DEFAULT_CONFIG.ADD_ATTR ?? []),
          ...(config.ADD_ATTR ?? []),
        ]),
      ],
      ADD_TAGS: [
        ...new Set([
          ...(DEFAULT_CONFIG.ADD_TAGS ?? []),
          ...(config.ADD_TAGS ?? []),
        ]),
      ],
    })
  }
  finally {
    if (typeof window === 'undefined') {
      sanitizeCallCount += 1
      if (sanitizeCallCount >= CLEAR_WINDOW_INTERVAL) {
        clearWindow()
        sanitizeCallCount = 0
        registerSecurityHook()
      }
    }
  }
}

function registerSecurityHook() {
  DOMPurify.addHook('afterSanitizeAttributes', (node) => {
    if (
      node.getAttribute('target') === '_blank'
    ) {
      // get existing rel values
      const rel = new Set(
        (node.getAttribute('rel') ?? '').split(/\s+/).filter(Boolean),
      )
      // add noopener and noreferrer to the rel attribute to prevent tabnabbing attacks
      rel.add('noopener')
      rel.add('noreferrer')

      node.setAttribute('rel', [...rel].join(' '))
    }
  })
}

registerSecurityHook()

export { IFRAME_CONFIG }
