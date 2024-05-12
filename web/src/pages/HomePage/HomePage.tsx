import { useState } from 'react'

import { Metadata } from '@redwoodjs/web'

import PageTabs from 'src/components/common/PageTabs/PageTabs'
import PageTitle from 'src/components/common/PageTitle/PageTitle'
import HomePageGroupPrograms from 'src/components/group-program/HomePageGroupPrograms/HomePageGroupPrograms'

enum HomePageTab {
  GROUP_PROGRAM = 'GROUP_PROGRAM',
  // 별모임
  // 번개
}

const HomePage = () => {
  const [tab, setTab] = useState(HomePageTab.GROUP_PROGRAM)
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <PageTitle title="모임" />
      <PageTabs
        tabs={[{ value: HomePageTab.GROUP_PROGRAM, label: '본모임' }]}
        selectedTab={tab}
        onSelect={(tab: HomePageTab) => setTab(tab)}
      />
      {tab === HomePageTab.GROUP_PROGRAM && <HomePageGroupPrograms />}
    </>
  )
}

export default HomePage
