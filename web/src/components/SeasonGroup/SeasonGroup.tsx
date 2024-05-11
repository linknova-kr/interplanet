import { Badge, Button, Heading } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Season, SeasonGroup as TSeasonGroup } from 'types/graphql'

import { formatDate } from 'src/util/date'

import { SeasonGroupMutation } from '../__generated__/SeasonGroupMutation.graphql'

interface SeasonGroupProps {
  startsAt: any
  endsAt: any
  name: Season['name']
  seasonGroups: Array<{
    node: {
      group: {
        name: TSeasonGroup['group']['name']
        department: {
          name: TSeasonGroup['group']['department']['name']
        }
      }
      id: TSeasonGroup['id']
      iJoined: TSeasonGroup['iJoined']
    }
  }>
}

const CREATE = graphql`
  mutation SeasonGroupMutation($input: CreateUserSeasonGroupInput!) {
    createUserSeasonGroup(input: $input) {
      ... on UserSeasonGroup {
        id
        seasonGroup {
          id
          iJoined
        }
      }
      ... on AlreadyExistsError {
        message
      }
      ... on NotFoundError {
        message
      }
    }
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`

const SeasonGroup = (props: SeasonGroupProps) => {
  const [createUserSeasonGroup] = useMutation<SeasonGroupMutation>(CREATE)
  return (
    <div>
      {props.seasonGroups.map(({ node }) => (
        <div key={node.id}>
          <Row>
            <Badge backgroundColor="#8f97f7">
              {node.group.department.name}
            </Badge>
            {formatDate(props.startsAt)} ~ {formatDate(props.endsAt)}
          </Row>
          <Row>
            <Heading as="h4" size="sm">
              {props.name}
            </Heading>
            {node.iJoined ? (
              '참여중'
            ) : (
              <Button
                variant="outline"
                onClick={() =>
                  createUserSeasonGroup({
                    // todo: 신청대기 페이지로 이동. 이후에는 신청대기 상태로 변경
                    variables: { input: { seasonGroupId: node.id } },
                  })
                }
              >
                참여하기
              </Button>
            )}
          </Row>
        </div>
      ))}
    </div>
  )
}

export default SeasonGroup
