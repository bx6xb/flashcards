import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './avatar'
import defaultAvatar from '../../../assets/defaultAvatar.png'

const meta = {
  title: 'Auth/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: defaultAvatar,
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

// stories
export const Primary: Story = {}
