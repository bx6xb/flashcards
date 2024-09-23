import type { Meta, StoryObj } from '@storybook/react'
import { CreateNewPassword, CreateNewPasswordFormValues } from './createNewPassword'

const meta = {
  title: 'Auth/CreateNewPassword',
  component: CreateNewPassword,
  tags: ['autodocs'],
  args: {
    onSubmit(data: CreateNewPasswordFormValues) {
      console.log(data)
    },
  },
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>

// stories

export const Primary: Story = {}
