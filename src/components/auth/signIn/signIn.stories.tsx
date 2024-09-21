import type { Meta, StoryObj } from '@storybook/react'
import { SignIn } from './signIn'

const meta = {
  title: 'Auth/SignIn',
  component: SignIn,
  tags: ['autodocs'],
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

// stories

export const Primary: Story = {}
