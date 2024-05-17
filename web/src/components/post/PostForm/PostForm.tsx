import { VStack } from '@chakra-ui/react'

import { Label, TextAreaField, TextField } from '@redwoodjs/forms'

interface Props {
  defaultValue?: {
    title: string
    content: string
  }
}

const PostForm = ({ defaultValue }: Props) => {
  return (
    <VStack>
      {/* 이미지 */}
      <Label name="title" htmlFor="title">
        제목
      </Label>
      <TextField name="title" defaultValue={defaultValue?.title} />

      <Label name="content" htmlFor="content">
        내용
      </Label>
      <TextAreaField name="content" defaultValue={defaultValue?.content} />
    </VStack>
  )
}

export default PostForm
