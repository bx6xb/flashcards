import type { Meta, StoryObj } from '@storybook/react'

import { Tabs } from '.'

const tabs = [
  { id: 'account', name: 'Account', content: 'Make changes to your account' },
  { id: 'documents', name: 'Documents', content: 'Access and update your documents' },
  {
    id: 'settings',
    name: 'Settings',
    content: 'Edit your profile or update contact information',
  },
]

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    tabs,
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

// stories

export const TabsExample: Story = {}

export const TabsWithOneDisabled: Story = {
  args: {
    tabs: tabs.map((t, i) => (i === 1 ? { ...t, isDisabled: true } : t)),
  },
}
