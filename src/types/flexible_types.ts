import type { BlockCallToActionTwoUpType, LocationItemType, MediaGalleryItemType, MediaItemType } from '@/types/types'

// Section Title, Section Summary & typeHandle for Flexible Components

interface FlexibleBlock {
  id: string
  typeHandle: string
  sectionTitle: string
  sectionSummary: string
}

// Types used by Flexible Components

interface AssociatedTopics {
  to: string
  title: string
  text: string
  uri: string
  externalResourceUrl: string
}

interface AssociatedTopicsPage {
  id: string
  topics: AssociatedTopics[]
}

interface Byline {
  id: string
  title: string
  to: string
}

interface EventType {
  id: string
  title: string
}

// ContentLinks (Internal Pages)

interface FlexibleBannerContentLink {
  contentType: string
  title: string
  to: string
  summary: string
  articleByline2: string
  articleLocations: LocationItemType[]
  heroImage: { image: MediaItemType[] }[]
}

interface FlexibleCardWithImageContentLink {
  id: string
  contentType: string
  to: string
  title: string
  text: string
  eventDescription: string
  articleByline2: string
  startDateWithTime: string
  endDateWithTime: string
  eventType: EventType[]
  associatedLocations: LocationItemType[]
  heroImage: { image: MediaItemType[] }[]
}

// ExhibitionsAndCollectionsFpb
// ImpactReportFpb
// Collection Detail Page
// https://test-craft.library.ucla.edu/admin/entries/collection/41243-halloween-costumes

interface FlexibleGridGalleryContentLink {
  contentType: string
  headlineText: string
  snippet: string
  to: string
  heroImage: { image: MediaItemType[] }[]
}

interface FlexibleHighlightContentLink {
  // highlight - common
  id: string
  contentType: string
  to: string
  title: string
  // highlight - not common
  text: string
  summary: string
  articleByline2: string
  associatedLocations: LocationItemType[]
  articleCategory: { title: string }[]
  heroImage: { image: MediaItemType[] }[]
  eventDescription: string
  startDateWithTime: string
  endDateWithTime: string
  eventType: EventType[]
  ongoing: boolean
  startDate: string
  endDate: string
}

interface FlexibleSimpleCardContentLink {
  id: string
  uri: string
  slug: string
  title: string
  summary: string
  externalResourceUrl: string
}

// Flexible Components

interface FlexibleBannerContent {
  id: string
  contentLink: FlexibleBannerContentLink[]
  image: MediaItemType[]
  title: string
  summary: string
  alignment: string
  location: { title: string; to: string }
  byline1: string
  byline2: string
  to: string
  category: string
  contentType: string
  sectionHandle: string
}

interface FlexibleCallToActionItem {
  id: string
  titleCta: string
  summary: string
  icon: string
  buttonText: string
  buttonUrl: string
  backgroundColor: boolean
}

interface FlexibleGridGalleryCard {
  id: string
  featured: string | boolean
  contentLink: FlexibleGridGalleryContentLink[]
  titleGeneral: string
  snippet: string
  image: MediaItemType[]
  headlineText: string
  to: string
}

interface FlexibleHighlight {
  id: string
  typeHandle: string
  contentType: string
  contentLink: FlexibleHighlightContentLink[]
  title: string
  image: MediaItemType[]
  byline1: string
  byline2: string
  articleByline1: Byline[]
  articleByline2: string
  category: string
  startDate: string
  endDate: string
  ongoing: boolean
  locations: LocationItemType[]
  text: string
  to: string
}

interface FlexibleImpactNumberCard {
  id: string
  title: string
  text: string
  impactNumber: string
}

// ? FlexibleMediaWithText
type customTypeMedia = 'audio' | 'video' | 'other'

interface MediaWithText {
  titleLink: string
  titleUpload: string
  description: string
  src: string
  coverImage: MediaItemType[]
  buttonText: string
  buttonUrl: string
  embedCode: string
  typeMedia: customTypeMedia
  item: MediaItemType[]
}

interface FlexibleSimpleCard {
  id: string
  typehandle: string
  contentLink: FlexibleSimpleCardContentLink[]
  externalLink: string
  uri: string
  slug: string
  title: string
  summary: string
  externalResourceUrl: string
  // TODO - Add Event Title and Event Description
  // eventTitle: string
  // eventDescription: string
}

// Flexible Components with FlexibleBlock:
// sectionTitle, sectionSummary, typeHandle & id

export interface FlexibleAssociatedTopicCards extends FlexibleBlock {
  associatedTopicsFlexiblePageBlock: AssociatedTopicsPage[]
}

export interface FlexibleBannerFeatured extends FlexibleBlock {
  content: FlexibleBannerContent[]
}

export interface FlexibleCallToAction extends FlexibleBlock {
  callToAction: FlexibleCallToActionItem[]
}

export interface FlexibleCallToAction2Up extends FlexibleBlock {
  ctaBlock2Up: BlockCallToActionTwoUpType[]
}

// FlexibleHighlight contains everything needed for cadWithImage
export interface FlexibleCardWithImage extends FlexibleBlock {
  cardWithImage: FlexibleHighlight[]
}

export interface FlexibleForm extends FlexibleBlock {
  form: string
}

export interface FlexibleGridGallery extends FlexibleBlock {
  gridGalleryCards: FlexibleGridGalleryCard[]
}

export interface FlexibleHighlightBlock extends FlexibleBlock {
  highlight: FlexibleHighlight[]
}

export interface FlexibleImpactNumberCards extends FlexibleBlock {
  impactNumberCards: FlexibleImpactNumberCard[]
}

export interface FlexibleMediaGallery extends FlexibleBlock {
  mediaGalleryStyle: string
  mediaGallery: MediaGalleryItemType[]
  richTextSimplified: string
}

export interface FlexibleMediaWithText extends FlexibleBlock {
  mediaWithText: MediaWithText[]
}

export interface FlexiblePullQuote extends FlexibleBlock {
  pullQuote: {
    text: string
    attribution: string
  }[]
}

export interface FlexibleRichText extends FlexibleBlock {
  richText: string
}

export interface FlexibleSimpleCards extends FlexibleBlock {
  cards: FlexibleSimpleCard[]
}
