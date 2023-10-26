// custom types

export interface DepartmentItemType {
  id?: string
  title: string
  to?: string
}

export interface LocationItemType {
  id?: string
  title: string
  to?: string
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
export interface SimpleCardItemType {
  id?: string
  text: string
  title: string
  slug?: string
  to: string
  type?: string
  externalResourceUrl?: string
}
