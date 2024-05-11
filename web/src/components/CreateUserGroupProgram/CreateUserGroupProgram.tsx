import { useMemo } from 'react'

import { Button } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useMutation } from 'react-relay'
import { ConnectionHandler, graphql } from 'relay-runtime'

import { Form, Label, RadioField, Submit, TextField } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { Toaster, toast } from '@redwoodjs/web/toast'

import ActionLayout from 'src/layouts/ActionLayout/ActionLayout'

import { CreateUserGroupProgramMutation } from '../__generated__/CreateUserGroupProgramMutation.graphql'
import { UserGroupProgramCreatePageQuery$data } from '../__generated__/UserGroupProgramCreatePageQuery.graphql'
import GroupProgramHeader from '../GroupProgramHeader/GroupProgramHeader'

const JOIN = graphql`
  mutation CreateUserGroupProgramMutation(
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
interface Props {
  groupProgram: UserGroupProgramCreatePageQuery$data['groupProgram']
}

const Container = styled.div`
  width: 100%;
`

const CreateUserGroupProgram = ({ groupProgram }: Props) => {
  const [createUserGroupProgram] =
    useMutation<CreateUserGroupProgramMutation>(JOIN)
  const options = useMemo(() => {
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

  const optionGuide = useMemo(() => {
    switch (groupProgram.type) {
      case 'ENGLISH':
        return '신청 옵션 선택(택1)'
      default:
        return '모임 유형 선택(택1)'
    }
  }, [groupProgram.type])

  const onSubmit = async (data) => {
    if (!data.option) {
      toast.error('옵션을 선택해주세요')
      return
    }
    const connectionID = ConnectionHandler.getConnectionID(
      groupProgram.id,
      'GroupProgram_userGroupPrograms'
    )

    createUserGroupProgram({
      variables: {
        input: {
          groupProgramId: groupProgram.id,
          message: data.message,
          type: data.option,
        },
        connections: [connectionID],
      },
      onCompleted: ({ createUserGroupProgram }) => {
        // if (createUserGroupProgram)
        if (createUserGroupProgram.id == null) {
          toast.error(createUserGroupProgram.message)
        } else {
          toast.success('신청이 완료되었습니다')

          navigate(routes.groupProgram({ id: groupProgram.id }), {
            replace: true,
          })
        }
      },
    })
  }

  return (
    <Container>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <Form onSubmit={onSubmit}>
        <ActionLayout actions={<Button type="submit">신청하기</Button>}>
          <>
            <div>
              <Label htmlFor="message" name="message">
                한 마디 작성(선택)
              </Label>
              <TextField name="message" />
            </div>

            <Label name="option">{optionGuide}</Label>
            {options.map((option) => (
              <div key={option}>
                <RadioField name="option" value={option} />
                {option}
              </div>
            ))}
          </>
        </ActionLayout>
      </Form>
    </Container>
  )
}

export default CreateUserGroupProgram
