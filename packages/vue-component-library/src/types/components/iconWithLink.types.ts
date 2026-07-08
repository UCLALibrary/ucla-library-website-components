export const ICON_NAME_OPTIONS = [
  'svg-icon-consultation',
  'svg-icon-list',
  'svg-icon-location',
  'svg-icon-phone',
  'svg-icon-search',
  'svg-icon-virtual',
  'svg-icon-headphones',
  'svg-icon-video',
  'svg-icon-image-stack',
  'svg-icon-money',
  'svg-icon-message',
  'svg-icon-play',
  'svg-icon-play-filled',
  'svg-icon-eye',
  'svg-icon-check',
  'svg-icon-email',
  'svg-icon-card',
  'svg-icon-calendar',
  'svg-icon-laptop',
  'svg-icon-book',
  'svg-icon-locker',
  'svg-icon-person',
  'svg-icon-accessible',
  'svg-icon-clock',
  'svg-icon-chair',
  'svg-icon-light',
  'svg-icon-location-filled',
  'svg-icon-alert',
  'svg-icon-share-email',
  'svg-icon-share-printer',
  'svg-icon-share-facebook',
  'svg-icon-share-instagram',
  'svg-icon-share-linkedin',
  'svg-icon-share-twitter',
  'svg-icon-share-whatsapp',
  'svg-icon-ftva-appleinc',
  'svg-icon-ftva-download',
  'svg-icon-ftva-email',
  'svg-icon-ftva-gcal',
  'svg-icon-ftva-hours',
  'svg-icon-ftva-location-outline',
  'svg-icon-ftva-outlook',
  'svg-icon-ftva-phone',
  'svg-icon-ftva-share',
  'svg-icon-ftva-social-confirm',
  'svg-icon-ftva-social-email',
  'svg-icon-ftva-social-facebook',
  'svg-icon-ftva-social-link',
  'svg-icon-ftva-social-x',
] as const

export type PermittedIconStrings = (typeof ICON_NAME_OPTIONS)[number]

export type LocationIconName = Extract<
  PermittedIconStrings,
  'svg-icon-virtual' | 'svg-icon-location'
>

export function getLocationIconName(title?: string): LocationIconName {
  return title === 'Online' ? 'svg-icon-virtual' : 'svg-icon-location'
}
