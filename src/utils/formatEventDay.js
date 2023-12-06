import format from 'date-fns/format'

/**
 * Take a date string, and return in human readable date format for Events
 *
 * @param {string} startDate
 * @returns {string}
 */

function formatDay(startDate = '') {
  return format(new Date(startDate), 'dd')
}

export default formatDay
