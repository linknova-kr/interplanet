import { Dispatch, SetStateAction, useMemo, useState } from 'react'

import { Badge, Button, Heading, Select, SelectField } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { graphql, useLazyLoadQuery } from 'react-relay'

import { Link, routes } from '@redwoodjs/router'

import {
  GroupProgramSort,
  GroupProgramStartAtCriteria,
  GroupProgramsQuery,
} from '../__generated__/GroupProgramsQuery.graphql'
import GroupProgramsItem from '../GroupProgramsItem/GroupProgramsItem'

const QUERY = graphql`
  query GroupProgramsQuery(
    $departmentId: ID
    $iJoined: Boolean
    $sort: GroupProgramSort
    $startAtCriteria: GroupProgramStartAtCriteria
  ) {
    groupPrograms(
      departmentId: $departmentId
      sort: $sort
      startAtCriteria: $startAtCriteria
      iJoined: $iJoined
    ) {
      edges {
        node {
          id
          title
          startsAt
          endsAt
          my {
            id
          }
          group {
            department {
              name
            }
          }
          address
        }
      }
    }
  }
`

const Actions = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`

interface Props {
  departmentId: string | null
  startAtCriteria: GroupProgramStartAtCriteria
  setStartAtCriteria: Dispatch<SetStateAction<GroupProgramStartAtCriteria>>
}

const GroupPrograms = ({
  departmentId,
  startAtCriteria,
  setStartAtCriteria,
}: Props) => {
  const [sort, setSort] = useState<GroupProgramSort>('STARTS_AT_ASC')
  const iJoined = useMemo(() => {
    if (departmentId === null) {
      return false
    }
    return null
  }, [departmentId])
  const data = useLazyLoadQuery<GroupProgramsQuery>(QUERY, {
    departmentId,
    sort,
    startAtCriteria,
    iJoined,
  })
  return (
    <>
      <Actions>
        <Select
          onChange={(v) => setSort(v.currentTarget.value as GroupProgramSort)}
          value={sort}
          width={'200px'}
        >
          <option value={'STARTS_AT_ASC'}>최신순</option>
          <option value={'STARTS_AT_DESC'}>오래된순</option>
        </Select>

        {startAtCriteria === 'FUTURE' ? (
          <Button onClick={() => setStartAtCriteria('PAST')}>지난 모임</Button>
        ) : (
          <Button onClick={() => setStartAtCriteria('FUTURE')}>
            예정된 모임
          </Button>
        )}
      </Actions>

      {data.groupPrograms.edges.map(({ node }) => {
        return <GroupProgramsItem key={node.id} groupProgram={{ node }} />
      })}
    </>
  )
}

export default GroupPrograms
