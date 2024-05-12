import { Box, Button } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useLazyLoadQuery, useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'

import { back, Redirect } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'

import { UserSeasonDepartmentGroupRequestRefundPageQuery } from 'src/components/__generated__/UserSeasonDepartmentGroupRequestRefundPageQuery.graphql'
import { UserSeasonDepartmentGroupRequestRefundPageRequestRefundMutation } from 'src/components/__generated__/UserSeasonDepartmentGroupRequestRefundPageRequestRefundMutation.graphql'
import DetailHead from 'src/components/common/DetailHead/DetailHead'
import PageTitle from 'src/components/common/PageTitle/PageTitle'
import ActionLayout from 'src/layouts/ActionLayout/ActionLayout'
import { formatMDdd } from 'src/util/date'

const QUERY = graphql`
  query UserSeasonDepartmentGroupRequestRefundPageQuery($id: ID!) {
    userSeasonDepartmentGroup(id: $id) {
      __typename
      ... on UserSeasonDepartmentGroup {
        id
        seasonDepartment {
          department {
            name
          }
          season {
            startsAt
            endsAt
            name
          }
        }
      }

      ... on NotFoundError {
        message
      }
    }
  }
`

const REQUEST_REFUND = graphql`
  mutation UserSeasonDepartmentGroupRequestRefundPageRequestRefundMutation(
    $input: RequestRefundUserSeasonDepartmentGroupInput!
  ) {
    requestRefundUserSeasonDepartmentGroup(input: $input) {
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

const Container = styled(Box)`
  width: 100%;
`

const Message = styled(Box)`
  margin: 30px;
  text-align: left;
`

interface Props {
  id: string
}

const UserSeasonDepartmentGroupRequestRefundPage = ({ id }: Props) => {
  const data =
    useLazyLoadQuery<UserSeasonDepartmentGroupRequestRefundPageQuery>(QUERY, {
      id,
    })

  const [requestRefund] =
    useMutation<UserSeasonDepartmentGroupRequestRefundPageRequestRefundMutation>(
      REQUEST_REFUND
    )
  if (
    data.userSeasonDepartmentGroup.__typename !== 'UserSeasonDepartmentGroup'
  ) {
    return <Redirect to="/not-found" />
  }
  const { department, season } = data.userSeasonDepartmentGroup.seasonDepartment

  const request = () => {
    requestRefund({
      variables: {
        input: { id },
      },
      onCompleted: ({ requestRefundUserSeasonDepartmentGroup }) => {
        if (
          requestRefundUserSeasonDepartmentGroup.__typename ===
          'UserSeasonDepartmentGroup'
        ) {
          toast.success('환불 신청이 완료되었습니다.')
          back()
        } else {
          toast.error('환불 신청이 실패했습니다.')
        }
      },
    })
  }
  return (
    <Container>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <Metadata
        title="UserSeasonDepartmentGroupRequestRefund"
        description="UserSeasonDepartmentGroupRequestRefund page"
      />
      <PageTitle title="시즌 취소" />
      <ActionLayout actions={<Button onClick={request}>환불 신청하기</Button>}>
        <DetailHead
          departmentName={department.name}
          dateLabel={`${formatMDdd(season.startsAt)}~${formatMDdd(
            season.endsAt
          )}`}
          title={season.name}
        />
        <Message>
          취소를 원하는 경우 <br />
          하단 환불 신청하기 버튼을 눌러주세요.
          <br />
          <br />
          환불까지 ~일이 소요 될 수 있습니다.
        </Message>
      </ActionLayout>
    </Container>
  )
}

export default UserSeasonDepartmentGroupRequestRefundPage
