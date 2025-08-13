/**
 * Format a number with commas for better readability
 * @param {number} num - The number to format
 * @returns {string} The formatted number with commas
 *
 * @example
 * formatNumber(21963) // "21,963"
 * formatNumber(1000000) // "1,000,000"
 * formatNumber(1234.56) // "1,234.56"
 */
export function formatNumber(num) {
    if (num === null || num === undefined || isNaN(num)) {
        return "0"
    }

    return num.toLocaleString("en-US")
}

// Add more utility functions for number formatting as needed
