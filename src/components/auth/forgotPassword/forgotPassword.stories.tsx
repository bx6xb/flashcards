import type { Meta, StoryObj } from '@storybook/react'
import { ForgotPassword, ForgotPasswordFormValues } from './forgotPassword'

const meta = {
  title: 'Auth/ForgotPassword',
  component: ForgotPassword,
  tags: ['autodocs'],
  args: {
    onSubmit(data: ForgotPasswordFormValues) {
      console.log(data)
    },
  },
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

// stories

export const Primary: Story = {}
