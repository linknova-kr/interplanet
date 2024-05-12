import { Card, CardBody, CardHeader, Heading } from '@chakra-ui/react'

interface Props {
  header: string
  title: string
  children: React.ReactNode
}

const FormCard = ({ header, title, children }: Props) => {
  return (
    <>
      <Heading size="sm" as="h4">
        {header}
      </Heading>
      <Card border="1px solid #fafafa" mt={5} mb={5}>
        <CardHeader>{title}</CardHeader>
        <CardBody bgColor="#eee" h="50px" minH="50px">
          {children}
        </CardBody>
      </Card>
    </>
  )
}

export default FormCard
