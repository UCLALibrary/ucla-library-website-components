import type { MediaItemType } from "@/types/types"

export interface LinkItem {
    readonly to: string
    readonly text: string
}

export interface BlockAssetPodProps {
    readonly title: string
    readonly to: string
    readonly image: MediaItemType
    readonly date?: string
    readonly description?: string
    readonly resourceType?: readonly LinkItem[]
    readonly collection?: readonly LinkItem[]
}
