import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { graphql, useLazyLoadQuery } from 'react-relay'

import { Redirect } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { SeasonDepartmentPageQuery } from 'src/components/__generated__/SeasonDepartmentPageQuery.graphql'
import DetailHead from 'src/components/DetailHead/DetailHead'
import PageTitle from 'src/components/PageTitle/PageTitle'
import { formatMDdd } from 'src/util/date'

const QUERY = graphql`
  query SeasonDepartmentPageQuery($id: ID!) {
    seasonDepartment(id: $id) {
      __typename
      ... on NotFoundError {
        message
      }
      ... on SeasonDepartment {
        id
        season {
          id
          name
          startsAt
          endsAt
        }
        department {
          id
          name
        }
      }
    }
  }
`

const Message = styled(Box)`
  margin: 30px;
  text-align: left;
`

const Container = styled(Box)`
  width: 100%;
`

interface Props {
  id: string
}

const SeasonDepartmentPage = ({ id }: Props) => {
  const data = useLazyLoadQuery<SeasonDepartmentPageQuery>(QUERY, { id })
  if (data.seasonDepartment.__typename !== 'SeasonDepartment') {
    return <Redirect to="/not-found" />
  }
  const { department, season } = data.seasonDepartment
  return (
    <Container>
      <Metadata title="SeasonDepartment" description="SeasonDepartment page" />
      <PageTitle title="시즌 신청" />
      <DetailHead
        departmentName={department.name}
        dateLabel={`${formatMDdd(season.startsAt)}~${formatMDdd(
          season.endsAt
        )}`}
        title={season.name}
      />
      <Message>
        입금 후 7일 이내만 환불이 가능합니다.
        <br />
        우리은행 xxx-xxx-xxx
      </Message>
    </Container>
  )
}

export default SeasonDepartmentPage
