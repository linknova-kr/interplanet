import { SettingsIcon } from '@chakra-ui/icons'
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'

import { useAuth } from 'src/auth'

const MyPageSettingIcon = () => {
  const { logOut } = useAuth()
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<SettingsIcon />} />
      <MenuList>
        <MenuItem onClick={() => logOut()}>로그아웃</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default MyPageSettingIcon
