import { useState } from 'react'

import { Button, Select } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'

import {
  HomePageSpotEventsQuery,
  SpotEventSort,
  SpotEventStartAtCriteria,
} from 'src/components/__generated__/HomePageSpotEventsQuery.graphql'

import SpotEventListItem from '../SpotEventListItem/SpotEventListItem'

const QUERY = graphql`
  query HomePageSpotEventsQuery(
    $sort: SpotEventSort
    $startAtCriteria: SpotEventStartAtCriteria
  ) {
    spotEvents(
      sort: $sort
      startAtCriteria: $startAtCriteria
      activeSeasonOnly: true
    ) {
      edges {
        node {
          id
          ...SpotEventListItemFragment
        }
      }
    }
  }
`

const Actions = styled.div`
  margin-top: 16px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  margin-bottom: 16px;
`

const HomePageSpotEvents = () => {
  const [sort, setSort] = useState<SpotEventSort>('STARTS_AT_DESC')
  const [startAtCriteria, setStartAtCriteria] =
    useState<SpotEventStartAtCriteria>('FUTURE')

  const data = useLazyLoadQuery<HomePageSpotEventsQuery>(QUERY, {
    sort,
    startAtCriteria,
  })

  return (
    <>
      <Actions>
        <Select
          onChange={(v) => setSort(v.currentTarget.value as SpotEventSort)}
          value={sort}
          width={'200px'}
        >
          <option value={'STARTS_AT_DESC'}>최신순</option>
          <option value={'STARTS_AT_ASC'}>오래된순</option>
        </Select>

        {startAtCriteria === 'FUTURE' ? (
          <Button
            fontSize={14}
            padding={2}
            onClick={() => setStartAtCriteria('PAST')}
          >
            지난 모임
          </Button>
        ) : (
          <Button
            fontSize={14}
            padding={2}
            onClick={() => setStartAtCriteria('FUTURE')}
          >
            예정된 모임
          </Button>
        )}
      </Actions>
      {data.spotEvents.edges.map(({ node }) => (
        <SpotEventListItem key={node.id} spotEvent={node} />
      ))}
    </>
  )
}

export default HomePageSpotEvents
