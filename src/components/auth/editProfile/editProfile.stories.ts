import type { Meta, StoryObj } from '@storybook/react'
import { EditProfile } from './editProfile'
import { EditProfileFormValues } from './editProfileForm/editProfileForm'

const meta = {
  title: 'Auth/EditProfile',
  component: EditProfile,
  tags: ['autodocs'],
  args: {
    avatar: 'https://avatar.iran.liara.run/public/2',
    nickname: 'YanTurnt',
    email: 'j&johnson@gmail.com',
    onAvatarChange() {
      alert('Avatar change')
    },
    onLogoutClick() {
      alert('Logout')
    },
    onSubmit(data: EditProfileFormValues) {
      console.log(data)
    },
  },
} satisfies Meta<typeof EditProfile>

export default meta
type Story = StoryObj<typeof meta>

// stories
export const Primary: Story = {}
