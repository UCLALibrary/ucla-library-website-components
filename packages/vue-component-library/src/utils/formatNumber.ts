/**
 * Format a number with commas for better readability
 * @param num - The number to format
 * @returns The formatted number with commas
 *
 * @example
 * formatNumber(21963) // "21,963"
 * formatNumber(1000000) // "1,000,000"
 * formatNumber(1234.56) // "1,234.56"
 */
export function formatNumber(num: number): string {
    if (typeof num !== "number" || Number.isNaN(num)) {
        return "0"
    }

    return num.toLocaleString("en-US")
}

// Add more utility functions for number formatting as needed
