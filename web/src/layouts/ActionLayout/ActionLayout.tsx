import styled from '@emotion/styled'

type ActionLayoutProps = {
  children: React.ReactNode
  actions: React.ReactNode
}

const ActionButtons = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  margin: 0;
  display: flex;
  gap: 8px;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
  > button {
    flex: 1;
  }
`

const Main = styled.div`
  min-height: 100vh;
  width: 100%;
`

const ActionLayout = ({ children, actions }: ActionLayoutProps) => {
  return (
    <>
      <Main>{children}</Main>
      {actions && <ActionButtons>{actions}</ActionButtons>}
    </>
  )
}

export default ActionLayout
