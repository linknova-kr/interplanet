import styled from '@emotion/styled'
import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'

import { ActiveSeasonQuery } from '../__generated__/ActiveSeasonQuery.graphql'
import SeasonGroup from '../SeasonGroup/SeasonGroup'

export const QUERY = graphql`
  query ActiveSeasonQuery {
    activeSeason {
      ... on Season {
        id
        name
        startsAt
        endsAt

        seasonGroups {
          edges {
            node {
              group {
                department {
                  name
                }
                name
              }
              id
              iJoined
            }
          }
        }
      }
    }
  }
`

const Title = styled.div`
  width: 80%;
  border-radius: 10px;
  background-color: #8f97f7;
  padding: 10px;
  margin: 10px;
  color: white;
  font-weight: 600;
`

const ActiveSeason = () => {
  const data = useLazyLoadQuery<ActiveSeasonQuery>(QUERY, {})
  if (!data.activeSeason) return <div>No active season</div>

  const { name, startsAt, endsAt, seasonGroups } = data.activeSeason

  const joinedSeasonGroups = seasonGroups.edges.filter(
    ({ node }) => node.iJoined
  )
  const notJoinedSeasonGroups = seasonGroups.edges.filter(
    ({ node }) => !node.iJoined
  )

  return (
    <>
      <Title>참여중인 시즌</Title>
      <div>
        {joinedSeasonGroups.length > 0 ? (
          <SeasonGroup
            name={name}
            startsAt={startsAt}
            endsAt={endsAt}
            seasonGroups={joinedSeasonGroups}
          />
        ) : (
          <>
            현재 참석 중인 시즌이 없습니다.
            <br /> 시즌을 신청해주세요.
          </>
        )}
      </div>
      <Title>참여가능한 시즌</Title>
      <div>
        {notJoinedSeasonGroups.length > 0 ? (
          <SeasonGroup
            name={name}
            startsAt={startsAt}
            endsAt={endsAt}
            seasonGroups={notJoinedSeasonGroups}
          />
        ) : (
          '참여가능한 시즌이 없습니다.'
        )}
      </div>
    </>
  )
}

export default ActiveSeason
