import { Box, Button, RadioGroup, Stack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useLazyLoadQuery, useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'

import { Form, Label, RadioField, TextField } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'

import { SpotEventCreatePageCreateMutation } from 'src/components/__generated__/SpotEventCreatePageCreateMutation.graphql'
import { SpotEventCreatePageQuery } from 'src/components/__generated__/SpotEventCreatePageQuery.graphql'
import DetailHead from 'src/components/common/DetailHead/DetailHead'
import PageTitle from 'src/components/common/PageTitle/PageTitle'
import CommonEventForm from 'src/components/CommonEventForm/CommonEventForm'
import ActionLayout from 'src/layouts/ActionLayout/ActionLayout'

const DEPARTMENTS = graphql`
  query SpotEventCreatePageQuery {
    myActiveDepartments {
      id
      name
    }
  }
`

const CREATE = graphql`
  mutation SpotEventCreatePageCreateMutation($input: CreateSpotEventInput!) {
    createSpotEvent(input: $input) {
      __typename
      ... on SpotEvent {
        id
      }
      ... on NotFoundError {
        message
      }
    }
  }
`

const Container = styled.div`
  width: 100%;
`
const Title = styled(Label)`
  margin-top: 16px;
  font-weight: bold;
  display: block;
`

const SpotEventCreatePage = () => {
  const departments = useLazyLoadQuery<SpotEventCreatePageQuery>(
    DEPARTMENTS,
    {}
  )
  const [create] = useMutation<SpotEventCreatePageCreateMutation>(CREATE)

  const onSubmit = (data) => {
    if (!data.departmentId) {
      toast.error('계열을 선택해주세요.')
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
    create({
      variables: {
        input: {
          title: data.title,
          description: data.description,
          address: data.address,
          addressSimple: data.addressSimple,
          startsAt: data.startsAt,
          endsAt: data.endsAt,
          departmentId: data.departmentId,
        },
      },
      onCompleted: (data) => {
        if (data.createSpotEvent.__typename === 'SpotEvent') {
          navigate(routes.spotEvent({ id: data.createSpotEvent.id }), {
            replace: true,
          })
        } else {
          toast.error('모임을 개설할 수 없습니다.')
        }
      },
    })
  }
  return (
    <>
      <Metadata title="SpotEventCreate" description="SpotEventCreate page" />
      <PageTitle title="벙개 개설" />
      <Toaster />
      <DetailHead label="" title="" />
      <Container>
        <Form onSubmit={onSubmit}>
          <ActionLayout actions={<Button type="submit">개설신청</Button>}>
            <Box p="0 20px">
              <Title
                name="address"
                htmlFor="address"
                className="rw-label"
                errorClassName="rw-label rw-label-error"
              >
                계열
              </Title>
              <RadioGroup name="departmentId">
                <Stack direction="column" alignItems="start">
                  {departments.myActiveDepartments.map((department) => (
                    <div key={department.id}>
                      <RadioField name="departmentId" value={department.id} />
                      {department.name}
                    </div>
                  ))}
                </Stack>
              </RadioGroup>
              <Title
                name="title"
                htmlFor="title"
                className="rw-label"
                errorClassName="rw-label rw-label-error"
              >
                모임제목
              </Title>
              <TextField
                name="title"
                validation={{
                  required: true,
                }}
                className="rw-input"
                errorClassName="rw-input rw-input-error"
              />
              <CommonEventForm />
            </Box>
          </ActionLayout>
        </Form>
      </Container>
    </>
  )
}

export default SpotEventCreatePage
