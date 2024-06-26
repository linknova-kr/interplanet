import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { graphql, useLazyLoadQuery } from 'react-relay'

import { Redirect } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { SeasonDepartmentPageQuery } from 'src/components/__generated__/SeasonDepartmentPageQuery.graphql'
import DetailHead from 'src/components/common/DetailHead/DetailHead'
import PageTitle from 'src/components/common/PageTitle/PageTitle'
import SeasonDepartmentPageButton from 'src/components/season-department/SeasonDepartmentPageButton/SeasonDepartmentPageButton'
import ActionLayout from 'src/layouts/ActionLayout/ActionLayout'
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
        my {
          id
          status
        }
        season {
          id
          name
          startsAt
          endsAt
        }
        department {
          id
          name
          slug
          type
        }
        seasonGroups {
          id
          group {
            name
          }
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
      <ActionLayout
        actions={
          <SeasonDepartmentPageButton
            seasonDepartment={data.seasonDepartment}
          />
        }
      >
        <DetailHead
          departmentName={department.name}
          label={`${formatMDdd(season.startsAt)}~${formatMDdd(season.endsAt)}`}
          title={season.name}
        />
        <Message>
          입금 후 7일 이내만 환불이 가능합니다.
          <br />
          우리은행 xxx-xxx-xxx
        </Message>
      </ActionLayout>
    </Container>
  )
}

export default SeasonDepartmentPage
