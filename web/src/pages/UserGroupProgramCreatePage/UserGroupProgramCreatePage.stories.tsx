import type { Meta, StoryObj } from '@storybook/react'

import UserGroupProgramCreatePage from './UserGroupProgramCreatePage'

const meta: Meta<typeof UserGroupProgramCreatePage> = {
  component: UserGroupProgramCreatePage,
}

export default meta

type Story = StoryObj<typeof UserGroupProgramCreatePage>

export const Primary: Story = {}
