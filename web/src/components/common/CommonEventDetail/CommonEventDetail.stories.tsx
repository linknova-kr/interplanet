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

import CommonEventDetail from './CommonEventDetail'

const meta: Meta<typeof CommonEventDetail> = {
  component: CommonEventDetail,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CommonEventDetail>

export const Primary: Story = {}
