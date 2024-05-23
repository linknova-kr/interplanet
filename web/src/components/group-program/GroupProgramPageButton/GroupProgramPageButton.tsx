import { Button, Drawer, DrawerOverlay, useDisclosure } from '@chakra-ui/react'
import { useMutation } from 'react-relay'
import { ConnectionHandler, graphql } from 'relay-runtime'

import { toast, Toaster } from '@redwoodjs/web/toast'

import { GroupProgramPageButtonCancelMutation } from '../../__generated__/GroupProgramPageButtonCancelMutation.graphql'
import { GroupProgramPageQuery$data } from '../../__generated__/GroupProgramPageQuery.graphql'
import UserGroupProgramFormModal from '../UserGroupProgramFormModal/UserGroupProgramFormModal'

interface Props {
  groupProgram: {
    __typename: 'GroupProgram'
  } & GroupProgramPageQuery$data['groupProgram']
}

const CANCEL = graphql`
  mutation GroupProgramPageButtonCancelMutation(
    $input: CancelUserGroupProgramInput!
  ) {
    cancelUserGroupProgram(input: $input) {
      __typename
      ... on UserGroupProgram {
        id
        groupProgram {
          id
          my {
            id
          }
        }
      }
      ... on NotFoundError {
        message
      }
    }
  }
`

const GroupProgramPageButton = ({ groupProgram }: Props) => {
  const [cancel] = useMutation<GroupProgramPageButtonCancelMutation>(CANCEL)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onCancel = () => {
    cancel({
      variables: {
        input: {
          id: groupProgram.my.id,
        },
      },
      updater: (store, data) => {
        if (data.cancelUserGroupProgram.__typename === 'UserGroupProgram') {
          toast.success('취소되었습니다.')
          const connected = store.get(groupProgram.id)
          const connectionID = ConnectionHandler.getConnection(
            connected,
            'GroupProgram_userGroupPrograms'
          )
          ConnectionHandler.deleteNode(connectionID, groupProgram.my.id)
        }
      },
    })
  }
  return (
    <>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="bottom">
        <DrawerOverlay />
        <UserGroupProgramFormModal
          groupProgram={groupProgram}
          onDone={onClose}
          edit={groupProgram.my}
        />
      </Drawer>
      {groupProgram.my ? (
        groupProgram.type !== 'BOOK_DESIGNATED' && (
          <>
            <Button onClick={onCancel}>신청 취소하기</Button>
            <Button onClick={() => onOpen()}>신청 옵션 변경</Button>
          </>
        )
      ) : (
        <Button onClick={() => onOpen()}>참가 신청하기</Button>
      )}
    </>
  )
}

export default GroupProgramPageButton
