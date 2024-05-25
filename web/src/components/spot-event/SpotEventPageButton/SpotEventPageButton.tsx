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
import { ConnectionHandler, graphql } from 'relay-runtime'

import { Form, TextField } from '@redwoodjs/forms'
import { toast } from '@redwoodjs/web/dist/toast'

import { SpotEventPageButtonCancelMutation } from '../../__generated__/SpotEventPageButtonCancelMutation.graphql'
import { SpotEventPageButtonCreateMutation } from '../../__generated__/SpotEventPageButtonCreateMutation.graphql'
import { SpotEventPageQuery$data } from '../../__generated__/SpotEventPageQuery.graphql'
import FormCard from '../../common/FormCard/FormCard'

interface Props {
  spotEvent: {
    __typename: 'SpotEvent'
  } & SpotEventPageQuery$data['spotEvent']
}

const CANCEL = graphql`
  mutation SpotEventPageButtonCancelMutation(
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

const CREATE = graphql`
  mutation SpotEventPageButtonCreateMutation(
    $input: CreateUserSpotEventInput!
    $connections: [ID!]!
  ) {
    createUserSpotEvent(input: $input)
      @appendNode(
        connections: $connections
        edgeTypeName: "UserSpotEventEdge"
      ) {
      __typename
      ... on UserSpotEvent {
        id
        user {
          id
          realName
          nickname
        }
        comment
        spotEvent {
          id
          my {
            id
          }
        }
      }
      ... on AlreadyExistsError {
        message
      }
      ... on NotFoundError {
        message
      }
      ... on NotAllowedError {
        message
      }
    }
  }
`

const SpotEventPageButton = ({ spotEvent }: Props) => {
  const [cancel] = useMutation<SpotEventPageButtonCancelMutation>(CANCEL)
  const [create] = useMutation<SpotEventPageButtonCreateMutation>(CREATE)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onCancel = () => {
    cancel({
      variables: {
        input: {
          id: spotEvent.my.id,
        },
      },
      updater: (store, data) => {
        if (data.cancelUserSpotEvent.__typename === 'UserSpotEvent') {
          const connected = store.get(spotEvent.id)
          const connectionID = ConnectionHandler.getConnection(
            connected,
            'SpotEvent_userSpotEvents'
          )
          ConnectionHandler.deleteNode(connectionID, spotEvent.my.id)
          toast.success('취소되었습니다')
        } else {
          toast.error('취소에 실패했습니다')
        }
      },
    })
  }

  const onCreate = (data) => {
    const connectionId = ConnectionHandler.getConnectionID(
      spotEvent.id,
      'SpotEvent_userSpotEvents'
    )
    create({
      variables: {
        input: {
          spotEventId: spotEvent.id,
          comment: data.comment,
        },
        connections: [connectionId],
      },
      onCompleted: ({ createUserSpotEvent }) => {
        if (createUserSpotEvent.__typename === 'UserSpotEvent') {
          toast.success('신청이 완료되었습니다')
          onClose()
        } else if (
          createUserSpotEvent.__typename === 'AlreadyExistsError' ||
          createUserSpotEvent.__typename === 'NotFoundError' ||
          createUserSpotEvent.__typename === 'NotAllowedError'
        ) {
          toast.error(createUserSpotEvent.message)
        } else {
          toast.error('신청에 실패했습니다')
        }
      },
    })
  }
  return (
    <>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <Form onSubmit={onCreate}>
            <DrawerBody>
              <FormCard
                header="한 마디 작성(선택)"
                title="자유롭게 한 마디를 남겨주세요"
              >
                <TextField
                  name="comment"
                  defaultValue={''}
                  style={{
                    backgroundColor: 'transparent',
                    height: '30px',
                    width: '100%',
                  }}
                />
              </FormCard>
            </DrawerBody>
            <DrawerFooter>
              <Button w="100%" type="submit">
                신청하기
              </Button>
            </DrawerFooter>
          </Form>
        </DrawerContent>
      </Drawer>
      {spotEvent.my ? (
        <Button onClick={onCancel}>취소 신청하기</Button>
      ) : (
        <Button onClick={onOpen}>참가 신청하기</Button>
      )}
    </>
  )
}

export default SpotEventPageButton
