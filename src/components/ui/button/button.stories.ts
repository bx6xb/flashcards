import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// stories

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    disabled: false,
  },
}
export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    disabled: true,
  },
}
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
    disabled: false,
  },
}
export const SecondaryDisabled: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
    disabled: true,
  },
}
export const FullWidth: Story = {
  args: {
    variant: 'primary',
    children: 'Full Width Primary Button',
    disabled: false,
    fullWidth: true,
  },
}
export const AsLink: Story = {
  args: {
    variant: 'primary',
    children: 'Link that looks like a button',
    as: 'a',
  },
}
