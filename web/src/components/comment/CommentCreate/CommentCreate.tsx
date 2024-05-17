import { useState } from 'react'

import { Button, HStack } from '@chakra-ui/react'
import { useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'

import { Form, TextField } from '@redwoodjs/forms'
import { toast } from '@redwoodjs/web/dist/toast'

import { CommentCreateMutation } from 'src/components/__generated__/CommentCreateMutation.graphql'

const CREATE = graphql`
  mutation CommentCreateMutation(
    $input: CreateCommentInput!
    $connections: [ID!]!
  ) {
    createComment(input: $input)
      @appendNode(connections: $connections, edgeTypeName: "CommentEdge") {
      __typename
      ... on Comment {
        ...CommentItemFragment
        post {
          commentsCount
        }
      }
      ... on NotFoundError {
        message
      }
    }
  }
`

interface Props {
  postId: string
  connectionId: string
}

const CommentCreate = ({ postId, connectionId }: Props) => {
  const [create] = useMutation<CommentCreateMutation>(CREATE)
  const [content, setContent] = useState('')
  const onSubmit = (data) => {
    create({
      variables: {
        input: {
          content: data.content,
          postId,
        },
        connections: [connectionId],
      },
      onCompleted: () => {
        toast.success('댓글이 작성되었습니다.')
        setContent('')
      },
    })
  }
  return (
    <Form onSubmit={onSubmit} style={{ width: '100%', display: 'flex' }}>
      <HStack width="100%" justifyContent="flex-end">
        <TextField
          name="content"
          style={{
            backgroundColor: '#D3D7FC',
            borderRadius: '15px',
            flex: 1,
            height: '30px',
          }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button size="sm" type="submit" backgroundColor="#8f97f7">
          작성
        </Button>
      </HStack>
    </Form>
  )
}

export default CommentCreate
