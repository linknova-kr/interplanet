import { HamburgerIcon } from '@chakra-ui/icons'
import {
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from '@chakra-ui/react'

import { PostPageQuery$data } from 'src/components/__generated__/PostPageQuery.graphql'
import { formatYMDHM } from 'src/util/date'

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
        <Menu>
          <MenuButton as={IconButton} icon={<HamburgerIcon />} />
          <MenuList>
            <MenuItem>수정하기</MenuItem>
            <MenuItem>삭제하기</MenuItem>
          </MenuList>
        </Menu>
      )}
    </HStack>
  )
}

export default Comment
