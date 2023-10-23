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

type customKind = 'image' | 'video' | 'audio'
