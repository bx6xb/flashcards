import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '.'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputExample: Story = {
  args: {
    disabled: true,
    placeholder: 'zenow',
    value: 'zenow',
    error: '',
  },
}
