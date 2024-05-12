import type { Meta, StoryObj } from '@storybook/react'

import SeasonDepartmentPage from './SeasonDepartmentPage'

const meta: Meta<typeof SeasonDepartmentPage> = {
  component: SeasonDepartmentPage,
}

export default meta

type Story = StoryObj<typeof SeasonDepartmentPage>

export const Primary: Story = {}
