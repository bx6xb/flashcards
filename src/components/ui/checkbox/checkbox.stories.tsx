import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '.'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    label: 'Label for checkbox',
    checked: false,
    disabled: false,
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

// stories

export const CheckboxExample: Story = {
  args: {
    label: 'Label for checkbox',
  },
}
export const CheckedCheckbox: Story = {
  args: {
    label: 'Label for checkbox',
    checked: true,
  },
}
export const DisabledCheckbox: Story = {
  args: {
    disabled: true,
    label: 'Label for disabled checkbox',
  },
}
export const DisabledAndCheckedCheckbox: Story = {
  args: {
    disabled: true,
    label: 'Label for disabled checkbox',
    checked: true,
  },
}
