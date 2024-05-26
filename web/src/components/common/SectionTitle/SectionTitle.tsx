import styled from '@emotion/styled'

interface Props {
  title: string
}

const Title = styled.div`
  border-radius: 10px;
  background-color: #8f97f7;
  padding: 10px;
  margin: 10px 20px;
  color: white;
  font-weight: 600;
`

const SectionTitle = ({ title }: Props) => {
  return <Title>{title}</Title>
}

export default SectionTitle
