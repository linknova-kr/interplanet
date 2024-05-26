import { Button } from '@chakra-ui/react'
import { useMutation } from 'react-relay'
import { ConnectionHandler, graphql } from 'relay-runtime'

import { toast } from '@redwoodjs/web/dist/toast'

import { SpotEventListItemButtonsCancelMutation } from 'src/components/__generated__/SpotEventListItemButtonsCancelMutation.graphql'
import { SpotEventListItemButtonsDeregisterMutation } from 'src/components/__generated__/SpotEventListItemButtonsDeregisterMutation.graphql'
import { SpotEventListItemFragment$key } from 'src/components/__generated__/SpotEventListItemFragment.graphql'

interface Props {
  spotEvent: SpotEventListItemFragment$key[' $data']
  connectionId: string
}

const CANCEL = graphql`
  mutation SpotEventListItemButtonsCancelMutation(
    $input: CancelUserSpotEventInput!
  ) {
    cancelUserSpotEvent(input: $input) {
      __typename
      ... on UserSpotEvent {
        id
        spotEvent {
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

const DEREGISTER = graphql`
  mutation SpotEventListItemButtonsDeregisterMutation($id: ID!) {
    deregisterSpotEvent(id: $id) {
      __typename
      ... on SpotEvent {
        id @deleteRecord
      }
      ... on NotFoundError {
        message
      }
    }
  }
`

const SpotEventListItemButtons = ({ spotEvent, connectionId }: Props) => {
  const [cancel] = useMutation<SpotEventListItemButtonsCancelMutation>(CANCEL)
  const [deregister] =
    useMutation<SpotEventListItemButtonsDeregisterMutation>(DEREGISTER)

  const onCancel = () => {
    cancel({
      variables: {
        input: {
          id: spotEvent.my.id,
        },
      },
      updater: (store, { cancelUserSpotEvent }) => {
        if (cancelUserSpotEvent.__typename === 'UserSpotEvent') {
          const nodes = store.get(connectionId)
          ConnectionHandler.deleteNode(nodes, spotEvent.id)
          toast.success('취소가 완료되었습니다.')
        } else {
          toast.error('취소에 실패했습니다.')
        }
      },
    })
  }

  const onDeregister = () => {
    deregister({
      variables: {
        id: spotEvent.id,
      },
      onCompleted: ({ deregisterSpotEvent }) => {
        if (
          !deregisterSpotEvent ||
          deregisterSpotEvent.__typename === 'SpotEvent'
        ) {
          toast.success('개설취소되었습니다.')
        } else {
          toast.error('개설취소에 실패했습니다.')
        }
      },
    })
  }
  return (
    <>
      {spotEvent.iMade ? (
        <>
          <Button
            fontSize={12}
            padding={1}
            bg="#D3D7FC"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              console.log('UY')
            }}
          >
            수정
          </Button>
          <Button
            fontSize={12}
            padding={1}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onDeregister()
            }}
          >
            개설
            <br />
            취소
          </Button>
        </>
      ) : spotEvent.my ? (
        <Button
          fontSize={12}
          padding={1}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onCancel()
          }}
        >
          취소
        </Button>
      ) : null}
    </>
  )
}

export default SpotEventListItemButtons
