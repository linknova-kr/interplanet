import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'

import { Redirect } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { GroupProgramPageQuery } from 'src/components/__generated__/GroupProgramPageQuery.graphql'
import GroupProgram from 'src/components/GroupProgramDetail/GroupProgramDetail'
import GroupProgramPageButton from 'src/components/GroupProgramPageButton/GroupProgramPageButton'

const QUERY = graphql`
  query GroupProgramPageQuery($id: ID!) {
    groupProgram(id: $id) {
      ... on GroupProgram {
        id
        startsAt
        endsAt
        my {
          id
        }
        description
        userGroupPrograms {
          edges {
            node {
              user {
                id
                nickname
              }
              message
            }
          }
        }
        ...GroupProgramHeaderFragment
      }
      ... on NotFoundError {
        message
      }
    }
  }
`

interface Props {
  id: string
}

const GroupProgramPage = ({ id }: Props) => {
  const data = useLazyLoadQuery<GroupProgramPageQuery>(QUERY, { id })
  if ('message' in data.groupProgram) {
    return <Redirect to="/not-found" />
  }
  return (
    <>
      <Metadata title="GroupProgram" description="GroupProgram page" />
      <GroupProgram groupProgram={data.groupProgram} />

      <GroupProgramPageButton groupProgram={data.groupProgram} />
    </>
  )
}

export default GroupProgramPage
