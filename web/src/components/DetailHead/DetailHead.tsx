import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Badge, Heading } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { back } from '@redwoodjs/router'

const Container = styled.div`
  background-color: #8f97f7;
  color: #fff;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  text-align: left;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  gap: 5px;
`

interface Props {
  departmentName: string
  dateLabel: string
  address?: string
  title: string
}
const DetailHead = ({ departmentName, dateLabel, address, title }: Props) => {
  return (
    <Container>
      <ChevronLeftIcon boxSize={10} onClick={() => back()} />
      <Info>
        <Row>
          <Badge>{departmentName}</Badge>
          <span>{dateLabel}</span>
          {address && <span>{address}</span>}
        </Row>
        <Heading as="h5" size="md">
          {title}
        </Heading>
      </Info>
    </Container>
  )
}

export default DetailHead
