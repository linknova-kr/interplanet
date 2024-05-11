import { HomePageDepartmentsQuery$data } from '../__generated__/HomePageDepartmentsQuery.graphql'

interface Props {
  departments: HomePageDepartmentsQuery$data['departments']
  onClick: (departmentId: string | null) => void
  showAll: boolean
}

const DepartmentChips = ({ onClick, showAll, departments }: Props) => {
  return (
    <>
      {showAll && (
        <button onClick={() => onClick(null)}>참여 가능한 모임</button>
      )}
      {departments.edges.map(({ node }) => {
        return (
          <button onClick={() => onClick(node.id)} key={node.id}>
            {node.name}
          </button>
        )
      })}
    </>
  )
}

export default DepartmentChips
