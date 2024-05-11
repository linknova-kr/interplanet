import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'

import { Redirect } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { GroupProgramPageQuery } from 'src/components/__generated__/GroupProgramPageQuery.graphql'
import GroupProgramDetail from 'src/components/GroupProgramDetail/GroupProgramDetail'
import GroupProgramPageButton from 'src/components/GroupProgramPageButton/GroupProgramPageButton'
import PageTitle from 'src/components/PageTitle/PageTitle'
import ActionLayout from 'src/layouts/ActionLayout/ActionLayout'

const QUERY = graphql`
  query GroupProgramPageQuery($id: ID!) {
    groupProgram(id: $id) {
      ... on GroupProgram {
        id
        startsAt
        endsAt
        type
        my {
          id
          type
          message
        }
        address
        description
        userGroupPrograms(first: 30)
          @connection(key: "GroupProgram_userGroupPrograms") {
          edges {
            node {
              id
              type
              user {
                id
                realName
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
      <PageTitle title="본모임 신청" />
      <ActionLayout
        actions={<GroupProgramPageButton groupProgram={data.groupProgram} />}
      >
        <GroupProgramDetail groupProgram={data.groupProgram} />
      </ActionLayout>
    </>
  )
}

export default GroupProgramPage
