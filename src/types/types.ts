// custom types
export interface AcademicDepartmentsItemType {
  id: string
  title: string
}

export interface AlternativeNameItemType {
  fullName: string
  languageAltName: string
}

export interface AmenitiesType {
  title: string
  icon: string
}

export interface ArticleStaffItemType {
  id: string
  title?: string
  to?: string
}

export interface AuthorsItemType {
  id: string
  slug: string
  to: string
  title: string
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
  locations?: LocationItemType[]
  bylineOne: string
  bylineTwo: string
  ongoing: boolean
}

export interface BlockImpactNumbersCarouselType {
  largeText: string
  mediumText: string
  smallDescriptor: string
  image: MediaItemType[]
  altImageText: string
}

export interface BlockStaffListItemType {
  to: string
  nameLast: string
  nameFirst: string
  jobTitle: string
  departments: DepartmentItemType[]
  email: string
  topics: TopicsItemType[]
  alternativeName?: string
  alternativeFullName?: string
  subjectArea?: string
  staffName?: string
  language?: string
  locations?: StaffLocationItemType[]
  phone?: string
  consultation?: string
  academicDepartments?: AcademicDepartmentsItemType[]
  uri: string
  image?: MediaItemType
  biography?: string
  orcid?: string
  publications?: string
  pronouns?: string
  slug: string
  sectionHandle: string
  subjectLibrarian: boolean
}

export interface BlockStaffArticleListItemType {
  image?: MediaItemType
  to?: string
  category?: string
  title?: string
  date?: string
  authors?: AuthorsItemType[]
  description?: string
  externalResourceUrl?: string
}

export interface StaffLocationItemType {
  id?: string
  image?: MediaItemType
  locationType?: string
  title?: string
  to?: string
  uri?: string
  affiliateLibraryUrl?: string
  address?: string
  addressLink?: string
  amenities?: AmenitiesType[]
  reserveSeat?: string
  isUclaLibrary?: boolean
  libcalLocationIdForHours?: string
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
  image: MediaItemType
  category: string
  title: string
  text?: string
  prompt?: string
  startDate: string
  endDate: string
  to: string
  sectionHandle?: string
  locations: LocationItemType[]
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
  title: string
  to: string
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

export interface SectionGenericListItemType {
  title?: string
  alternativeFullName?: string
  language?: string
  summary?: string // maps to 'text' prop in BlockGenericList component
  jobType?: { title?: string }[] // deprecated, data not displayed
  jobRequisitionNumber?: string
  jobPostingURL?: string
  department?: DepartmentItemType[] // maps to 'departments' prop in BlockGenericList component
  associatedLocations?: LocationItemType[]
  payRate?: string
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

export interface TopicsItemType {
  id: string
  title: string
}
