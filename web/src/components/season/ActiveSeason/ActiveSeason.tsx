import { Box } from '@chakra-ui/react'
import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'

import SectionTitle from 'src/components/common/SectionTitle/SectionTitle'

import { ActiveSeasonQuery } from '../../__generated__/ActiveSeasonQuery.graphql'
import SeasonDepartment from '../../season-department/SeasonDepartment/SeasonDepartment'

export const QUERY = graphql`
  query ActiveSeasonQuery {
    activeSeason {
      __typename
      ... on Season {
        id
        name
        startsAt
        endsAt

        seasonDepartments {
          id
          message
          department {
            name
          }
          my {
            id
            status
            seasonGroup {
              group {
                name
              }
            }
            attendanceCount
          }
        }
      }
      ... on NotFoundError {
        message
      }
    }
  }
`

const ActiveSeason = () => {
  const data = useLazyLoadQuery<ActiveSeasonQuery>(QUERY, {})
  if (data.activeSeason.__typename !== 'Season')
    return <div>No active season</div>

  const { name, startsAt, endsAt, seasonDepartments } = data.activeSeason

  const joinedSeasonDepartments = seasonDepartments.filter(
    (v) => v.my && v.my.status != 'REFUNDED'
  )
  const notJoinedSeasonDepartments = seasonDepartments.filter(
    (v) => v.my === null || v.my.status === 'REFUNDED'
  )

  return (
    <Box width="100%">
      <SectionTitle title="참여중인 시즌" />
      <div>
        {joinedSeasonDepartments.length > 0 ? (
          joinedSeasonDepartments.map((seasonDepartment) => (
            <SeasonDepartment
              key={seasonDepartment.id}
              name={name}
              startsAt={startsAt}
              endsAt={endsAt}
              seasonDepartment={seasonDepartment}
            />
          ))
        ) : (
          <>
            현재 참석 중인 시즌이 없습니다.
            <br /> 시즌을 신청해주세요.
          </>
        )}
      </div>
      <SectionTitle title="참여가능한 시즌" />
      <div>
        {notJoinedSeasonDepartments.length > 0
          ? notJoinedSeasonDepartments.map((seasonDepartment) => (
              <SeasonDepartment
                key={seasonDepartment.id}
                name={name}
                startsAt={startsAt}
                endsAt={endsAt}
                seasonDepartment={seasonDepartment}
              />
            ))
          : '참여가능한 시즌이 없습니다.'}
      </div>
    </Box>
  )
}

export default ActiveSeason
