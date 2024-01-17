import type { MediaItemType } from '@/types/types'

export interface FlexibleGridGalleryItem {
  id: string
  sectionSummary: string
  sectionTitle: string
  subtitle: string
  summary: string
  gridGalleryCards: FlexibleGridGalleryCard[]
  typeHandle: string
}

export interface FlexibleGridGalleryCard {
  id: string
  featured: string | boolean
  contentLink?: FlexibleGridGalleryContentLink[]
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
