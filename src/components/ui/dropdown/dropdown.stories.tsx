import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './dropdown'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  args: {
    options: [
      <>
        New Tab <div>⌘+T</div>
      </>,
      <>
        New Window <div>⌘+N</div>
      </>,
    ],
    iconButton: (
      <button>
        <HamburgerMenuIcon />
      </button>
    ),
  },
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

// stories

export const DropdownExample: Story = {
  render(args) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Dropdown {...args} />
      </div>
    )
  },
}
