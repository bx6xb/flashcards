import s from './header.module.scss'
import { Icon } from '../../ui/icon'
import { Dropdown } from '@/components/ui/dropdown'
import { Avatar } from '@/components/auth/avatar'
import defaultAvatar from '../../../assets/defaultAvatar.png'
import { Typography } from '@/components/ui/typography'
import { Container } from '@/components/ui/container'

export const Header = () => {
  const avatar = <Avatar src={defaultAvatar} />
  const username = 'Zenow'
  const email = 'zenow@gmail.com'

  const options = [
    <div className={s.option}>
      {avatar}
      <div>
        <Typography variant="subtitle-2">{username}</Typography>
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
    <header className={s.header}>
      <Container>
        <div className={s.headerContent}>
          <Icon id="logo" width={157} height={36} viewBox="0 0 157 36" />

          <div>
            <Typography variant="subtitle-1">{username}</Typography>
            <Dropdown iconButton={avatar} options={options} />
          </div>
        </div>
      </Container>
    </header>
  )
}
