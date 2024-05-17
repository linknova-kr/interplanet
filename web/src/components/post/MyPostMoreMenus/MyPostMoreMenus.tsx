import { HamburgerIcon } from '@chakra-ui/icons'
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'

import { navigate, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/dist/toast'

import MyPostDeleteButton from '../MyPostDeleteButton/MyPostDeleteButton'

interface Props {
  id: string
}

const MyPostMoreMenus = ({ id }: Props) => {
  return (
    <>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <Menu>
        <MenuButton as={IconButton} icon={<HamburgerIcon />} />
        <MenuList>
          <MenuItem
            color="black"
            onClick={() => navigate(routes.postUpdate({ id }))}
          >
            수정
          </MenuItem>
          <MyPostDeleteButton id={id} />
        </MenuList>
      </Menu>
    </>
  )
}

export default MyPostMoreMenus
