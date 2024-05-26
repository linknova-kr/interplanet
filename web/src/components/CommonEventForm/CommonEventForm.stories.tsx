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

import CommonEventForm from './CommonEventForm'

const meta: Meta<typeof CommonEventForm> = {
  component: CommonEventForm,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CommonEventForm>

export const Primary: Story = {}
