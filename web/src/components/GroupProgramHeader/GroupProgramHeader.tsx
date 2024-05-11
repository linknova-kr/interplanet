import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'

import { GroupProgramHeaderFragment$key } from '../__generated__/GroupProgramHeaderFragment.graphql'

const GroupProgramHeaderFragment = graphql`
  fragment GroupProgramHeaderFragment on GroupProgram {
    id
    title
    startsAt
    address
    group {
      department {
        name
      }
    }
  }
`

interface Props {
  groupProgram: GroupProgramHeaderFragment$key
}

const GroupProgramHeader = ({ groupProgram }: Props) => {
  const fragment = useFragment<GroupProgramHeaderFragment$key>(
    GroupProgramHeaderFragment,
    groupProgram
  )
  return (
    <div>
      <h1>{fragment.title}</h1>
      <p>
        {fragment.group.department.name} - {fragment.address}
      </p>
      <p>{fragment.startsAt}</p>
    </div>
  )
}

export default GroupProgramHeader
