import { Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import * as _ from 'lodash'

import CommonEventDetail from 'src/components/CommonEventDetail/CommonEventDetail'

import { GroupProgramPageQuery$data } from '../../__generated__/GroupProgramPageQuery.graphql'
import UserMessage from '../../user/UserMessage/UserMessage'
import GroupProgramHeader from '../GroupProgramHeader/GroupProgramHeader'

interface Props {
  groupProgram: {
    __typename: 'GroupProgram'
  } & GroupProgramPageQuery$data['groupProgram']
}

const GroupProgramDetail = ({ groupProgram }: Props) => {
  const grouped = _.groupBy(
    groupProgram.userGroupPrograms.edges,
    (edge) => edge.node.type
  )

  return (
    <>
      <GroupProgramHeader groupProgram={groupProgram} />
      <CommonEventDetail
        description={groupProgram.description}
        startsAt={groupProgram.startsAt}
        endsAt={groupProgram.endsAt}
        address={groupProgram.address}
        usersDOM={
          <div>
            {Object.entries(grouped).map(([type, userGroupPrograms]) => {
              return (
                <div key={type}>
                  <h2>{type}</h2>
                  <Flex direction="row" gap={8}>
                    {userGroupPrograms.map((userGroupProgram) => {
                      return (
                        <UserMessage
                          user={userGroupProgram.node.user}
                          message={userGroupProgram.node.message}
                          key={userGroupProgram.node.id}
                        />
                      )
                    })}
                  </Flex>
                </div>
              )
            })}
          </div>
        }
      />
    </>
  )
}

export default GroupProgramDetail
