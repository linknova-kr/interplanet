import { Metadata } from '@redwoodjs/web'

import ActiveSeason from 'src/components/ActiveSeason/ActiveSeason'
import MyPageSettingIcon from 'src/components/MyPageSettingIcon/MyPageSettingIcon'

const MyPage = () => {
  return (
    <>
      <Metadata title="My" description="My page" />
      <MyPageSettingIcon />
      <ActiveSeason />
    </>
  )
}

export default MyPage
