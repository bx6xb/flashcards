import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './select'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    placeholder: 'Select-box',
    items: [
      {
        label: '1',
        value: '1',
      },
      {
        label: '2',
        value: '2',
      },
      {
        label: '3',
        value: '3',
      },
    ],
    label: 'Select-box',
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

// stories
export const SelectBaseExample: Story = {}
export const DisabledSelect: Story = {
  args: {
    disabled: true,
  },
}
