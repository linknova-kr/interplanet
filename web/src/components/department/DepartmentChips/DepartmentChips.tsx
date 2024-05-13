import { Button } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { HomePageGroupProgramsDepartmentsQuery$data } from '../../__generated__/HomePageGroupProgramsDepartmentsQuery.graphql'

interface Props {
  departments: HomePageGroupProgramsDepartmentsQuery$data['departments']
  departmentId: string | null
  setDepartmentId: (departmentId: string | null) => void
  showAll: boolean
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`

const DepartmentChips = ({
  departmentId,
  setDepartmentId,
  showAll,
  departments,
}: Props) => {
  return (
    <Container>
      {showAll && (
        <Button
          onClick={() => setDepartmentId(null)}
          isActive={departmentId == null}
        >
          참여 가능한 모임
        </Button>
      )}
      {departments.edges.map(({ node }) => {
        return (
          <Button
            onClick={() => setDepartmentId(node.id)}
            key={node.id}
            isActive={departmentId == node.id}
          >
            {node.name}
          </Button>
        )
      })}
    </Container>
  )
}

export default DepartmentChips
