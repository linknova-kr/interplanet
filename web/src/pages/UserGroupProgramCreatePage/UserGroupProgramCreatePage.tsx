import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'

import { Redirect, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { UserGroupProgramCreatePageQuery } from 'src/components/__generated__/UserGroupProgramCreatePageQuery.graphql'
import CreateUserGroupProgram from 'src/components/CreateUserGroupProgram/CreateUserGroupProgram'

const QUERY = graphql`
  query UserGroupProgramCreatePageQuery($id: ID!) {
    groupProgram(id: $id) {
      ... on GroupProgram {
        ...GroupProgramHeaderFragment
        id
        type
        my {
          id
        }
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

const UserGroupProgramCreatePage = ({ id }: Props) => {
  const data = useLazyLoadQuery<UserGroupProgramCreatePageQuery>(QUERY, { id })
  if ('message' in data.groupProgram) {
    return <Redirect to={routes.groupProgram({ id })} />
  }
  return (
    <>
      <Metadata
        title="GroupProgramApply"
        description="GroupProgramApply page"
      />
      <CreateUserGroupProgram groupProgram={data.groupProgram} />
    </>
  )
}

export default UserGroupProgramCreatePage
