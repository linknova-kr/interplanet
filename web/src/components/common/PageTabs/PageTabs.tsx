import styled from '@emotion/styled'

interface Props {
  tabs: Array<{ value: string; label: string }>
  selectedTab: string
  onSelect: (tab: string) => void
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: 100%;
  padding: 0 30px;
`

const Tab = styled.span<{ active: boolean }>`
  ${({ active }) => active && 'text-decoration: underline; font-weight: bold;'}
  cursor: pointer;
  font-size: 30px;
`

const PageTabs = ({ tabs, selectedTab, onSelect }: Props) => {
  return (
    <Container>
      {tabs.map((tab) => (
        <Tab
          key={tab.value}
          onClick={() => onSelect(tab.value)}
          active={selectedTab === tab.value}
        >
          {tab.label}
        </Tab>
      ))}
    </Container>
  )
}

export default PageTabs
