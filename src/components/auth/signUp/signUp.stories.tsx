import type { Meta, StoryObj } from '@storybook/react'
import { SignUp, SignUpFormValues } from './signUp'

const meta = {
  title: 'Auth/SignUp',
  component: SignUp,
  tags: ['autodocs'],
  args: {
    onSubmit(data: SignUpFormValues) {
      console.log(data)
    },
  },
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

// stories

export const Primary: Story = {}
