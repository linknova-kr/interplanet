import styled from '@emotion/styled'

import { Link, routes } from '@redwoodjs/router'

import DefaultLayout from '../DefaultLayout/DefaultLayout'

type AuthenticatedLayoutProps = {
  children?: React.ReactNode
}

const BottomNav = styled.nav`
  background-color: #fff;
  position: sticky;
  width: 100%;
  bottom: 0;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const NavItem = styled(Link)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AuthenticatedLayout = ({ children }: AuthenticatedLayoutProps) => {
  return (
    <DefaultLayout
      nav={
        <BottomNav>
          <NavItem to={routes.home()}>모임</NavItem>
          <NavItem to={routes.home()}>게시판</NavItem>
          <NavItem to={routes.my()}>MY</NavItem>
        </BottomNav>
      }
    >
      {children}
    </DefaultLayout>
  )
}

export default AuthenticatedLayout
