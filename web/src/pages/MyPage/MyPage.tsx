import { useState } from 'react'

import { Metadata } from '@redwoodjs/web'

import PageTabs from 'src/components/common/PageTabs/PageTabs'
import PageTitle from 'src/components/common/PageTitle/PageTitle'
import MyPageSettingIcon from 'src/components/my-page/MyPageSettingIcon/MyPageSettingIcon'
import ActiveSeason from 'src/components/season/ActiveSeason/ActiveSeason'

enum MyPageTab {
  GROUP_SEASON = 'GROUP_SEASON',
  GROUP_PROGRAM = 'GROUP_PROGRAM',
  // 별모임
  // 번개
}

const MyPage = () => {
  const [tab, setTab] = useState(MyPageTab.GROUP_SEASON)
  return (
    <>
      <Metadata title="My" description="My page" />
      <PageTitle title="My">
        <MyPageSettingIcon />
      </PageTitle>
      <PageTabs
        tabs={[
          { value: MyPageTab.GROUP_SEASON, label: '시즌' },
          { value: MyPageTab.GROUP_PROGRAM, label: '본모임' },
        ]}
        selectedTab={tab}
        onSelect={(tab: MyPageTab) => setTab(tab)}
      />
      {tab === MyPageTab.GROUP_SEASON && <ActiveSeason />}
    </>
  )
}

export default MyPage
