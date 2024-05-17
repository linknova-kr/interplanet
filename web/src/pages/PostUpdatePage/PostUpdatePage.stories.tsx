import type { Meta, StoryObj } from '@storybook/react'

import PostUpdatePage from './PostUpdatePage'

const meta: Meta<typeof PostUpdatePage> = {
  component: PostUpdatePage,
}

export default meta

type Story = StoryObj<typeof PostUpdatePage>

export const Primary: Story = {}
