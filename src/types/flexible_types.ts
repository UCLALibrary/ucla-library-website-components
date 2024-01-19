import type { MediaItemType } from '@/types/types'

interface FlexibleBlock {
  id: string
  typeHandle: string
}

export interface FlexibleCallToActionBlock extends FlexibleBlock {
  callToAction: FlexibleCallToActionItem[]
}

export interface FlexibleCallToActionItem {
  id: string
  titleCta: string
  summary: string
  icon: string
  buttonText: string
  buttonUrl: string
  backgroundColor: boolean
}

export interface FlexibleGridGalleryBlock extends FlexibleBlock {
  sectionSummary: string
  sectionTitle: string
  gridGalleryCards: FlexibleGridGalleryCard[]
}

export interface FlexibleGridGalleryCard {
  id: string
  featured: string | boolean
  contentLink: FlexibleGridGalleryContentLink[]
  titleGeneral: string
  snippet: string
  image: MediaItemType[]
  headlineText: string
  to: string
}

export interface FlexibleGridGalleryContentLink {
  contentType: string
  headlineText: string
  snippet: string
  to: string
  heroImage: { image: MediaItemType[] }[]
}
