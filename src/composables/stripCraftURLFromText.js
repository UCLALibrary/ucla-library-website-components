export function stripCraftURLFromText(text = "") {
    if (text == null) {
        return text // don't try string method .replace
    }
    if (text.indexOf("https://test-craft.library.ucla.edu") !== -1)
        return text.replaceAll("https://test-craft.library.ucla.edu", "")
    else if (text.indexOf("https://stage-craft.library.ucla.edu") !== -1)
        return text.replaceAll("https://stage-craft.library.ucla.edu", "")
    else return text.replaceAll("https://craft.library.ucla.edu", "")
}
