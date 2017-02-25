const formatDate = dateString => new Date(dateString)
  .toLocaleString(undefined, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

export { formatDate }
