import { Avatar } from '@/components/auth/avatar'
import { Button } from '@/components/ui/button'
import { Dropdown } from '@/components/ui/dropdown'
import { Icon } from '@/components/ui/icon'
import { Typography } from '@/components/ui/typography'
import { useMeQuery } from '@/services/flashcardsApi'
import s from './userData.module.scss'

const SignInButton = <Button variant="secondary">Sign In</Button>

export const UserData = () => {
  const { data, isLoading, error } = useMeQuery()

  if (isLoading) {
    return SignInButton
  }

  if (error) {
    console.error(error)
    return null
  }

  console.log(data)

  const { avatar: avatarUrl, email, name, isEmailVerified } = data!

  if (!isEmailVerified) {
    return SignInButton
  }

  const avatar = <Avatar src={avatarUrl} />

  const options = [
    <div className={s.option}>
      {avatar}
      <div>
        <Typography variant="subtitle-2">{name}</Typography>
        <Typography variant="caption">{email}</Typography>
      </div>
    </div>,
    <div className={s.option}>
      <Icon id="person-outline" width={16} height={16} viewBox="0 0 22 22" />
      My Profile
    </div>,
    <div className={s.option}>
      <Icon id="log-out" width={16} height={16} viewBox="0 0 22 22" />
      Sign Out
    </div>,
  ]

  return (
    <div>
      <Typography variant="subtitle-1">{name}</Typography>
      <Dropdown iconButton={avatar} options={options} />
    </div>
  )
}
