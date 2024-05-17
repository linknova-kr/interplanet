import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Button,
  MenuItem,
  useDisclosure,
} from '@chakra-ui/react'
import { useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'

import { back } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/dist/toast'

import { MyPostDeleteButtonDeleteMutation } from 'src/components/__generated__/MyPostDeleteButtonDeleteMutation.graphql'

const DELETE = graphql`
  mutation MyPostDeleteButtonDeleteMutation($id: ID!) {
    deletePost(id: $id) {
      __typename
      ... on DeleteSuccess {
        id @deleteRecord
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

const MyPostDeleteButton = ({ id }: Props) => {
  const [doDelete] = useMutation<MyPostDeleteButtonDeleteMutation>(DELETE)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const ref = React.useRef()
  const onDelete = () => {
    doDelete({
      variables: { id },
      onCompleted: (data) => {
        if (data.deletePost == null) {
          toast.success('삭제되었습니다.')
          back()
        } else {
          toast.error('삭제할 수 없습니다.')
        }
      },
    })
  }
  return (
    <>
      <MenuItem color="black" onClick={onOpen}>
        삭제
      </MenuItem>
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

export default MyPostDeleteButton
