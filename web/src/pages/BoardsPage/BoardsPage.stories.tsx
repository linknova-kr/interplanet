import type { Meta, StoryObj } from '@storybook/react'

import BoardsPage from './BoardsPage'

const meta: Meta<typeof BoardsPage> = {
  component: BoardsPage,
}

export default meta

type Story = StoryObj<typeof BoardsPage>

export const Primary: Story = {}
