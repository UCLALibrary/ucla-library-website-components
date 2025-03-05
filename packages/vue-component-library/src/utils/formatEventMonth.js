import format from 'date-fns/format'

/**
 * Take a date string, and return in human readable date format for Events
 *
 * @param {string} startDate
 * @returns {string}
 */

function formatMonth(startDate = '') {
  return format(new Date(startDate), 'MMM')
}

export default formatMonth
