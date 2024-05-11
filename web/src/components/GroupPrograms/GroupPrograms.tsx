import { useMemo, useState } from 'react'

import { graphql, useLazyLoadQuery } from 'react-relay'

import { Link, routes } from '@redwoodjs/router'

import {
  GroupProgramSort,
  GroupProgramStartAtCriteria,
  GroupProgramsQuery,
} from '../__generated__/GroupProgramsQuery.graphql'

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

interface Props {
  departmentId: string | null
}

const GroupPrograms = ({ departmentId }: Props) => {
  const [sort, setSort] = useState<GroupProgramSort>('STARTS_AT_ASC')
  const [startAtCriteria, setStartAtCriteria] =
    useState<GroupProgramStartAtCriteria>('FUTURE')
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
      <div>
        <select
          onChange={(v) => setSort(v.currentTarget.value as GroupProgramSort)}
          value={sort}
        >
          <option value={'STARTS_AT_ASC'}>최신순</option>
          <option value={'STARTS_AT_DESC'}>오래된순</option>
        </select>

        <select
          onChange={(v) =>
            setStartAtCriteria(
              v.currentTarget.value as GroupProgramStartAtCriteria
            )
          }
          value={startAtCriteria}
        >
          <option value={'FUTURE'}>예정된 모임</option>
          <option value={'PAST'}>지난 모임</option>
        </select>
      </div>

      {data.groupPrograms.edges.map(({ node }) => {
        return (
          <Link key={node.id} to={routes.groupProgram({ id: node.id })}>
            <h3>{node.title}</h3>
            <p>{node.group.department.name}</p>
            <p>{node.startsAt}</p>
            <p>{node.endsAt}</p>
            <p>{node.address}</p>
          </Link>
        )
      })}
    </>
  )
}

export default GroupPrograms
