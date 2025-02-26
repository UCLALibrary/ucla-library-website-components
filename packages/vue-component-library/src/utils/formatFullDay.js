/**
 * Take a date string, and return in human readable date format for Events
 *
 * @param {string} startDate
 * @returns {string}
 */

function formatFullDay(startDate = '') {
  const fullday = new Date(startDate)
  return fullday.toLocaleDateString('en-us', { weekday: 'long' })
}

export default formatFullDay
