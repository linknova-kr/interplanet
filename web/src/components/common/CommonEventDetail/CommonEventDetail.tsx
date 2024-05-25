import styled from '@emotion/styled'

import { formatHMM } from 'src/util/date'

interface Props {
  description: string
  startsAt: any
  endsAt: any
  address: string
  usersDOM: React.ReactNode
}

const Container = styled.div`
  text-align: left;
  padding: 30px;
`

const Label = styled.span`
  color: #8f97f7;
  margin-right: 5px;
`

const CommonEventDetail = ({
  description,
  startsAt,
  endsAt,
  address,
  usersDOM,
}: Props) => {
  return (
    <Container>
      <p>{description}</p>
      <div>
        <Label>모임시간</Label>
        {formatHMM(startsAt)} ~{formatHMM(endsAt)}
      </div>
      <div>
        <Label>모임장소</Label>
        {address}
      </div>
      <br />
      <Label>참여멤버</Label>
      {usersDOM}
    </Container>
  )
}

export default CommonEventDetail
