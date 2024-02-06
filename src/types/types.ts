// custom types

export interface ArticleStaffItemType {
  title?: string
  to?: string
}

export interface BlockCallToActionTwoUpType {
  svgName: string
  title: string
  text: string
  name: string
  to: string
  isDark: boolean
  isSmallSize: boolean
}

export interface BlockCardMetaType {
  to: string
  category: string
  title: string
  alternativeFullName: string
  language: string
  text: string
  locations: LocationItemType[]
  bylineOne: string
  bylineTwo: string
  ongoing: boolean
}

export interface BylineProjectItemType {
  title?: string
}

export interface BylineItemType {
  articleStaff?: ArticleStaffItemType[]
  articlePostDate?: string
  project?: BylineProjectItemType[]
  length?: number
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

export interface DepartmentItemType {
  id?: string
  title: string
  to?: string
}

export interface EventItemType {
  image?: MediaItemType
  category: string
  title: string
  text?: string
  prompt?: string
  startDate: string
  endDate: string
  to: string
  sectionHandle?: string
  locations?: LocationItemType[]
  ongoing?: boolean
}

export interface GridGalleryItemType {
  image?: MediaItemType
  monthYear?: string
  to?: string
  headlineText?: string
  snippet?: string
  featured?: boolean
}

export interface MediaItemType {
  alt?: string
  caption?: string
  focalPoint?: number[]
  height?: number
  id?: string
  kind?: customKind
  poster?: string
  sizes?: string
  src?: string
  srcset?: string
  title?: string
  type?: string
  width?: number
}

export interface LocationItemType {
  id?: string
  title?: string
  to?: string
}

export interface SearchLinkItemType {
  text: string
  url: string
  blank?: string
}

type customKind = 'image' | 'video' | 'audio'

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

export interface SubjectAreaItemType {
  title: string
}

export interface StylesItemType {
  paddingBottom?: string
  backgroundColor?: string
  objectPosition?: string
}
