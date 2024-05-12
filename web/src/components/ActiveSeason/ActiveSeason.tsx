import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'

import { ActiveSeasonQuery } from '../__generated__/ActiveSeasonQuery.graphql'
import SeasonDepartment from '../SeasonDepartment/SeasonDepartment'

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
          }
        }
      }
      ... on NotFoundError {
        message
      }
    }
  }
`

const Title = styled.div`
  border-radius: 10px;
  background-color: #8f97f7;
  padding: 10px;
  margin: 10px 0;
  color: white;
  font-weight: 600;
`

const ActiveSeason = () => {
  const data = useLazyLoadQuery<ActiveSeasonQuery>(QUERY, {})
  if (data.activeSeason.__typename !== 'Season')
    return <div>No active season</div>

  const { name, startsAt, endsAt, seasonDepartments } = data.activeSeason

  const joinedSeasonDepartments = seasonDepartments.filter((v) => v.my)
  const notJoinedSeasonDepartments = seasonDepartments.filter(
    (v) => v.my === null
  )

  return (
    <Box width="100%" padding="30px">
      <Title>참여중인 시즌</Title>
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
      <Title>참여가능한 시즌</Title>
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
