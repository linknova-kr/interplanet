import { useState } from 'react'

import { Badge, Box, Button, HStack, Heading, VStack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { Season } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import { formatMDdd } from 'src/util/date'

import { ActiveSeasonQuery$data } from '../__generated__/ActiveSeasonQuery.graphql'

interface SeasonDepartmentProps {
  startsAt: any
  endsAt: any
  name: Season['name']
  seasonDepartment: ActiveSeasonQuery$data['activeSeason']['seasonDepartments'][0]
}

const Message = styled(Box)`
  background-color: #e0e3fd;
  padding: 10px;
  margin: 10px 0;
  text-align: left;
`

const Container = styled(Box)`
  align-items: start;
  margin: 20px 0;
  cursor: pointer;
`
const SeasonDepartment = (props: SeasonDepartmentProps) => {
  const [showMessage, setShowMessage] = useState(false)

  const toggleShowMessage = () => {
    console.log('123123')
    setShowMessage(!showMessage)
  }
  return (
    <Container onClick={toggleShowMessage}>
      <HStack justifyContent="space-between">
        <VStack alignItems="start">
          <HStack justifyContent="start">
            <Badge backgroundColor="#8f97f7">
              {props.seasonDepartment.department.name}
            </Badge>
            <div>
              {formatMDdd(props.startsAt)} ~ {formatMDdd(props.endsAt)}
            </div>
          </HStack>
          <Heading as="h4" size="sm">
            {props.name}
          </Heading>
        </VStack>
        <Link to={routes.seasonDepartment({ id: props.seasonDepartment.id })}>
          <Button>신청</Button>
        </Link>

        {/* todo: 승인대기/취소/신청완료 */}
      </HStack>
      {showMessage && <Message>{props.seasonDepartment.message}234234</Message>}
    </Container>
  )
}

export default SeasonDepartment
