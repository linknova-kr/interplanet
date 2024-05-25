import { useEffect, useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import PageTabs from 'src/components/common/PageTabs/PageTabs'
import PageTitle from 'src/components/common/PageTitle/PageTitle'
import HomePageGroupPrograms from 'src/components/group-program/HomePageGroupPrograms/HomePageGroupPrograms'
import HomePageSpotEvents from 'src/components/spot-event/HomePageSpotEvents/HomePageSpotEvents'

enum HomePageTab {
  GROUP_PROGRAM = 'group-program',
  // 별모임
  SPOT_EVENT = 'spot-event',
}

interface Props {
  tab?: string
}

const routeToTab = (tab: string): HomePageTab => {
  switch (tab) {
    case HomePageTab.GROUP_PROGRAM:
      return HomePageTab.GROUP_PROGRAM
    case HomePageTab.SPOT_EVENT:
      return HomePageTab.SPOT_EVENT
    default:
      return HomePageTab.GROUP_PROGRAM
  }
}

const HomePage = (props: Props) => {
  const [tab, setTab] = useState(HomePageTab.GROUP_PROGRAM)
  useEffect(() => {
    if (props.tab) {
      setTab(routeToTab(props.tab))
    }
  }, [props])
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <PageTitle title="모임" />
      <PageTabs
        tabs={[
          { value: HomePageTab.GROUP_PROGRAM, label: '본모임' },
          {
            value: HomePageTab.SPOT_EVENT,
            label: '번개',
          },
        ]}
        selectedTab={tab}
        onSelect={(tab: HomePageTab) => navigate(routes.home({ tab }))}
      />
      {tab === HomePageTab.GROUP_PROGRAM && <HomePageGroupPrograms />}
      {tab === HomePageTab.SPOT_EVENT && <HomePageSpotEvents />}
    </>
  )
}

export default HomePage
