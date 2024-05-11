import { formatDate } from 'src/util/date'

import { GroupProgramPageQuery$data } from '../__generated__/GroupProgramPageQuery.graphql'
import GroupProgramHeader from '../GroupProgramHeader/GroupProgramHeader'

interface Props {
  groupProgram: GroupProgramPageQuery$data['groupProgram']
}

const GroupProgramDetail = ({ groupProgram }: Props) => {
  return (
    <div>
      <GroupProgramHeader groupProgram={groupProgram} />
      <p>{groupProgram.description}</p>
      <p>
        모임시간 {formatDate(groupProgram.startsAt)} -{' '}
        {formatDate(groupProgram.endsAt)}
      </p>
      참여멤버
      <div>
        {groupProgram.userGroupPrograms.edges.map(({ node }) => {
          return (
            <div key={node.user.id}>
              {node.user.id}: {node.user.nickname}
              <br />
              {node.message}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GroupProgramDetail
