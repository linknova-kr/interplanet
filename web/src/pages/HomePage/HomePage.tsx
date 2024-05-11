import { useEffect, useState } from 'react'

import { graphql, useLazyLoadQuery } from 'react-relay'
import { GroupProgramStartAtCriteria } from 'types/graphql'

import { Metadata } from '@redwoodjs/web'

import { HomePageDepartmentsQuery } from 'src/components/__generated__/HomePageDepartmentsQuery.graphql'
import DepartmentChips from 'src/components/DepartmentChips/DepartmentChips'
import GroupPrograms from 'src/components/GroupPrograms/GroupPrograms'

const QUERY = graphql`
  query HomePageDepartmentsQuery {
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

const HomePage = () => {
  const data = useLazyLoadQuery<HomePageDepartmentsQuery>(QUERY, {})

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
      <Metadata title="Home" description="Home page" />
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
    </>
  )
}

export default HomePage
