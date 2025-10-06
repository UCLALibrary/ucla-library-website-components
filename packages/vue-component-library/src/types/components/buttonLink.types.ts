export enum ButtonLinkVariants {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary",
    QUATERNARY = "quaternary",
}

export enum ButtonLinkIcons {
    NONE = "none",
    EXTERNAL_LINK = "external-link",
    ARROW_RIGHT = "arrow-right",
    DOWNLOAD = "download",
    CLOSE = "close",
}

export interface ButtonLinkRefactoredProps {
    to: string
    label: string
    iconName?: ButtonLinkIcons
    variant?: ButtonLinkVariants
    isDownload?: boolean
    linkTarget?: string
}
