import styled from '@emotion/styled'

interface Props {
  user: {
    realName: string
    nickname: string
  }
  message: string
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
`

const Image = styled.div`
  width: 50px;
  height: 50px;
  background-color: #aaa;
  border-radius: 10px;
`

const UserMessage = ({ user, message }: Props) => {
  return (
    <Container>
      <Image />
      <Info>
        {user.realName}-{user.nickname}
        <br />
        {message}
      </Info>
    </Container>
  )
}

export default UserMessage
