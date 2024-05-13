import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { GroupProgramCreatePageQuery } from 'src/components/__generated__/GroupProgramCreatePageQuery.graphql'
import PageTitle from 'src/components/common/PageTitle/PageTitle'
import GroupProgramCreate from 'src/components/group-program/GroupProgramCreate/GroupProgramCreate'

const QUERY = graphql`
  query GroupProgramCreatePageQuery {
    activeSeason {
      __typename
      ... on Season {
        seasonGroups(departmentType: BOOK) {
          group {
            id
            name
          }
        }
      }

      ... on NotFoundError {
        message
      }
    }
  }
`

const GroupProgramCreatePage = () => {
  const data = useLazyLoadQuery<GroupProgramCreatePageQuery>(QUERY, {})
  if (data.activeSeason.__typename !== 'Season') {
    return <div>No active season</div>
  }

  return (
    <>
      <Metadata
        title="GroupProgramCreate"
        description="GroupProgramCreate page"
      />
      <PageTitle title="지정책 모임 개설" />
      <GroupProgramCreate seasonGroups={data.activeSeason.seasonGroups} />
    </>
  )
}

export default GroupProgramCreatePage
