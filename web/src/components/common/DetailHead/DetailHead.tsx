import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Badge, HStack, Heading } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { back } from '@redwoodjs/router'

const Container = styled.div`
  background-color: #8f97f7;
  color: #fff;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  gap: 5px;
`

interface Props {
  departmentName?: string
  action?: React.ReactNode
  label: string
  title: string
}
const DetailHead = ({ departmentName, title, label, action }: Props) => {
  return (
    <Container>
      <HStack>
        <ChevronLeftIcon boxSize={10} onClick={() => back()} />
        <Info>
          <Row>
            {departmentName && <Badge>{departmentName}</Badge>}
            <span>{label}</span>
          </Row>
          <Heading as="h5" size="md">
            {title}
          </Heading>
        </Info>
      </HStack>
      {action}
    </Container>
  )
}

export default DetailHead
