import { Button, VStack } from '@chakra-ui/react'

import { PostPageQuery$data } from 'src/components/__generated__/PostPageQuery.graphql'
import ActionLayout from 'src/layouts/ActionLayout/ActionLayout'

import Comment from '../Comment/Comment'

interface Props {
  comments: PostPageQuery$data['comments']
}

const Comments = ({ comments }: Props) => {
  return (
    <ActionLayout actions={<Button>댓글달기</Button>}>
      <VStack width="100%" padding="10px 30px">
        {comments.edges.map((comment) => (
          <Comment key={comment.node.id} comment={comment.node} />
        ))}
      </VStack>
    </ActionLayout>
  )
}

export default Comments
