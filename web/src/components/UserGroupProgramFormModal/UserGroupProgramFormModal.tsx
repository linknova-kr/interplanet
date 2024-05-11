import { useMemo } from 'react'

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  Heading,
  RadioGroup,
  Stack,
} from '@chakra-ui/react'
import { useMutation } from 'react-relay'
import { ConnectionHandler, graphql } from 'relay-runtime'

import { Form, RadioField, TextField } from '@redwoodjs/forms'
import { toast } from '@redwoodjs/web/toast'

import { GroupProgramPageQuery$data } from '../__generated__/GroupProgramPageQuery.graphql'
import { UserGroupProgramFormModalCreateMutation } from '../__generated__/UserGroupProgramFormModalCreateMutation.graphql'
import { UserGroupProgramFormModalUpdateMutation } from '../__generated__/UserGroupProgramFormModalUpdateMutation.graphql'

const CREATE = graphql`
  mutation UserGroupProgramFormModalCreateMutation(
    $input: CreateUserGroupProgramInput!
    $connections: [ID!]!
  ) {
    createUserGroupProgram(input: $input)
      @appendNode(
        connections: $connections
        edgeTypeName: "UserGroupProgramEdge"
      ) {
      ... on UserGroupProgram {
        id
        user {
          id
          nickname
        }
        type
        message
        groupProgram {
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
    }
  }
`

const UPDATE = graphql`
  mutation UserGroupProgramFormModalUpdateMutation(
    $input: UpdateUserGroupProgramInput!
    $where: UpdateUserGroupProgramWhere!
  ) {
    updateUserGroupProgram(input: $input, where: $where) {
      ... on UserGroupProgram {
        id
        message
        type
      }
      ... on NotFoundError {
        message
      }
    }
  }
`

interface Props {
  groupProgram: GroupProgramPageQuery$data['groupProgram']
  onDone: () => void
  edit?: GroupProgramPageQuery$data['groupProgram']['my']
}

const UserGroupProgramFormModal = ({ groupProgram, onDone, edit }: Props) => {
  const [createUserGroupProgram] =
    useMutation<UserGroupProgramFormModalCreateMutation>(CREATE)

  const [updateUserGroupProgram] =
    useMutation<UserGroupProgramFormModalUpdateMutation>(UPDATE)

  const messageRequired = groupProgram.type === 'FOUNDER'

  const messageGuide = useMemo(() => {
    switch (groupProgram.type) {
      case 'FOUNDER':
        return '관심있는 비지니스 모델 이름을 적어주세요'
      default:
        return '자유롭게 한 마디를 남겨주세요'
    }
  }, [groupProgram.type])
  const typeOptions = useMemo(() => {
    switch (groupProgram.type) {
      case 'BOOK_DESIGNATED':
        return ['지정책']
      case 'BOOK_FREE':
        return ['자유책', '라운징']
      case 'ENGLISH':
        return ['자신보다 0~1정도 낮은 레벨', '자신보다 1~2정도 낮은 레벨']
      case 'FOUNDER':
        return ['BM분석']
    }
  }, [groupProgram.type])

  const typeOptionGuide = useMemo(() => {
    switch (groupProgram.type) {
      case 'ENGLISH':
        return '신청 옵션 선택(택1)'
      default:
        return '모임 유형 선택(택1)'
    }
  }, [groupProgram.type])

  const onSubmit = async (data) => {
    if (messageRequired && !data.message) {
      toast.error('한 마디를 작성해주세요')
      return
    }
    if (!data.type) {
      toast.error('옵션을 선택해주세요')
      return
    }
    if (edit) {
      updateUserGroupProgram({
        variables: {
          input: {
            message: data.message,
            type: data.type,
          },
          where: { id: edit.id },
        },
        onCompleted: ({ updateUserGroupProgram }) => {
          if (updateUserGroupProgram.id == null) {
            toast.error(updateUserGroupProgram.message)
          } else {
            toast.success('수정되었습니다')
            onDone()
          }
        },
      })
    } else {
      const connectionID = ConnectionHandler.getConnectionID(
        groupProgram.id,
        'GroupProgram_userGroupPrograms'
      )

      createUserGroupProgram({
        variables: {
          input: {
            groupProgramId: groupProgram.id,
            message: data.message,
            type: data.type,
          },
          connections: [connectionID],
        },
        onCompleted: ({ createUserGroupProgram }) => {
          // if (createUserGroupProgram)
          if (createUserGroupProgram.id == null) {
            toast.error(createUserGroupProgram.message)
          } else {
            toast.success('신청이 완료되었습니다')

            onDone()
          }
        },
      })
    }
  }

  return (
    <DrawerContent>
      <Form onSubmit={onSubmit}>
        <DrawerBody h="50vh" minH="50vh" p="30px">
          <Heading size="sm" as="h4">
            {messageRequired ? '한 마디 작성(필수)' : '한 마디 작성(선택)'}
          </Heading>
          <Card border="1px solid #fafafa" mt={5} mb={5}>
            <CardHeader>{messageGuide}</CardHeader>
            <CardBody bgColor="#eee" h="50px" minH="50px">
              <TextField
                name="message"
                defaultValue={edit?.message}
                style={{
                  backgroundColor: 'transparent',
                  height: '30px',
                  width: '100%',
                }}
              />
            </CardBody>
          </Card>

          <Heading size="sm" as="h4">
            옵션선택(필수)
          </Heading>

          <Card border="1px solid #fafafa" mt={5}>
            <CardHeader>{typeOptionGuide}</CardHeader>
            <CardBody bgColor="#eee" h="50px" minH="50px">
              <RadioGroup name="option" defaultValue={edit?.type}>
                <Stack direction="column">
                  {typeOptions.map((option) => (
                    <div key={option}>
                      <RadioField key={option} value={option} name="type" />
                      {` ${option}`}
                    </div>
                  ))}
                </Stack>
              </RadioGroup>
            </CardBody>
          </Card>
        </DrawerBody>
        <DrawerFooter>
          <Button w="100%" type="submit">
            신청하기
          </Button>
        </DrawerFooter>
      </Form>
    </DrawerContent>
  )
}

export default UserGroupProgramFormModal
