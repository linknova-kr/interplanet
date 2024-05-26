// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import SpotEventListItemButtons from './SpotEventListItemButtons'

const meta: Meta<typeof SpotEventListItemButtons> = {
  component: SpotEventListItemButtons,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SpotEventListItemButtons>

export const Primary: Story = {}
