import { GroupProgramPageQuery$data } from '../__generated__/GroupProgramPageQuery.graphql'

interface Props {
  groupProgram: GroupProgramPageQuery$data['groupProgram']
}

const GroupProgram = ({ groupProgram }: Props) => {
  return (
    <div>
      <p>{groupProgram.group.department.name}</p>
      <h1>{groupProgram.title}</h1>
      <p>{groupProgram.description}</p>
      <p>
        모임시간 {groupProgram.startsAt} - {groupProgram.endsAt}
      </p>
      <p>모임장소 {groupProgram.address}</p>
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

export default GroupProgram
