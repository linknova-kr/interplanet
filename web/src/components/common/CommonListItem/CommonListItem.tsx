import { Badge, Heading } from '@chakra-ui/react'
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
}

const Row = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
`

const Container = styled(Link)`
  width: 100%;
  margin-left: 30px;
  margin-bottom: 5px;
  height: 100px;
  display: flex;
  flex-direction: row;
`

const Image = styled.div`
  width: 100px;
  border-radius: 10px;
  background-color: #eee;
  margin-right: 10px;
`

const CommonListItem = ({
  id,
  // imageUrl,
  badge,
  title,
  addressSimple,
  startsAt,
  routeTo,
}: Props) => {
  return (
    <Container key={id} to={routeTo}>
      <Image></Image>
      <div>
        {badge && <Badge>{badge}</Badge>}
        <Heading as="h4" size="md">
          {title}
        </Heading>
        <Row>
          <p>{formatDate(startsAt)}</p>
          <p>{addressSimple}</p>
        </Row>
      </div>
    </Container>
  )
}

export default CommonListItem
