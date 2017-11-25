export const formatDate = {
  filters: {
    formatTime (value) {
      let hours = Math.floor(value / 3600)
      let minutes = Math.floor(value % 3600 / 60)
      let seconds = Math.floor(value % 3600 % 60)
      if (hours < 10) { hours = '0' + hours }
      if (minutes < 10) { minutes = '0' + minutes }
      if (seconds < 10) { seconds = '0' + seconds }
      return `${hours}:${minutes}:${seconds}`
    },
    formatDateTimeLocale (value, locale = 'de') {
      return new Date(parseInt(value)).toLocaleString(locale)
    }
  }
}
