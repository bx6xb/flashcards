import s from './header.module.scss'
import { Icon } from '../../ui/icon'
import { Container } from '@/components/ui/container'
import { UserData } from './userData/userData'

export const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerContent}>
          <Icon id="logo" width={157} height={36} viewBox="0 0 157 36" />

          <UserData />
        </div>
      </Container>
    </header>
  )
}
