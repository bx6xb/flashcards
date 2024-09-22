import type { Meta, StoryObj } from '@storybook/react'
import { SignIn, SignInFormValues } from './signIn'

const meta = {
  title: 'Auth/SignIn',
  component: SignIn,
  tags: ['autodocs'],
  args: {
    onSubmit(data: SignInFormValues) {
      console.log(data)
    },
  },
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

// stories

export const Primary: Story = {}
