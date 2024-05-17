import { Button } from '@chakra-ui/react'
import { useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'

import { Form } from '@redwoodjs/forms'
import { back, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/dist/toast'

import { PostNewPageCreateMutation } from 'src/components/__generated__/PostNewPageCreateMutation.graphql'
import DetailHead from 'src/components/common/DetailHead/DetailHead'
import PageTitle from 'src/components/common/PageTitle/PageTitle'
import PostForm from 'src/components/post/PostForm/PostForm'
import ActionLayout from 'src/layouts/ActionLayout/ActionLayout'

interface Props {
  id: string
}

const CREATE = graphql`
  mutation PostNewPageCreateMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      __typename
      ... on Post {
        id
      }
      ... on NotFoundError {
        message
      }
    }
  }
`

const PostNewPage = ({ id }: Props) => {
  const [create] = useMutation<PostNewPageCreateMutation>(CREATE)
  const onSubmit = ({ title, content }) => {
    if (!title || !content) {
      toast.error('제목과 내용을 입력해주세요.')
      return
    }
    create({
      variables: {
        input: {
          title,
          content,
          boardId: id,
        },
      },
      onCompleted: (data) => {
        if (data.createPost.__typename === 'Post') {
          navigate(routes.post({ id: data.createPost.id }), { replace: true })
          // todo: post connection 에 추가
        } else {
          toast.error('글을 작성할 수 없습니다.')
        }
      },
    })
  }
  return (
    <>
      <Metadata title="PostNew" description="PostNew page" />
      <PageTitle title="글 작성" />
      <Toaster />
      <DetailHead label="" title="" />
      <Form onSubmit={onSubmit} style={{ width: '100%' }}>
        <ActionLayout
          actions={
            <>
              <Button backgroundColor="#D3D7FC" type="submit">
                작성하기
              </Button>
              <Button backgroundColor="#D3D7FC" onClick={back}>
                취소하기
              </Button>
            </>
          }
        >
          <PostForm />
        </ActionLayout>
      </Form>
    </>
  )
}

export default PostNewPage
