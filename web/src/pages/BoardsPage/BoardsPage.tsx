import { useState } from 'react'

import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'

import { Metadata } from '@redwoodjs/web'

import { BoardsPageQuery } from 'src/components/__generated__/BoardsPageQuery.graphql'
import PageTabs from 'src/components/common/PageTabs/PageTabs'
import PageTitle from 'src/components/common/PageTitle/PageTitle'
import BoardPosts from 'src/components/post/BoardPosts/BoardPosts'
import PinnedPosts from 'src/components/post/PinnedPosts/PinnedPosts'

const QUERY = graphql`
  query BoardsPageQuery {
    boards {
      id
      nameEn
      nameKr
    }
  }
`

const BoardsPage = () => {
  const data = useLazyLoadQuery<BoardsPageQuery>(QUERY, {})

  const [boardId, setBoardId] = useState(data.boards[0].id)

  return (
    <>
      <Metadata title="Boards" description="Boards page" />
      <PageTitle title="게시판" />
      <PageTabs
        tabs={data.boards.map((board) => ({
          value: board.id,
          label: board.nameKr,
        }))}
        selectedTab={boardId}
        onSelect={(tab: string) => setBoardId(tab)}
      />
      <PinnedPosts />
      <BoardPosts boardId={boardId} />
    </>
  )
}

export default BoardsPage
