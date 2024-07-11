import format from 'date-fns/format'

/**
 * Take two date strings, and return them in human readable date formats for Events
 *
 * @param {string} startDate
 * @param {string} endDate
 * @returns {string}
 */

function formatDates(startDate = '', endDate = '') {
  const start = format(new Date(startDate), 'MMMM d, Y')
  // console.log(start)
  const end = format(new Date(endDate), 'MMMM d, Y')

  // "February 11 2020 – May 31 2021"
  let output = `${start} - ${end}`

  if (start === end) {
    // Thursday, January 28
    output = format(new Date(startDate), 'MMMM d, Y')
  }

  if (!endDate) {
    // February 11 2020
    output = start
  }

  return output
}

export default formatDates
