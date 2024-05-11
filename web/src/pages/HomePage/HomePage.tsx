import { useState } from 'react'

import { Metadata } from '@redwoodjs/web'

import HomePageGroupPrograms from 'src/components/HomePageGroupPrograms/HomePageGroupPrograms'
import PageTabs from 'src/components/PageTabs/PageTabs'
import PageTitle from 'src/components/PageTitle/PageTitle'

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
