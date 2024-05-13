import { useState } from 'react'

import { Badge, Box, Button, HStack, Heading, VStack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { Season } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import { formatMDdd } from 'src/util/date'

import { UserSeasonDepartmentGroupStatus } from '../../__generated__/ActiveSeasonQuery.graphql'

interface SeasonDepartmentProps {
  startsAt: any
  endsAt: any
  name: Season['name']
  seasonDepartment: {
    department: {
      name: string
    }
    id: string
    message: string
    my:
      | {
          id: string
          status: UserSeasonDepartmentGroupStatus
        }
      | null
      | undefined
  }
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
const SeasonDepartment = ({
  seasonDepartment,
  startsAt,
  endsAt,
  name,
}: SeasonDepartmentProps) => {
  const [showMessage, setShowMessage] = useState(false)

  const toggleShowMessage = () => {
    setShowMessage(!showMessage)
  }
  const Buttons = () => {
    if (seasonDepartment.my) {
      switch (seasonDepartment.my.status) {
        case 'APPROVAL_PENDING':
          return (
            <Button disabled bg="#8f97f7">
              승인대기
            </Button>
          )
        case 'APPROVED':
          return (
            <Link
              to={routes.userSeasonDepartmentGroupRequestRefund({
                id: seasonDepartment.my.id,
              })}
            >
              <Button>취소</Button>
            </Link>
          )
        //  구현 필요
        case 'REFUND_PENDING':
          return (
            <>
              <Button disabled>환불대기</Button>
              {/* todo 취소의 취소? */}
            </>
          )
        case 'REFUNDED':
          return (
            <>
              <Button disabled bg="#8f97f7">
                환불완료
              </Button>
              <Link to={routes.seasonDepartment({ id: seasonDepartment.id })}>
                <Button>재신청</Button>
              </Link>
            </>
          )
      }
    }
    return (
      <Link to={routes.seasonDepartment({ id: seasonDepartment.id })}>
        <Button>신청</Button>
      </Link>
    )
  }
  return (
    <Container onClick={toggleShowMessage}>
      <HStack justifyContent="space-between">
        <VStack alignItems="start">
          <HStack justifyContent="start">
            <Badge backgroundColor="#8f97f7">
              {seasonDepartment.department.name}
            </Badge>
            <div>
              {formatMDdd(startsAt)} ~ {formatMDdd(endsAt)}
            </div>
          </HStack>
          <Heading as="h4" size="sm">
            {name}
          </Heading>
        </VStack>

        <HStack>
          <Buttons />
        </HStack>
      </HStack>
      {showMessage && <Message>{seasonDepartment.message}234234</Message>}
      {/* todo: 소속 & 출석수 구현 */}
    </Container>
  )
}

export default SeasonDepartment
