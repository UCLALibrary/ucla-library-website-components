export enum SearchResultsCountVariants {
  VERTICAL = 'primary',
  HORIZONTAL = 'secondary'
}

export interface SearchResultsCountProps {
  count: number
  label: string
  prefix: string
  animate?: boolean
  variant?: SearchResultsCountVariants
  suffixLabel?: string
}
