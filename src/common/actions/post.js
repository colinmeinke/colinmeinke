/* globals fetch */

import { formatPosts } from '../helpers'
import { postList } from '../config/posts'

const UPDATE_POST = 'UPDATE_POST'

const getPost = ({ postSlug = '', rootUrl }) => new Promise((resolve, reject) => {
  fetch(`${rootUrl}/api/post/${postSlug}`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Post could not be found')
      }

      return response.text()
    })
    .then(content => {
      const matchingPosts = formatPosts(
        postList.filter(post => post.published && postSlug === post.slug)
      )

      if (matchingPosts.length !== 1) {
        throw new Error('Post could not be found')
      }

      resolve({
        post: {
          ...matchingPosts[ 0 ],
          content
        },
        type: UPDATE_POST
      })
    })
    .catch(reject)
})

export { UPDATE_POST, getPost }
