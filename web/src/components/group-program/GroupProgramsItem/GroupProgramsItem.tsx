import { routes } from '@redwoodjs/router'

import CommonListItem from 'src/components/common/CommonListItem/CommonListItem'

import { GroupProgramsQuery$data } from '../../__generated__/GroupProgramsQuery.graphql'

interface Props {
  groupProgram: GroupProgramsQuery$data['groupPrograms']['edges'][0]
}

const GroupProgramsItem = ({ groupProgram }: Props) => {
  const { node } = groupProgram
  return (
    <CommonListItem
      id={node.id}
      imageUrl=""
      badge={node.group.department.name}
      title={node.title}
      addressSimple={node.addressSimple}
      startsAt={node.startsAt}
      routeTo={routes.groupProgram({ id: node.id })}
    />
  )
}

export default GroupProgramsItem
