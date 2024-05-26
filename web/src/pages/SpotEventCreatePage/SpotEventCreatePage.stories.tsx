import type { Meta, StoryObj } from '@storybook/react'

import SpotEventCreatePage from './SpotEventCreatePage'

const meta: Meta<typeof SpotEventCreatePage> = {
  component: SpotEventCreatePage,
}

export default meta

type Story = StoryObj<typeof SpotEventCreatePage>

export const Primary: Story = {}
