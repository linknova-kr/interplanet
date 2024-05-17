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

import CommentDeleteButton from './CommentDeleteButton'

const meta: Meta<typeof CommentDeleteButton> = {
  component: CommentDeleteButton,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CommentDeleteButton>

export const Primary: Story = {}
