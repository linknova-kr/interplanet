import { useEffect, useState } from 'react'

import { graphql, useLazyLoadQuery } from 'react-relay'
import { GroupProgramStartAtCriteria } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'

import FloatingButton from 'src/components/common/FloatingButton/FloatingButton'
import DepartmentChips from 'src/components/department/DepartmentChips/DepartmentChips'
import GroupPrograms from 'src/components/group-program/GroupPrograms/GroupPrograms'

import { HomePageGroupProgramsDepartmentsQuery } from '../../__generated__/HomePageGroupProgramsDepartmentsQuery.graphql'

const QUERY = graphql`
  query HomePageGroupProgramsDepartmentsQuery {
    departments {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

const HomePageGroupPrograms = () => {
  const data = useLazyLoadQuery<HomePageGroupProgramsDepartmentsQuery>(
    QUERY,
    {}
  )

  const [departmentId, setDepartmentId] = useState<string | null>(null)
  const [startAtCriteria, setStartAtCriteria] =
    useState<GroupProgramStartAtCriteria>('FUTURE')

  const [showAll, setShowAll] = useState<boolean>(false)

  useEffect(() => {
    setShowAll(startAtCriteria === 'FUTURE')
    if (startAtCriteria === 'PAST' && departmentId == null) {
      setDepartmentId(data.departments.edges[0].node.id)
    }
  }, [startAtCriteria, data.departments.edges, departmentId])

  return (
    <>
      <DepartmentChips
        departments={data.departments}
        departmentId={departmentId}
        setDepartmentId={(p) => setDepartmentId(p)}
        showAll={showAll}
      />
      <GroupPrograms
        departmentId={departmentId}
        startAtCriteria={startAtCriteria}
        setStartAtCriteria={setStartAtCriteria}
      />
      <FloatingButton onClick={() => navigate(routes.groupProgramCreate())} />
    </>
  )
}

export default HomePageGroupPrograms
