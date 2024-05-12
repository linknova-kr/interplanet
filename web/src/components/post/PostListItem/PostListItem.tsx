import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'

import { Link, routes } from '@redwoodjs/router'

import { formatDateYMD } from 'src/util/date'

import { PostListItemFragment$key } from '../../__generated__/PostListItemFragment.graphql'

const PostListItemFragment = graphql`
  fragment PostListItemFragment on Post {
    id
    title
    imageUrl
    commentsCount
    createdAt
    pinned
  }
`

interface Props {
  post: PostListItemFragment$key
}

const Row = styled(HStack)`
  margin: 10px 30px;
  padding: 10px;
  border-radius: 10px;
`

const PostListItem = ({ post }: Props) => {
  const fragment = useFragment<PostListItemFragment$key>(
    PostListItemFragment,
    post
  )
  return (
    <Box width="100%">
      <Link to={routes.post({ id: fragment.id })}>
        <Row bg={fragment.pinned ? '#8f97f7' : 'transparent'}>
          <div></div>
          <Stack textAlign="left" flex={1}>
            <div>{formatDateYMD(fragment.createdAt)}</div>
            <Heading as="h5" size="md">
              {fragment.title}
            </Heading>
          </Stack>
          {fragment.commentsCount >= 0 && (
            <VStack bg="#f3f5f9" borderRadius="5px" width="60px">
              <div>{fragment.commentsCount}</div>
              <div>댓글</div>
            </VStack>
          )}
        </Row>
      </Link>
    </Box>
  )
}

export default PostListItem
