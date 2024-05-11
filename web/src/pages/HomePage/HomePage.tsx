import { useState } from 'react'

import { Metadata } from '@redwoodjs/web'

import DepartmentChips from 'src/components/DepartmentChips/DepartmentChips'
import GroupPrograms from 'src/components/GroupPrograms/GroupPrograms'

const HomePage = () => {
  const [departmentId, setDepartmentId] = useState<string | null>(null)
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <DepartmentChips onClick={(p) => setDepartmentId(p)} />
      <GroupPrograms departmentId={departmentId} />
    </>
  )
}

export default HomePage
