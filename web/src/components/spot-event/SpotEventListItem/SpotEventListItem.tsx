import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'

import { routes } from '@redwoodjs/router'

import { SpotEventListItemFragment$key } from 'src/components/__generated__/SpotEventListItemFragment.graphql'
import CommonListItem from 'src/components/common/CommonListItem/CommonListItem'

import SpotEventListItemButtons from '../SpotEventListItemButtons/SpotEventListItemButtons'

const SpotEventListItemFragment = graphql`
  fragment SpotEventListItemFragment on SpotEvent {
    id
    title
    imageUrl
    addressSimple
    startsAt
    iMade
    my {
      id
    }
  }
`

interface Props {
  spotEvent: SpotEventListItemFragment$key
  buttonEnabled?: {
    connectionId: string
  }
}

const SpotEventListItem = ({ spotEvent, buttonEnabled }: Props) => {
  const fragment = useFragment<SpotEventListItemFragment$key>(
    SpotEventListItemFragment,
    spotEvent
  )
  return (
    <CommonListItem
      id={fragment.id}
      imageUrl={fragment.imageUrl}
      title={fragment.title}
      addressSimple={fragment.addressSimple}
      startsAt={fragment.startsAt}
      routeTo={routes.spotEvent({ id: fragment.id })}
      buttons={
        buttonEnabled && (
          <SpotEventListItemButtons
            spotEvent={fragment}
            connectionId={buttonEnabled.connectionId}
          />
        )
      }
    />
  )
}

export default SpotEventListItem
