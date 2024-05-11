import { Badge, Heading } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { Link, routes } from '@redwoodjs/router'

import { formatDate } from 'src/util/date'

import { GroupProgramsQuery$data } from '../__generated__/GroupProgramsQuery.graphql'

const Row = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
`

const Container = styled(Link)`
  width: 100%;
  margin-bottom: 5px;
  height: 100px;
  display: flex;
  flex-direction: row;
`

const Image = styled.div`
  width: 100px;
  border-radius: 10px;
  background-color: #eee;
  margin-right: 10px;
`

interface Props {
  groupProgram: GroupProgramsQuery$data['groupPrograms']['edges'][0]
}

const GroupProgramsItem = ({ groupProgram }: Props) => {
  const { node } = groupProgram
  return (
    <Container key={node.id} to={routes.groupProgram({ id: node.id })}>
      <Image></Image>
      <div>
        <Badge>{node.group.department.name}</Badge>
        <Heading as="h4" size="md">
          {node.title}
        </Heading>
        <Row>
          <p>{formatDate(node.startsAt)}</p>
          <p>{node.address}</p>
        </Row>
      </div>
    </Container>
  )
}

export default GroupProgramsItem
