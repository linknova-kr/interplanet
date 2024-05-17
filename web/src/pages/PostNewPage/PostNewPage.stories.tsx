import type { Meta, StoryObj } from '@storybook/react'

import PostNewPage from './PostNewPage'

const meta: Meta<typeof PostNewPage> = {
  component: PostNewPage,
}

export default meta

type Story = StoryObj<typeof PostNewPage>

export const Primary: Story = {}
