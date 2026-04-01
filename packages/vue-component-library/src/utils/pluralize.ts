/**
 * Simple pluralization utility
 * @param count - The count to check
 * @param singular - The singular form of the word
 * @param plural - The plural form of the word (optional, defaults to singular + 's')
 * @returns The appropriate form based on count
 */
export function pluralize(
  count: number,
  singular: string,
  plural?: string
): string {
  if (count === 1)
    return singular

  return plural || `${singular}s`
}
