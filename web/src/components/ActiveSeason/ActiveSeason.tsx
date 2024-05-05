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
      <div>참여중인 시즌</div>
      <div>
        {joinedSeasonGroups.length > 0 ? (
          <SeasonGroup
            name={name}
            startsAt={startsAt}
            endsAt={endsAt}
            seasonGroups={joinedSeasonGroups}
          />
        ) : (
          '참여중인 시즌이 없습니다.'
        )}
      </div>
      <hr />
      <div>참여가능한 시즌</div>
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
