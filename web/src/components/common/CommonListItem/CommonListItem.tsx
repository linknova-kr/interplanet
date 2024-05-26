import { Badge, HStack, Heading, VStack } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { Link } from '@redwoodjs/router'

import { formatDate } from 'src/util/date'

interface Props {
  id: string
  imageUrl: string
  badge?: string
  title: string
  addressSimple: string
  startsAt: any
  routeTo: string
  buttons?: React.ReactNode
}

const Row = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
  font-size: 14px;
`

const Container = styled(Link)`
  width: 100%;
  padding: 0 20px;
  margin-bottom: 5px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Image = styled.div`
  width: 60px;
  border-radius: 10px;
  background-color: #eee;
  margin-right: 10px;
  height: 60px;
`

const CommonListItem = ({
  id,
  // imageUrl,
  badge,
  title,
  addressSimple,
  startsAt,
  routeTo,
  buttons,
}: Props) => {
  return (
    <Container key={id} to={routeTo}>
      <HStack justifyContent="start">
        <Image></Image>
        <VStack textAlign="left" alignItems="start">
          {badge && <Badge>{badge}</Badge>}
          <Heading as="h6" size="sm">
            {title}
          </Heading>
          <Row>
            <p>{formatDate(startsAt)}</p>
            <p>{addressSimple}</p>
          </Row>
        </VStack>
      </HStack>
      {buttons && <HStack>{buttons}</HStack>}
    </Container>
  )
}

export default CommonListItem
