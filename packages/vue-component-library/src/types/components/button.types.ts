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
  /**
   * If true, clicking the button will copy a URL to the clipboard instead of navigating/submitting.
   * The URL copied is resolved as: `copyUrl` || `to` || current window location.
   */
  copyOnClick?: boolean
  /**
   * Explicit URL to copy when `copyOnClick` is true. If not provided, falls back to `to`.
   */
  copyUrl?: string
}
