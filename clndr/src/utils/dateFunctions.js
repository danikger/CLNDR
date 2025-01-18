/**
 * Checks if a year is a leap year
 * 
 * @param {number} year - Year to check
 */
export function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

/**
 * Gets the day number of the year (1-366)
 * 
 * @param { Date } date - Day of the year (1-366)
 * @returns {number} - Day of the year (1-366)
 */
export function getDayOfYear(date = new Date()) {
  const startOfYear = new Date(date.getFullYear(), 0, 1); // January 1st
  const diffInMilliseconds = date - startOfYear;
  return Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24)) + 1;
}

/**
 * Converts a day number to a formatted date string
 * 
 * @param {number} dayOfYear - Day of the year (1-366)
 * @param {number} year - Year to use
 * @returns {string} Formatted date string (e.g. "Monday, Jan 1")
 */
export function getDateFromDay(dayOfYear, year = new Date().getFullYear()) {
  // Create a new date object and setDate to the selected day of the year
  const date = new Date(year, 0, 1);
  date.setDate(dayOfYear);

  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  });
}