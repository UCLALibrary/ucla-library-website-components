/**
 * Simple pluralization utility
 * @param {number} count - The count to check
 * @param {string} singular - The singular form of the word
 * @param {string} plural - The plural form of the word (optional, defaults to singular + 's')
 * @returns {string} The appropriate form based on count
 */
export function pluralize(count, singular, plural = null) {
    if (count === 1) {
        return singular
    }
    return plural || `${singular}s`
}

/**
 * Pluralize with count included
 * @param {number} count - The count to check
 * @param {string} singular - The singular form of the word
 * @param {string} plural - The plural form of the word (optional, defaults to singular + 's')
 * @returns {string} The count with appropriate form (e.g., "1 result", "42 results")
 */
export function pluralizeWithCount(count, singular, plural = null) {
    return `${count} ${pluralize(count, singular, plural)}`
}
