import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import s from './editProfile.module.scss'
import { Avatar } from '../avatar'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Icon } from '@/components/ui/icon'
import { EditProfileForm, EditProfileFormValues } from './editProfileForm'

export type EditProfileProps = {
  avatar: string
  nickname: string
  email: string
  onAvatarChange: () => void
  onLogoutClick: () => void
  onSubmit: (data: EditProfileFormValues) => void
}

export const EditProfile = (props: EditProfileProps) => {
  const { avatar, nickname, email, onAvatarChange, onLogoutClick, onSubmit } = props

  const [isEditMode, setIsEditMode] = useState(false)

  const toggleIsEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  const onNicknameFormSubmit = (data: EditProfileFormValues) => {
    setIsEditMode(!isEditMode)
    onSubmit(data)
  }

  return (
    <Card className={s.editProfile}>
      <Typography variant="h1">Personal Information</Typography>

      <div className={s.avatarWrapper}>
        <Avatar src={avatar} className={s.avatar} />

        {!isEditMode && (
          <Button
            variant="secondary"
            icon={{
              id: 'edit-2-outline',
            }}
            className={s.button}
            onClick={onAvatarChange}
          />
        )}
      </div>

      {isEditMode ? (
        <EditProfileForm onSubmit={onNicknameFormSubmit} />
      ) : (
        <>
          <div className={s.nickname}>
            <Typography variant="h2">{nickname}</Typography>
            <Icon
              id="edit-2-outline"
              width={16}
              height={16}
              viewBox="0 0 22 22"
              onClick={toggleIsEditMode}
            />
          </div>

          <Typography variant="body-2" className={s.email}>
            {email}
          </Typography>

          <Button
            variant="secondary"
            icon={{
              id: 'log-out',
            }}
            onClick={onLogoutClick}
            className={s.logout}
          >
            Logout
          </Button>
        </>
      )}
    </Card>
  )
}
