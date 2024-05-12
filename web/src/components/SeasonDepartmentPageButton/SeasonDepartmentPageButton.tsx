import { useState } from 'react'

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import { useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'

import { Form, RadioField } from '@redwoodjs/forms'
import { back } from '@redwoodjs/router'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { SeasonDepartmentPageQuery$data } from '../__generated__/SeasonDepartmentPageQuery.graphql'
import FormCard from '../FormCard/FormCard'

interface Props {
  seasonDepartment: {
    __typename: 'SeasonDepartment'
  } & SeasonDepartmentPageQuery$data['seasonDepartment']
}

const CREATE = graphql`
  mutation SeasonDepartmentPageButtonCreateMutation(
    $input: CreateUserSeasonDepartmentGroupInput!
  ) {
    createUserSeasonDepartmentGroup(input: $input) {
      __typename
      ... on UserSeasonDepartmentGroup {
        id
        seasonDepartment {
          my {
            id
            status
          }
        }
      }
      ... on AlreadyExistsError {
        message
      }
      ... on NotFoundError {
        message
      }
    }
  }
`

enum ButtonStep {
  FORM,
  DEPOSIT_CONFIRM,
}

enum DepositConfirmValue {
  YES = 'yes',
  NO = 'no',
}

const SeasonDepartmentPageButton = ({ seasonDepartment }: Props) => {
  const [create] = useMutation(CREATE)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [step, setStep] = useState(ButtonStep.FORM)
  const [depositConfirm, setDepositConfirm] = useState(DepositConfirmValue.YES)

  const onSubmit = (data) => {
    if (!data.seasonGroupId) {
      toast.error('소속을 선택해주세요.')
      return
    }
    if (step === ButtonStep.FORM) {
      setStep(ButtonStep.DEPOSIT_CONFIRM)
    } else {
      create({
        variables: {
          input: {
            seasonDepartmentId: seasonDepartment.id,
            seasonGroupId: data.seasonGroupId,
          },
        },
        onCompleted: () => {
          toast.success('시즌 등록 신청이 완료되었습니다.')
          onClose()
          back()
        },
      })
    }
  }

  return (
    <>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="bottom">
        <DrawerOverlay />
        <DrawerContent>
          <Form onSubmit={onSubmit}>
            {step === ButtonStep.FORM ? (
              <>
                <DrawerBody p="30px">
                  <FormCard header="옵션선택(필수)" title="소속 선택(택1)">
                    <RadioGroup name="group">
                      <Stack direction="column">
                        {seasonDepartment.seasonGroups.map((group) => (
                          <div key={group.id}>
                            <RadioField
                              key={group.id}
                              value={group.id}
                              name="seasonGroupId"
                            />
                            {` ${group.group.name}`}
                          </div>
                        ))}
                      </Stack>
                    </RadioGroup>
                  </FormCard>
                  {/* 영어 선택 */}
                </DrawerBody>
                <DrawerFooter>
                  <Button w="100%" type="submit">
                    시즌 등록하기
                  </Button>
                </DrawerFooter>
              </>
            ) : (
              <>
                <DrawerBody p="30px">
                  <FormCard
                    header="옵션선택(필수)"
                    title="예치금 입금은 필수입니다. 입금 완료하셨나요?"
                  >
                    <RadioGroup
                      onChange={(v) =>
                        setDepositConfirm(v as DepositConfirmValue)
                      }
                      value={depositConfirm}
                    >
                      <Stack direction="column">
                        <Radio value={DepositConfirmValue.YES}>예</Radio>
                        <Radio value={DepositConfirmValue.NO}>아니오</Radio>
                      </Stack>
                    </RadioGroup>
                  </FormCard>
                </DrawerBody>
                <DrawerFooter>
                  <Button
                    w="100%"
                    type="submit"
                    isDisabled={depositConfirm != DepositConfirmValue.YES}
                  >
                    시즌 등록하기
                  </Button>
                </DrawerFooter>
              </>
            )}
          </Form>
        </DrawerContent>
      </Drawer>
      <Button onClick={onOpen}>시즌 등록하기</Button>
    </>
  )
}

export default SeasonDepartmentPageButton
