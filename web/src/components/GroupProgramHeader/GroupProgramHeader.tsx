import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Badge, Heading } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'

import { back } from '@redwoodjs/router'

import { formatDate } from 'src/util/date'

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

const Container = styled.div`
  background-color: #8f97f7;
  color: #fff;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  text-align: left;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  gap: 5px;
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
    <Container>
      <ChevronLeftIcon boxSize={10} onClick={() => back()} />
      <Info>
        <Row>
          <Badge>{fragment.group.department.name}</Badge>
          <span>{formatDate(fragment.startsAt)}</span>
          <span>{fragment.address}</span>
        </Row>
        <Heading as="h4" size="sm">
          {fragment.title}
        </Heading>
      </Info>
    </Container>
  )
}

export default GroupProgramHeader
