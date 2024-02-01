import type { BlockCallToActionTwoUpType, LocationItemType, MediaItemType } from '@/types/types'

// Reusable block declaration for Flexible Components

interface FlexibleBlock {
  id: string
  typeHandle: string
  sectionTitle: string
  sectionSummary: string
}

// Types used by Flexible Component declarations

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

interface ContentLink {
  contentType: string
  to: string
  heroImage: { image: MediaItemType[] }[]
}

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

interface FlexibleBannerContentLink extends ContentLink {
  title: string
  summary: string
  eventDescription: string
  projectCategory: string
  articleCategory: { title: string }[]
  projectByline1: Byline[]
  startDateWithTime: string
  endDateWithTime: string
  startDate: string
  endDate: string
  articleByline1: Byline[]
  articleByline2: string
  articleLocations: LocationItemType[]
  projectLocations: LocationItemType[]
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

interface FlexibleGridGalleryContentLink extends ContentLink {
  headlineText: string
  snippet: string
}

// Flexible Components

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

export interface FlexibleForm extends FlexibleBlock {
  form: string
}

export interface FlexibleGridGallery extends FlexibleBlock {
  gridGalleryCards: FlexibleGridGalleryCard[]
}
