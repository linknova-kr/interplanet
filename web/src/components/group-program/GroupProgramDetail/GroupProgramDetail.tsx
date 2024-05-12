import { Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import * as _ from 'lodash'

import { formatHMM } from 'src/util/date'

import { GroupProgramPageQuery$data } from '../../__generated__/GroupProgramPageQuery.graphql'
import UserMessage from '../../user/UserMessage/UserMessage'
import GroupProgramHeader from '../GroupProgramHeader/GroupProgramHeader'

interface Props {
  groupProgram: {
    __typename: 'GroupProgram'
  } & GroupProgramPageQuery$data['groupProgram']
}

const Container = styled.div`
  text-align: left;
  padding: 30px;
`

const Label = styled.span`
  color: #8f97f7;
  margin-right: 5px;
`

const GroupProgramDetail = ({ groupProgram }: Props) => {
  const grouped = _.groupBy(
    groupProgram.userGroupPrograms.edges,
    (edge) => edge.node.type
  )

  return (
    <>
      <GroupProgramHeader groupProgram={groupProgram} />
      <Container>
        <p>{groupProgram.description}</p>
        <div>
          <Label>모임시간</Label>
          {formatHMM(groupProgram.startsAt)} ~{formatHMM(groupProgram.endsAt)}
        </div>
        <div>
          <Label>모임장소</Label>
          {groupProgram.address}
        </div>
        <br />
        <Label>참여멤버</Label>

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
      </Container>
    </>
  )
}

export default GroupProgramDetail
