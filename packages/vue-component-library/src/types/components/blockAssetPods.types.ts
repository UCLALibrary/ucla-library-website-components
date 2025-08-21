import type { MediaItemType } from '@/types/types'

export interface MetadataItem {
  readonly key: string // termKey like "Resource type"
  readonly value: string // text
  readonly to?: string // url (optional)
}

export interface BlockAssetPodProps {
  readonly media: MediaItemType
  readonly to: string
  readonly title: string
  readonly metadata?: readonly MetadataItem[]
}
