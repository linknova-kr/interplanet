import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'

import { PinnedPostsQuery } from '../../__generated__/PinnedPostsQuery.graphql'
import PostListItem from '../PostListItem/PostListItem'

const QUERY = graphql`
  query PinnedPostsQuery {
    posts(pinned: true) {
      edges {
        node {
          id
          ...PostListItemFragment
        }
      }
    }
  }
`

const PinnedPosts = () => {
  const data = useLazyLoadQuery<PinnedPostsQuery>(QUERY, {})
  return data.posts.edges.map(({ node }) => {
    return <PostListItem key={node.id} post={node} />
  })
}

export default PinnedPosts
