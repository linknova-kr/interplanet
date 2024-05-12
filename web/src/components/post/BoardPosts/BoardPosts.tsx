import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'

import { BoardPostsQuery } from '../../__generated__/BoardPostsQuery.graphql'
import PostListItem from '../PostListItem/PostListItem'

const QUERY = graphql`
  query BoardPostsQuery($boardId: ID!) {
    posts(boardId: $boardId, pinned: false) {
      edges {
        node {
          id
          ...PostListItemFragment
        }
      }
    }
  }
`

interface Props {
  boardId: string
}

const BoardPosts = ({ boardId }: Props) => {
  const data = useLazyLoadQuery<BoardPostsQuery>(QUERY, { boardId })
  return (
    <>
      {data.posts.edges.map(({ node }) => {
        return <PostListItem key={node.id} post={node} />
      })}
    </>
  )
}

export default BoardPosts
