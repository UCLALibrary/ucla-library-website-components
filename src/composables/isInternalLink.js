export function isInternalLink(uri = "") {
    let output = false

    if (
        uri == null ||
        String(uri).indexOf("/") === 0 ||
        (!uri.includes(".") && uri.length !== 0)
    ) {
        output = true
    }

    return output
}
