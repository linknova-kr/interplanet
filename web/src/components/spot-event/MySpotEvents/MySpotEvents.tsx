import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'

import { Toaster } from '@redwoodjs/web/dist/toast'

import { MySpotEventsQuery } from 'src/components/__generated__/MySpotEventsQuery.graphql'
import SectionTitle from 'src/components/common/SectionTitle/SectionTitle'

import SpotEventListItem from '../SpotEventListItem/SpotEventListItem'

const QUERY = graphql`
  query MySpotEventsQuery {
    spotEvents(iJoined: true, first: 10000)
      @connection(key: "MySpotEvents_spotEvents") {
      __id
      edges {
        node {
          id
          startsAt
          ...SpotEventListItemFragment
        }
      }
    }
  }
`

const Container = styled(Box)`
  width: 100%;
`

const MySpotEvents = () => {
  const data = useLazyLoadQuery<MySpotEventsQuery>(QUERY, {})
  const plannedSpotEvents = data.spotEvents.edges.filter(
    (edge) => edge.node && new Date(edge.node.startsAt) > new Date()
  )
  const completedSpotEvents = data.spotEvents.edges.filter(
    (edge) => edge.node && new Date(edge.node.startsAt) <= new Date()
  )
  const emptyMessage = (
    <div>
      현재 신청한 벙개가 없습니다.
      <br />
      모임탭에서 벙개를 신청해 주세요
    </div>
  )
  return (
    <Container>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <SectionTitle title="예정된 벙개" />
      {plannedSpotEvents.length > 0
        ? plannedSpotEvents.map((edge) => (
            <SpotEventListItem
              key={edge.node.id}
              spotEvent={edge.node}
              buttonEnabled={{
                connectionId: data.spotEvents.__id,
              }}
            />
          ))
        : emptyMessage}
      <SectionTitle title="완료한 벙개" />
      {completedSpotEvents.length > 0
        ? completedSpotEvents.map((edge) => (
            <SpotEventListItem key={edge.node.id} spotEvent={edge.node} />
          ))
        : emptyMessage}
    </Container>
  )
}

export default MySpotEvents
