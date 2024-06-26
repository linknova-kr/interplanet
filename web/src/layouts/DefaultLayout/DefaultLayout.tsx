import { Container } from '@chakra-ui/react'
import styled from '@emotion/styled'

type DefaultLayoutProps = {
  children?: React.ReactNode
  nav?: React.ReactNode
}

const Layout = styled(Container)`
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: #f3f5f9;
  width: 100%;
  text-align: center;
`

const Main = styled.main<{ hasNav: boolean }>`
  ${({ hasNav }) =>
    hasNav ? 'min-height: calc(100vh - 70px);' : 'min-height: 100vh;'}
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DefaultLayout = ({ children, nav }: DefaultLayoutProps) => {
  return (
    <Layout>
      <Main hasNav={Boolean(nav)}>{children}</Main>
      {nav}
    </Layout>
  )
}

export default DefaultLayout
