// Button component types
export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum ButtonColor {
  Default = 'default',
  Grey = 'grey',
}

export interface ButtonProps {
  text: string
  to?: string
  variant?: ButtonVariant
  type?: 'button' | 'submit' | 'reset'
  isOutlined?: boolean
  isDisabled?: boolean
  color?: ButtonColor
  linkTarget?: string
  isDownload?: boolean
}
