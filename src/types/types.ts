// custom types

export interface DepartmentItemType {
  id?: string
  title: string
  to?: string
}

export interface EventItemType {
  image?: ImageItemType
  category: string
  title: string
  prompt: string
  startDate: string
  endDate: string
  to: string
  sectionHandle?: string
}

export interface ImageItemType {
  src: string
  srcset?: string
  sizes?: string
  alt: string
  title?: string
  caption?: string
  height?: number
  width?: number
  focalPoint?: number[]
}

export interface LocationItemType {
  id?: string
  title: string
  to?: string
}

export interface MastheadLinkItemType {
  text: string
  url: string
}

type customKind = 'image' | 'video' | 'audio'

export interface MediaItemType {
  id: string
  src: string
  srcset: string
  height: number
  width: number
  title: string
  focalPoint: number[]
  kind: customKind
  type: string
  alt: string
}

export interface MediaGalleryItemType {
  id?: string
  captionTitle?: string
  captionText?: string
  sortOrder?: number
  item: MediaItemType[]
  credit?: string
  linkUrl?: string
  linkText?: string
  coverImage: MediaItemType[]
  embedCode?: string
}

interface NavItem {
  id?: string
  name: string
  to?: string
  classes?: string
  target?: string
}

interface NavPrimaryBaseItem extends NavItem {
  children?: NavItem[]
}

export interface NavPrimaryItemType extends NavPrimaryBaseItem {
  url?: string
  isActive?: boolean
}

export interface NavSecondaryItemType extends NavItem {
  text?: string
}

export interface SectionSpaceListItemType {
  to: string
  title: string
  location: string
  text: string
  buttonUrl: string
  buttonText?: string
  isOnline?: boolean
}

export interface CardItemType {
  category?: string
  externalResourceUrl?: string
  iconName?: string
  id?: string
  slug?: string
  text: string
  title: string
  to: string
  type?: string
}
