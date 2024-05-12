import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Heading,
  RadioGroup,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'

import { Form, RadioField } from '@redwoodjs/forms'

import { SeasonDepartmentPageQuery$data } from '../__generated__/SeasonDepartmentPageQuery.graphql'

interface Props {
  seasonDepartment: {
    __typename: 'SeasonDepartment'
  } & SeasonDepartmentPageQuery$data['seasonDepartment']
}

const SeasonDepartmentPageButton = ({ seasonDepartment }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} placement="bottom">
        <DrawerOverlay />
        <DrawerContent>
          <Form>
            <DrawerBody p="30px">
              <Heading size="sm" as="h4">
                옵션선택(필수)
              </Heading>
              <Card border="1px solid #fafafa" mt={5} mb={5}>
                <CardHeader>소속 선택(택1)</CardHeader>
                <CardBody bgColor="#eee" h="50px" minH="50px">
                  <RadioGroup name="group">
                    <Stack direction="column">
                      {seasonDepartment.seasonGroups.map((group) => (
                        <div key={group.id}>
                          <RadioField
                            key={group.id}
                            value={group.id}
                            name="group"
                          />
                          {` ${group.group.name}`}
                        </div>
                      ))}
                    </Stack>
                  </RadioGroup>
                </CardBody>
              </Card>
              {/* 영어 선택 */}
            </DrawerBody>
            <DrawerFooter>
              <Button w="100%" type="submit" onClick={onClose}>
                취소
              </Button>
            </DrawerFooter>
          </Form>
        </DrawerContent>
      </Drawer>
      <Button onClick={onOpen}>시즌 등록하기</Button>
    </>
  )
}

export default SeasonDepartmentPageButton
