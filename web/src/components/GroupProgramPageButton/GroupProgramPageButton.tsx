import { useMutation } from 'react-relay'
import { ConnectionHandler, graphql } from 'relay-runtime'

import { Link, routes } from '@redwoodjs/router'
import { Toaster, toast } from '@redwoodjs/web/toast'

import { GroupProgramPageButtonCancelMutation } from '../__generated__/GroupProgramPageButtonCancelMutation.graphql'
import { GroupProgramPageQuery$data } from '../__generated__/GroupProgramPageQuery.graphql'

interface Props {
  groupProgram: GroupProgramPageQuery$data['groupProgram']
}

const CANCEL = graphql`
  mutation GroupProgramPageButtonCancelMutation(
    $input: CancelUserGroupProgramInput!
  ) {
    cancelUserGroupProgram(input: $input) {
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

  const onCancel = () => {
    cancel({
      variables: {
        input: {
          id: groupProgram.my.id,
        },
      },
      updater: (store, data) => {
        toast.success('취소되었습니다.')
        if (data.cancelUserGroupProgram.id != null) {
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
      {groupProgram.my ? (
        <>
          <button onClick={onCancel}>취소하기</button>
          <button>
            수정하기
            {/* todo */}
          </button>
        </>
      ) : (
        <Link to={routes.userGroupProgramCreate({ id: groupProgram.id })}>
          참가신청
        </Link>
      )}
    </>
  )
}

export default GroupProgramPageButton
