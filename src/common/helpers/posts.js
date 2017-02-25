import { formatDate } from '.'

const formatPosts = posts => posts.map(({ datePublished, ...post }) => ({
  ...post,
  datePublished: formatDate(datePublished)
}))

export { formatPosts }
