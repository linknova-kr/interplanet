import { VStack } from '@chakra-ui/react'

import { Toaster } from '@redwoodjs/web/dist/toast'

import { PostPageQuery$data } from 'src/components/__generated__/PostPageQuery.graphql'
import ActionLayout from 'src/layouts/ActionLayout/ActionLayout'

import Comment from '../Comment/Comment'
import CommentCreate from '../CommentCreate/CommentCreate'

interface Props {
  comments: PostPageQuery$data['comments']
  postId: string
}

const Comments = ({ comments, postId }: Props) => {
  return (
    <ActionLayout
      actions={<CommentCreate postId={postId} connectionId={comments.__id} />}
    >
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <VStack width="100%" padding="10px 30px">
        {comments.edges
          .filter((c) => c.node)
          .map((comment) => (
            <Comment key={comment.node.id} comment={comment.node} />
          ))}
      </VStack>
    </ActionLayout>
  )
}

export default Comments
