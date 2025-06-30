/**
 * Filters an object's keys by including or excluding specified keys.
 *
 * @param obj - The source object to filter.
 * @param keys - The list of keys to include or exclude.
 * @param exclude - If `true` (default), excludes the given keys from the result.
 *                  If `false`, includes only the given keys in the result.
 * @returns A new object with the filtered key-value pairs.
 *
 * @example
 * const user = { name: 'Alice', age: 30, email: 'alice@example.com' };
 *
 * Exclude 'email':
 * filterAttributes(user, ['email']);
 * => { name: 'Alice', age: 30 }
 *
 * Include only 'email':
 * filterAttributes(user, ['email'], false);
 * => { email: 'alice@example.com' }
 */
export function filterAttributes(
    obj: Record<string, unknown>,
    keys: string[],
    exclude = true
): Record<string, unknown> {
    return Object.fromEntries(
        Object.entries(obj).filter(([key]) =>
            exclude ? !keys.includes(key) : keys.includes(key)
        )
    )
}
