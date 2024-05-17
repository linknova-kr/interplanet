import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'

import { toast } from '@redwoodjs/web/toast'

import { CommentDeleteButtonDeleteMutation } from 'src/components/__generated__/CommentDeleteButtonDeleteMutation.graphql'

const DELETE = graphql`
  mutation CommentDeleteButtonDeleteMutation($id: ID!) {
    deleteComment(id: $id) {
      __typename
      ... on CommentDeleteSuccess {
        id @deleteRecord
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
  id: string
}

const CommentDeleteButton = ({ id }: Props) => {
  const [doDelete] = useMutation<CommentDeleteButtonDeleteMutation>(DELETE)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const ref = React.useRef()

  const onDelete = () => {
    doDelete({
      variables: {
        id,
      },
      onCompleted: () => {
        toast.success('삭제되었습니다.')
        onClose()
      },
    })
  }

  return (
    <>
      <Button size="sm" onClick={onOpen}>
        삭제
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={ref}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogBody>정말 삭제하시겠습니까?</AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={ref} onClick={onClose}>
                취소
              </Button>
              <Button colorScheme="red" onClick={onDelete} ml={3}>
                삭제
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default CommentDeleteButton
