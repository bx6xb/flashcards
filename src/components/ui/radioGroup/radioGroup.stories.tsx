import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup } from './radioGroup'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  args: {
    items: [
      {
        value: 'Option 1',
      },
      {
        value: 'Option 2',
      },
      {
        value: 'Option 3',
      },
    ],
    onValueChange(value: string) {
      alert(value)
    },
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

// stories
export const RadioGroupBaseExample: Story = {}
export const WithDisabledRadio: Story = {
  args: {
    items: [
      {
        value: 'Option 1',
      },
      {
        value: 'Option 2',
        disabled: true,
      },
      {
        value: 'Option 3',
      },
    ],
  },
}
