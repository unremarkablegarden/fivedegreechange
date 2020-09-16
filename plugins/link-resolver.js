// export default function(doc) {
//   return '/'
// }

/**
 * To learn more about Link Resolving check out the Prismic documentation
 */

export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'homepage') {
    return '/'
  }

  if (doc.type === 'post') {
    return '/blog/' + doc.uid
  }
  
  if (doc.type === 'page') {
    return '/page/' + doc.uid
  }

  return '/not-found'
}