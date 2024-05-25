import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'

import { routes } from '@redwoodjs/router'

import { SpotEventListItemFragment$key } from 'src/components/__generated__/SpotEventListItemFragment.graphql'
import CommonListItem from 'src/components/common/CommonListItem/CommonListItem'

const SpotEventListItemFragment = graphql`
  fragment SpotEventListItemFragment on SpotEvent {
    id
    title
    imageUrl
    addressSimple
    startsAt
  }
`

interface Props {
  spotEvent: SpotEventListItemFragment$key
}

const SpotEventListItem = ({ spotEvent }: Props) => {
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
    />
  )
}

export default SpotEventListItem
