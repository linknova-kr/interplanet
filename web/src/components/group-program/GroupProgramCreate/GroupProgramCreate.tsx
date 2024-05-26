import { Button, RadioGroup, Stack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'

import { Form, Label, RadioField, TextField } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'

import { GroupProgramCreateMutation } from 'src/components/__generated__/GroupProgramCreateMutation.graphql'
import CommonEventForm from 'src/components/CommonEventForm/CommonEventForm'
import ActionLayout from 'src/layouts/ActionLayout/ActionLayout'

interface Props {
  seasonGroups: ReadonlyArray<{
    group: {
      name: string
      id: string
    }
  }>
}

const CRAETE = graphql`
  mutation GroupProgramCreateMutation($input: CreateGroupProgramInput!) {
    createGroupProgram(input: $input) {
      __typename
      ... on GroupProgram {
        id
      }
      ... on NotFoundError {
        message
      }
    }
  }
`

const Guide = styled.div`
  margin-top: 20px;
`

const Container = styled.div`
  width: 100%;
`

const Inner = styled.div`
  padding: 0 30px;
  justify-content: start;
  text-align: left;
`

const Title = styled(Label)`
  margin-top: 16px;
  font-weight: bold;
  display: block;
`

const GroupProgramCreate = ({ seasonGroups }: Props) => {
  const [createGroupProgram] = useMutation<GroupProgramCreateMutation>(CRAETE)
  const onSubmit = (data) => {
    if (!data.groupId) {
      toast.error('소속을 선택해주세요.')
      return
    }
    if (data.startsAt > data.endsAt) {
      toast.error('시작일시가 종료일시보다 늦을 수 없습니다.')
      return
    }
    if (data.startsAt < new Date()) {
      toast.error('시작일시가 현재시간보다 빠를 수 없습니다.')
      return
    }
    createGroupProgram({
      variables: {
        input: {
          groupId: data.groupId,
          title: data.title,
          type: 'BOOK_DESIGNATED',
          startsAt: data.startsAt,
          endsAt: data.endsAt,
          address: data.address,
          addressSimple: data.addressSimple,
          description: data.description,
        },
      },
      onCompleted: ({ createGroupProgram }) => {
        if (createGroupProgram.__typename === 'GroupProgram') {
          toast.success('모임이 개설되었습니다.')
          navigate(routes.index(), { replace: true })
        } else {
          toast.error('모임 개설이 실패했습니다.')
        }
      },
    })
  }
  return (
    <Container>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <Form onSubmit={onSubmit}>
        <ActionLayout actions={<Button type="submit">개설하기</Button>}>
          <Inner>
            <Guide>운영진 심사를 거쳐야만 정식 등록됩니다.</Guide>
            {/* todo 이미지 */}
            <Title
              name="groupId"
              htmlFor="groupId"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              소속
            </Title>
            <RadioGroup name="groupId">
              <Stack direction="column" alignItems="start">
                {seasonGroups.map((group) => (
                  <div key={group.group.id}>
                    <RadioField name="groupId" value={group.group.id} />
                    {group.group.name}
                  </div>
                ))}
              </Stack>
            </RadioGroup>
            <Title name="type" htmlFor="type">
              모임유형
            </Title>
            <TextField name="type" disabled value={'지정책'} />

            <Title
              name="title"
              htmlFor="title"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              지정책 제목
            </Title>
            <TextField
              name="title"
              validation={{ required: true }}
              className="rw-input"
              errorClassName="rw-input rw-input-error"
            />

            <CommonEventForm />
          </Inner>
        </ActionLayout>
      </Form>
    </Container>
  )
}

export default GroupProgramCreate
