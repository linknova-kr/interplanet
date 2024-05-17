import styled from '@emotion/styled'
import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'

import { Redirect } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { PostPageQuery } from 'src/components/__generated__/PostPageQuery.graphql'
import Comments from 'src/components/comment/Comments/Comments'
import DetailHead from 'src/components/common/DetailHead/DetailHead'
import PageTitle from 'src/components/common/PageTitle/PageTitle'
import MyPostMoreMenus from 'src/components/post/MyPostMoreMenus/MyPostMoreMenus'
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
          realName
          nickname
        }
        commentsCount
        board {
          id
          nameKr
        }
      }
    }
    comments(postId: $id, first: 30) @connection(key: "PostPage_comments") {
      __id
      edges {
        node {
          id
          ...CommentItemFragment
        }
      }
    }
  }
`
const Content = styled.div`
  margin-top: 20px;
  min-height: 40vh;
`

interface Props {
  id: string
}

const PostPage = ({ id }: Props) => {
  const data = useLazyLoadQuery<PostPageQuery>(QUERY, { id })
  if (data.post?.__typename !== 'Post') {
    return <Redirect to="/not-found" />
  }
  return (
    <>
      <Metadata title="Post" description="Post page" />
      <PageTitle title={data.post.board.nameKr} />
      <DetailHead
        label={`${formatDateYMD(data.post.createdAt)} ${
          data.post.user.realName
        }-${data.post.user.nickname}`}
        title={data.post.title}
        action={data.post.isMine && <MyPostMoreMenus id={data.post.id} />}
      />
      <Content>{data.post.content}</Content>

      <Comments comments={data.comments} postId={id} />
    </>
  )
}

export default PostPage
