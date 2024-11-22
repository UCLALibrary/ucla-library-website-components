import format from 'date-fns/format'

/**
 * Take two date strings, and return them in human readable date formats for Events
 *
 * @param {string} startDate
 * @param {string} endDate
 * @param {string} dateFormat - 'long', 'short', or 'shortWithYear'
 * @returns {string}
 */

function formatDates(startDate = '', endDate = '', dateFormat = 'long') {
const formatDate = (date, formatType) => (date ? format(new Date(date), formatType) : '')

  const longFormat = 'MMMM d, Y'
  const shortFormat = 'MMM d'
  const shortWithYearFormat = 'MMM d, Y'

  const start = formatDate(startDate, longFormat)
  const end = endDate ? formatDate(endDate, longFormat) : ''

  // Handle the various scenarios
  if (!endDate || start === end) {
    switch (dateFormat) {
      case "long":
        return formatDate(startDate, longFormat) // Single date or no end date

      case "short":
        return formatDate(startDate, shortFormat) // Single date or no end date

      case "shortWithYear":
        return formatDate(startDate, shortWithYearFormat) // Single date or no end date
    }
  }


  if (dateFormat === 'short') {
    const shortStart = formatDate(startDate, shortFormat)
    const shortEnd = formatDate(endDate, shortFormat)
    return `${shortStart} - ${shortEnd}` // Short format
  }
  else if (dateFormat === 'shortWithYear') {
    const shortStart = formatDate(startDate, shortWithYearFormat)
    const shortEnd = formatDate(endDate, shortWithYearFormat)
    return `${shortStart} - ${shortEnd}` // Short format
  }

  return `${start} - ${end}` // Default long format
}

export default formatDates
