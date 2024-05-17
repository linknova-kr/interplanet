import { Button } from '@chakra-ui/react'
import { useLazyLoadQuery, useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'

import { Form } from '@redwoodjs/forms'
import { back, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/dist/toast'

import { PostUpdatePageQuery } from 'src/components/__generated__/PostUpdatePageQuery.graphql'
import { PostUpdatePageUpdateMutation } from 'src/components/__generated__/PostUpdatePageUpdateMutation.graphql'
import DetailHead from 'src/components/common/DetailHead/DetailHead'
import PageTitle from 'src/components/common/PageTitle/PageTitle'
import PostForm from 'src/components/post/PostForm/PostForm'
import ActionLayout from 'src/layouts/ActionLayout/ActionLayout'
import { formatDateYMD } from 'src/util/date'

const QUERY = graphql`
  query PostUpdatePageQuery($id: ID!) {
    post(id: $id) {
      __typename
      ... on NotFoundError {
        message
      }
      ... on Post {
        id
        title
        content
        isMine
        createdAt
        user {
          realName
          nickname
        }
        board {
          nameKr
        }
      }
    }
  }
`

const UPDATE = graphql`
  mutation PostUpdatePageUpdateMutation($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      __typename
      ... on Post {
        ...PostListItemFragment
      }
      ... on NotFoundError {
        message
      }
    }
  }
`

interface Props {
  id: string
}

const PostUpdatePage = ({ id }: Props) => {
  const data = useLazyLoadQuery<PostUpdatePageQuery>(QUERY, { id })
  const [doUpdate] = useMutation<PostUpdatePageUpdateMutation>(UPDATE)
  if (data.post.__typename !== 'Post' || data.post.isMine === false) {
    navigate(routes.boards(), { replace: true })
    return
  }

  const onSubmit = ({ title, content }) => {
    if (!title || !content) {
      toast.error('제목과 내용을 입력해주세요.')
      return
    }
    doUpdate({
      variables: {
        id,
        input: {
          title,
          content,
        },
      },
      onCompleted: (data) => {
        if (data.updatePost.__typename === 'Post') {
          navigate(routes.post({ id }), { replace: true })
        } else {
          toast.error('글을 수정할 수 없습니다.')
        }
      },
    })
  }

  return (
    <>
      <Metadata title="PostUpdate" description="PostUpdate page" />
      <PageTitle title={`${data.post.board.nameKr} 수정`} />
      <Toaster />
      <DetailHead
        label={`${formatDateYMD(data.post.createdAt)} ${
          data.post.user.realName
        }-${data.post.user.nickname}`}
        title={data.post.title}
      />
      <Form onSubmit={onSubmit} style={{ width: '100%' }}>
        <ActionLayout
          actions={
            <>
              <Button backgroundColor="#D3D7FC" type="submit">
                수정하기
              </Button>
              <Button backgroundColor="#D3D7FC" onClick={back}>
                취소하기
              </Button>
            </>
          }
        >
          <PostForm
            defaultValue={{
              title: data.post.title,
              content: data.post.content,
            }}
          />
        </ActionLayout>
      </Form>
    </>
  )
}

export default PostUpdatePage
