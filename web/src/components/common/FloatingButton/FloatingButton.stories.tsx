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

import FloatingButton from './FloatingButton'

const meta: Meta<typeof FloatingButton> = {
  component: FloatingButton,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof FloatingButton>

export const Primary: Story = {}
