import { Heading } from '@chakra-ui/react'
import styled from '@emotion/styled'

interface Props {
  title: string
  children?: React.ReactNode
}

const Container = styled.div`
  width: 100%;
  text-align: left;
  padding: 15px 30px 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const PageTitle = ({ title, children }: Props) => {
  return (
    <Container>
      <Heading as="h1" size="lg" mb={4}>
        {title}
      </Heading>
      {children}
    </Container>
  )
}

export default PageTitle
