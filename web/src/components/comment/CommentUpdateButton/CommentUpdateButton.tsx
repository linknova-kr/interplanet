import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'

import { Form, TextField } from '@redwoodjs/forms'
import { toast } from '@redwoodjs/web/toast'

import { CommentItemFragment$key } from 'src/components/__generated__/CommentItemFragment.graphql'
import { CommentUpdateButtonUpdateMutation } from 'src/components/__generated__/CommentUpdateButtonUpdateMutation.graphql'

interface Props {
  comment: CommentItemFragment$key[' $data']
}

const UPDATE = graphql`
  mutation CommentUpdateButtonUpdateMutation(
    $id: ID!
    $input: UpdateCommentInput!
  ) {
    updateComment(id: $id, input: $input) {
      __typename
      ... on Comment {
        id
        content
      }
      ... on NotFoundError {
        message
      }
    }
  }
`

const CommentUpdateButton = ({ comment }: Props) => {
  const [update] = useMutation<CommentUpdateButtonUpdateMutation>(UPDATE)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onSubmit = (data) => {
    update({
      variables: {
        id: comment.id,
        input: {
          content: data.content,
        },
      },
      onCompleted: () => {
        toast.success('수정되었습니다.')
        onClose()
      },
    })
  }
  return (
    <>
      <Button size="sm" backgroundColor="#D3D7FC" onClick={onOpen}>
        수정
      </Button>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <Form onSubmit={onSubmit}>
            <DrawerBody>
              <TextField
                name="content"
                defaultValue={comment.content}
                style={{
                  backgroundColor: 'transparent',
                  height: '30px',
                  width: '100%',
                }}
              />
            </DrawerBody>
            <DrawerFooter gap="8">
              <Button onClick={onClose}>취소</Button>
              <Button backgroundColor="#8f97f7" type="submit">
                수정하기
              </Button>
            </DrawerFooter>
          </Form>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default CommentUpdateButton
