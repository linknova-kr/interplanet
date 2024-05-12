import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'

import { Redirect } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { PostPageQuery } from 'src/components/__generated__/PostPageQuery.graphql'
import PageTitle from 'src/components/common/PageTitle/PageTitle'
import DetailHead from 'src/components/common/DetailHead/DetailHead'
import { formatDateYMD } from 'src/util/date'

const QUERY = graphql`
  query PostPageQuery($id: ID!) {
    post(id: $id) {
      __typename
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
  if (data.post.__typename !== 'Post') {
    return <Redirect to="/not-found" />
  }
  return (
    <>
      <Metadata title="Post" description="Post page" />
      <PageTitle title={data.post.board.nameKr} />
      <DetailHead
        dateLabel={formatDateYMD(data.post.createdAt)}
        title={data.post.title}
        // todo: 작성자, 3dot 추가
      />
      {/* todo 게시글 상세 & 댓글 기능 */}
    </>
  )
}

export default PostPage
