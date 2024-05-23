import { useState } from 'react'

import { Badge, Box, Button, HStack, Heading, VStack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Season } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { Toaster, toast } from '@redwoodjs/web/dist/toast'

import { SeasonDepartmentWithdrawRequestRefundUserSeasonDepartmentGroupMutation } from 'src/components/__generated__/SeasonDepartmentWithdrawRequestRefundUserSeasonDepartmentGroupMutation.graphql'
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
          seasonGroup: {
            group: {
              name: string
            }
          }
          attendanceCount: number
        }
      | null
      | undefined
  }
}

const WITHDRAW_REQUEST_REFUND = graphql`
  mutation SeasonDepartmentWithdrawRequestRefundUserSeasonDepartmentGroupMutation(
    $id: ID!
  ) {
    withdrawRequestRefundUserSeasonDepartmentGroup(id: $id) {
      __typename
      ... on UserSeasonDepartmentGroup {
        id
        status
      }
      ... on NotFoundError {
        message
      }
    }
  }
`
const MyContainer = styled(VStack)`
  margin: 5px 0;
  align-items: start;
  gap: 1px;
`
const MyGroup = styled.span`
  background-color: #dddddd;
  text-align: left;
  padding: 3px;
  border-radius: 5px;
  font-size: 12px;
`
const MyAttendance = styled.span`
  background-color: #e0e3fd;
  text-align: left;
  padding: 3px;
  border-radius: 5px;
  font-size: 12px;
`

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
  const [withdraw] =
    useMutation<SeasonDepartmentWithdrawRequestRefundUserSeasonDepartmentGroupMutation>(
      WITHDRAW_REQUEST_REFUND
    )

  const onWithdraw = (id: string) => {
    withdraw({
      variables: { id },
      onCompleted: (data) => {
        if (
          data.withdrawRequestRefundUserSeasonDepartmentGroup.__typename ===
          'UserSeasonDepartmentGroup'
        ) {
          toast.success('환불철회되었습니다.')
        }
      },
    })
  }

  const toggleShowMessage = () => {
    if (seasonDepartment.my) {
      return
    }
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
            // todo: 환불요청
          )
        case 'APPROVED':
          return (
            <Link
              to={routes.userSeasonDepartmentGroupRequestRefund({
                id: seasonDepartment.my.id,
              })}
            >
              <Button>시즌취소</Button>
            </Link>
          )
        //  구현 필요
        case 'REFUND_PENDING':
          return (
            <>
              <Button disabled>환불대기</Button>
              <Button onClick={() => onWithdraw(seasonDepartment.my.id)}>
                환불철회
              </Button>
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
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
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
      {showMessage && <Message>{seasonDepartment.message}</Message>}
      {seasonDepartment.my && (
        <MyContainer>
          <MyGroup>소속: {seasonDepartment.my.seasonGroup.group.name}</MyGroup>
          <MyAttendance>
            출석수: {seasonDepartment.my.attendanceCount}
          </MyAttendance>
        </MyContainer>
      )}
    </Container>
  )
}

export default SeasonDepartment
