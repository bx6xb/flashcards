import type { Meta, StoryObj } from '@storybook/react'
import { Tab, Tabs } from '.'

const onTabClick = (label: string) => {
  alert(`Tab - ${label}`)
}

const tabs: Tab[] = [
  { label: 'Account', content: 'Make changes to your account' },
  {
    label: 'Documents',
    content: 'Access and update your documents',
  },
  {
    label: 'Settings',
    content: 'Edit your profile or update contact information',
  },
  {
    label: 'With no content',
  },
]

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    tabs,
    defaultValue: tabs[1].label,
    onTabClick,
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
