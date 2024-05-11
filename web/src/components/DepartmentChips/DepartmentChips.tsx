import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'

import { DepartmentChipsQuery } from '../__generated__/DepartmentChipsQuery.graphql'

const QUERY = graphql`
  query DepartmentChipsQuery {
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

interface Props {
  onClick: (departmentId: string | null) => void
}

const DepartmentChips = ({ onClick }: Props) => {
  const data = useLazyLoadQuery<DepartmentChipsQuery>(QUERY, {})
  return (
    <>
      <button onClick={() => onClick(null)}>ALL</button>
      {data.departments.edges.map(({ node }) => {
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
