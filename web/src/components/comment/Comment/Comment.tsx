import { HStack, Text, VStack } from '@chakra-ui/react'
import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'

import { CommentItemFragment$key } from 'src/components/__generated__/CommentItemFragment.graphql'
import { formatYMDHM } from 'src/util/date'

import CommentDeleteButton from '../CommentDeleteButton/CommentDeleteButton'
import CommentUpdateButton from '../CommentUpdateButton/CommentUpdateButton'

const CommentItemFragment = graphql`
  fragment CommentItemFragment on Comment {
    id
    content
    createdAt
    updatedAt
    isMine
    user {
      nickname
    }
  }
`

interface Props {
  comment: CommentItemFragment$key
}

const Comment = ({ comment }: Props) => {
  const fragment = useFragment<CommentItemFragment$key>(
    CommentItemFragment,
    comment
  )
  return (
    <HStack justifyContent="space-between" width="100%" padding="5px 0">
      <VStack alignItems="start">
        <Text fontSize="xs">{fragment.user.nickname}</Text>
        <Text fontSize="xs">{fragment.content}</Text>
        <Text fontSize="xs">{formatYMDHM(fragment.createdAt)}</Text>
      </VStack>
      {fragment.isMine && (
        <HStack>
          <CommentUpdateButton comment={fragment} />
          <CommentDeleteButton id={fragment.id} />
        </HStack>
      )}
    </HStack>
  )
}

export default Comment
