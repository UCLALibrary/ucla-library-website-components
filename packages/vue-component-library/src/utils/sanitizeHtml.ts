import DOMPurify from 'isomorphic-dompurify'

type SanitizeConfig = {
    ADD_ATTR?: string[]
    ADD_TAGS?: string[]
}

// always allow default tags like aria-hidden, but allow for additional tags and attributes to be added in the config
const DEFAULT_CONFIG: SanitizeConfig = {
    ADD_ATTR: ['aria-hidden'],
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

export { IFRAME_CONFIG }