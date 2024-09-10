/**
 * Take a date string, and return in human readable date format for Events
 *
 * @param {string} startDate
 * @returns {string}
 */

function formatShortDay(startDate = '') {
  const shortday = new Date(startDate)
  return shortday.toLocaleDateString('en-us', { weekday: 'short' })
}

export default formatShortDay
