import { useMemo } from 'react'

import { useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'

import { Form, Label, RadioField, Submit, TextField } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { Toaster, toast } from '@redwoodjs/web/toast'

import { CreateUserGroupProgramMutation } from '../__generated__/CreateUserGroupProgramMutation.graphql'
import { UserGroupProgramCreatePageQuery$data } from '../__generated__/UserGroupProgramCreatePageQuery.graphql'

const JOIN = graphql`
  mutation CreateUserGroupProgramMutation(
    $input: CreateUserGroupProgramInput!
  ) {
    createUserGroupProgram(input: $input) {
      ... on UserGroupProgram {
        id
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
    if (!data.message) {
      toast.error('메시지를 입력해주세요')
      return
    }
    if (!data.option) {
      toast.error('옵션을 선택해주세요')
      return
    }
    createUserGroupProgram({
      variables: {
        input: {
          groupProgramId: groupProgram.id,
          message: data.message,
          type: data.option,
        },
      },
      onCompleted: ({ createUserGroupProgram }) => {
        if ('message' in createUserGroupProgram) {
          toast.error(createUserGroupProgram.message)
        } else {
          toast.success('신청이 완료되었습니다')

          // todo: 쿼리 재호출
          navigate(routes.groupProgram({ id: groupProgram.id }))
        }
      },
    })
  }

  return (
    <>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <Form onSubmit={onSubmit}>
        <div>
          <TextField name="message" />
        </div>

        <Label name="option">{optionGuide}</Label>
        {options.map((option) => (
          <div key={option}>
            <RadioField name="option" value={option} />
            {option}
          </div>
        ))}
        <Submit>참여 신청하기</Submit>
      </Form>
    </>
  )
}

export default CreateUserGroupProgram
