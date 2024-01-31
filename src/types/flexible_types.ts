import type { BlockCallToActionTwoUpType, MediaItemType } from '@/types/types'

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

interface FlexibleGridGalleryContentLink {
  contentType: string
  headlineText: string
  snippet: string
  to: string
  heroImage: { image: MediaItemType[] }[]
}

// Flexible Components

export interface FlexibleAssociatedTopicCards extends FlexibleBlock {
  associatedTopicsFlexiblePageBlock: AssociatedTopicsPage[]
}

export interface FlexibleCallToAction extends FlexibleBlock {
  callToAction: FlexibleCallToActionItem[]
}

export interface FlexibleCallToAction2Up extends FlexibleBlock {
  ctaBlock2Up: BlockCallToActionTwoUpType[]
}

export interface FlexibleGridGallery extends FlexibleBlock {
  gridGalleryCards: FlexibleGridGalleryCard[]
}
