import type { Meta, StoryObj } from '@storybook/react'
import { Tab, Tabs } from '.'

const onClick = (label: string) => {
  alert(`Tab - ${label}`)
}

const tabs: Tab[] = [
  { label: 'Account', content: 'Make changes to your account', onClick },
  {
    label: 'Documents',
    content: 'Access and update your documents',
    onClick,
  },
  {
    label: 'Settings',
    content: 'Edit your profile or update contact information',
    onClick,
  },
  {
    label: 'With no content',
    onClick,
  },
]

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    tabs,
    defaultActiveLabel: tabs[1].label,
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
