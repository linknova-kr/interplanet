import { HStack, Text, VStack } from '@chakra-ui/react'

import { PostPageQuery$data } from 'src/components/__generated__/PostPageQuery.graphql'
import { formatYMDHM } from 'src/util/date'

import CommentDeleteButton from '../CommentDeleteButton/CommentDeleteButton'
import CommentUpdateButton from '../CommentUpdateButton/CommentUpdateButton'

interface Props {
  comment: PostPageQuery$data['comments']['edges'][0]['node']
}

const Comment = ({ comment }: Props) => {
  return (
    <HStack justifyContent="space-between" width="100%" padding="5px 0">
      <VStack alignItems="start">
        <Text fontSize="xs">{comment.user.nickname}</Text>
        <Text fontSize="xs">{comment.content}</Text>
        <Text fontSize="xs">{formatYMDHM(comment.createdAt)}</Text>
      </VStack>
      {comment.isMine && (
        <HStack>
          <CommentUpdateButton comment={comment} />
          <CommentDeleteButton id={comment.id} />
        </HStack>
      )}
    </HStack>
  )
}

export default Comment
