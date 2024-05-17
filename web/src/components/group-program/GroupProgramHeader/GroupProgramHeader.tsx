import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'

import { formatDate } from 'src/util/date'

import { GroupProgramHeaderFragment$key } from '../../__generated__/GroupProgramHeaderFragment.graphql'
import DetailHead from '../../common/DetailHead/DetailHead'

const GroupProgramHeaderFragment = graphql`
  fragment GroupProgramHeaderFragment on GroupProgram {
    id
    title
    startsAt
    addressSimple
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
    <DetailHead
      departmentName={fragment.group.department.name}
      label={`${formatDate(fragment.startsAt)} ${fragment.addressSimple}`}
      title={fragment.title}
    />
  )
}

export default GroupProgramHeader
