import { useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Season, SeasonGroup as TSeasonGroup } from 'types/graphql'

import { SeasonGroupMutation } from '../__generated__/SeasonGroupMutation.graphql'

interface SeasonGroupProps {
  startsAt: Season['startsAt']
  endsAt: Season['endsAt']
  name: Season['name']
  seasonGroups: Array<{
    node: {
      group: {
        name: TSeasonGroup['group']['name']
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

const SeasonGroup = (props: SeasonGroupProps) => {
  const [createUserSeasonGroup] = useMutation<SeasonGroupMutation>(CREATE)
  return (
    <div>
      {props.seasonGroups.map(({ node }) => (
        <div key={node.id}>
          <div>
            {node.group.name} {props.startsAt} ~ {props.endsAt}
          </div>
          <div>
            {props.name}
            {node.iJoined ? (
              '참여중'
            ) : (
              <button
                onClick={() =>
                  createUserSeasonGroup({
                    variables: { input: { seasonGroupId: node.id } },
                  })
                }
              >
                참여하기
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SeasonGroup
