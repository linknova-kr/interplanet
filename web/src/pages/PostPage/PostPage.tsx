import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'

import { Link, Redirect, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { PostPageQuery } from 'src/components/__generated__/PostPageQuery.graphql'
import PageTitle from 'src/components/PageTitle/PageTitle'

const QUERY = graphql`
  query PostPageQuery($id: ID!) {
    post(id: $id) {
      ... on NotFoundError {
        message
      }
      ... on Post {
        id
        title
        content
        createdAt
        updatedAt
        isMine
        user {
          nickname
        }
        commentsCount
        board {
          id
          nameKr
        }
      }
    }
  }
`

interface Props {
  id: string
}

const PostPage = ({ id }: Props) => {
  const data = useLazyLoadQuery<PostPageQuery>(QUERY, { id })
  if (!data.post.id) {
    return <Redirect to="/not-found" />
  }
  return (
    <>
      <Metadata title="Post" description="Post page" />
      <PageTitle title={data.post.board.nameKr} />
      {/* todo 게시글 상세 & 댓글 기능 */}
    </>
  )
}

export default PostPage
