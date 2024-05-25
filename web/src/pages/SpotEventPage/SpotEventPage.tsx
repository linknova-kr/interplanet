import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'

import { Redirect } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/dist/toast'

import { SpotEventPageQuery } from 'src/components/__generated__/SpotEventPageQuery.graphql'
import CommonEventDetail from 'src/components/common/CommonEventDetail/CommonEventDetail'
import DetailHead from 'src/components/common/DetailHead/DetailHead'
import PageTitle from 'src/components/common/PageTitle/PageTitle'
import SpotEventPageButton from 'src/components/spot-event/SpotEventPageButton/SpotEventPageButton'
import UserMessage from 'src/components/user/UserMessage/UserMessage'
import ActionLayout from 'src/layouts/ActionLayout/ActionLayout'
import { formatDate } from 'src/util/date'

const QUERY = graphql`
  query SpotEventPageQuery($id: ID!) {
    spotEvent(id: $id) {
      __typename
      ... on NotFoundError {
        message
      }
      ... on SpotEvent {
        id
        title
        description
        imageUrl
        address
        addressSimple
        startsAt
        endsAt
        userSpotEvents(first: 10000)
          @connection(key: "SpotEvent_userSpotEvents") {
          edges {
            node {
              id
              user {
                realName
                nickname
              }
              comment
            }
          }
        }
        my {
          id
        }
      }
    }
  }
`

interface Props {
  id: string
}

const SpotEventPage = ({ id }: Props) => {
  const data = useLazyLoadQuery<SpotEventPageQuery>(QUERY, { id })
  if (data.spotEvent.__typename !== 'SpotEvent') {
    return <Redirect to="/not-found" />
  }
  const isAfter = new Date(data.spotEvent.startsAt) < new Date()
  return (
    <>
      <Metadata title="SpotEvent" description="SpotEvent page" />
      <PageTitle title="벙개 상세" />
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <ActionLayout
        actions={
          isAfter ? null : <SpotEventPageButton spotEvent={data.spotEvent} />
        }
      >
        <DetailHead
          label={`${formatDate(data.spotEvent.startsAt)} ${
            data.spotEvent.addressSimple
          } `}
          title={data.spotEvent.title}
        />
        <CommonEventDetail
          description={data.spotEvent.description}
          startsAt={data.spotEvent.startsAt}
          endsAt={data.spotEvent.endsAt}
          address={data.spotEvent.address}
          usersDOM={
            <div>
              {data.spotEvent.userSpotEvents.edges.map(({ node }) => (
                <UserMessage
                  user={node.user}
                  message={node.comment}
                  key={node.id}
                />
              ))}
            </div>
          }
        />
      </ActionLayout>
    </>
  )
}

export default SpotEventPage
