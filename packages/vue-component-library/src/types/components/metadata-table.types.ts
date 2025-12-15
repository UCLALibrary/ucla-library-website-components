import type { ButtonVariant } from './button.types'
import type { MediaItemType } from '@/index'

export interface MetadataTableProps {
  title: string
  items: Array<{
    label: string
    value:
    | { text: string; href?: string }
    | Array<{
      label: string
      variant?: ButtonVariant
      isOutlined?: boolean
      to?: string
      isDownload?: boolean
      copyOnClick?: boolean
    }>
    image?: MediaItemType
    showButtonIiif?: boolean
    buttonIiifTo?: string
  }>
}