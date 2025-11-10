import type { ButtonLinkRefactoredProps } from './buttonLink.types'

export enum BlockButtonsAlign {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export enum BlockButtonDirection {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

export interface BlockButtonsProps {
  buttons: ButtonLinkRefactoredProps[]
  align?: BlockButtonsAlign
  direction?: BlockButtonDirection
}
