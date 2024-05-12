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

import BoardPosts from './BoardPosts'

const meta: Meta<typeof BoardPosts> = {
  component: BoardPosts,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof BoardPosts>

export const Primary: Story = {}
