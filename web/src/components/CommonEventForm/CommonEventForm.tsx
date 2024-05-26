import styled from '@emotion/styled'

import {
  DatetimeLocalField,
  Label,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'

import { formatT } from 'src/util/date'

interface Props {
  defaultValues?: Record<string, any>
}

const Title = styled(Label)`
  margin-top: 16px;
  font-weight: bold;
  display: block;
`

const CommonEventForm = ({ defaultValues }: Props) => {
  return (
    <>
      <Title
        name="startsAt"
        htmlFor="startsAt"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        시작일시
      </Title>
      <DatetimeLocalField
        validation={{ required: true }}
        defaultValue={
          defaultValues?.startsAt && formatT(defaultValues?.startsAt)
        }
        name="startsAt"
        className="rw-input"
        errorClassName="rw-input rw-input-error"
      />

      <Title
        name="endsAt"
        htmlFor="endsAt"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        종료일시
      </Title>
      <DatetimeLocalField
        validation={{ required: true }}
        defaultValue={defaultValues?.endsAt && formatT(defaultValues?.endsAt)}
        name="endsAt"
        className="rw-input"
        errorClassName="rw-input rw-input-error"
      />

      <Title
        name="address"
        htmlFor="address"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        장소
      </Title>
      <TextField
        validation={{ required: true }}
        defaultValue={defaultValues?.addressSimple}
        name="addressSimple"
        placeholder="대표주소"
        style={{ marginBottom: 5 }}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
      />
      <TextField
        validation={{ required: true }}
        defaultValue={defaultValues?.address}
        name="address"
        placeholder="상세주소"
        className="rw-input"
        errorClassName="rw-input rw-input-error"
      />

      <Title
        name="description"
        htmlFor="description"
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        모임 설명
      </Title>
      <TextAreaField
        validation={{ required: true }}
        defaultValue={defaultValues?.description}
        name="description"
        className="rw-input"
        errorClassName="rw-input rw-input-error"
      />
    </>
  )
}

export default CommonEventForm
