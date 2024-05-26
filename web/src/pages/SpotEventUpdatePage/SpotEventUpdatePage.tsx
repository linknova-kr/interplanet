import { Box, Button } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useLazyLoadQuery, useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'

import { Form, Label, TextField } from '@redwoodjs/forms'
import { back, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'

import { SpotEventUpdatePageQuery } from 'src/components/__generated__/SpotEventUpdatePageQuery.graphql'
import { SpotEventUpdatePageUpdateMutation } from 'src/components/__generated__/SpotEventUpdatePageUpdateMutation.graphql'
import DetailHead from 'src/components/common/DetailHead/DetailHead'
import PageTitle from 'src/components/common/PageTitle/PageTitle'
import CommonEventForm from 'src/components/CommonEventForm/CommonEventForm'
import ActionLayout from 'src/layouts/ActionLayout/ActionLayout'

interface Props {
  id: string
}

const QUERY = graphql`
  query SpotEventUpdatePageQuery($id: ID!) {
    spotEvent(id: $id) {
      __typename
      ... on NotFoundError {
        message
      }
      ... on SpotEvent {
        id
        title
        description
        imageUrl
        address
        addressSimple
        startsAt
        endsAt
        iMade
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

const UPDATE = graphql`
  mutation SpotEventUpdatePageUpdateMutation(
    $id: ID!
    $input: UpdateSpotEventInput!
  ) {
    updateSpotEvent(id: $id, input: $input) {
      __typename
      ... on SpotEvent {
        id
        title
        description
        imageUrl
        address
        addressSimple
        startsAt
        endsAt
      }
      ... on NotFoundError {
        message
      }
    }
  }
`

const SpotEventUpdatePage = ({ id }: Props) => {
  const query = useLazyLoadQuery<SpotEventUpdatePageQuery>(QUERY, { id })
  const [update] = useMutation<SpotEventUpdatePageUpdateMutation>(UPDATE)
  if (
    query.spotEvent.__typename !== 'SpotEvent' ||
    query.spotEvent.iMade !== true
  ) {
    back()
    return
  }

  const onSubmit = (data) => {
    if (data.startsAt > data.endsAt) {
      toast.error('시작일시가 종료일시보다 늦을 수 없습니다.')
      return
    }
    if (data.startsAt < new Date()) {
      toast.error('시작일시가 현재시간보다 빠를 수 없습니다.')
      return
    }
    update({
      variables: {
        id,
        input: {
          title: data.title,
          description: data.description,
          imageUrl: data.imageUrl,
          address: data.address,
          addressSimple: data.addressSimple,
          startsAt: data.startsAt,
          endsAt: data.endsAt,
        },
      },
      onCompleted: (data) => {
        if (data.updateSpotEvent.__typename === 'SpotEvent') {
          navigate(routes.my(), { replace: true })
        } else {
          toast.error('모임을 수정할 수 없습니다.')
        }
      },
    })
  }

  return (
    <>
      <Metadata title="SpotEventUpdate" description="SpotEventUpdate page" />
      <PageTitle title="벙개 수정" />
      <Toaster />
      <DetailHead label="" title="" />
      <Container>
        <Form onSubmit={onSubmit}>
          <ActionLayout actions={<Button type="submit">수정</Button>}>
            <Box p="0 20px">
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
                defaultValue={query.spotEvent.title}
                className="rw-input"
                errorClassName="rw-input rw-input-error"
              />
              <CommonEventForm
                defaultValues={{
                  title: query.spotEvent.title,
                  description: query.spotEvent.description,
                  imageUrl: query.spotEvent.imageUrl,
                  address: query.spotEvent.address,
                  addressSimple: query.spotEvent.addressSimple,
                  startsAt: query.spotEvent.startsAt,
                  endsAt: query.spotEvent.endsAt,
                }}
              />
            </Box>
          </ActionLayout>
        </Form>
      </Container>
    </>
  )
}

export default SpotEventUpdatePage
