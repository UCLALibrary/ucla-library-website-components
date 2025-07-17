export enum BlockButtonsAlign {
    Left = "left",
    Center = "center",
    Right = "right",
}

export enum BlockButtonDirection {
    Horizontal = "horizontal",
    Vertical = "vertical",
}

export type BlockButtonsProps = {
    // TODO: here we should define buttons as an array of ButtonLinkProps
    buttons: {
        to: string
        label: string
    }[]
    align: BlockButtonsAlign
    direction: BlockButtonDirection
}
