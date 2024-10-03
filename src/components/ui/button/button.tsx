import { ComponentPropsWithoutRef, ElementType } from 'react'
import s from './button.module.scss'
import { Typography } from '../typography'
import { Icon } from '../icon'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
  icon?: {
    id: string
    position?: 'left' | 'right'
  }
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    variant = 'primary',
    fullWidth,
    className = '',
    as: Component = 'button',
    children,
    icon,
    ...rest
  } = props

  const iconId = icon?.id
  const position = icon?.position || 'left'

  let IconComponent: ReturnType<typeof Icon> | undefined

  if (iconId) {
    IconComponent = (
      <Icon id={iconId} width={16} height={16} viewBox="0 0 22 22" className={s.icon} />
    )
  }

  return (
    <Component
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...rest}
    >
      {icon && position === 'left' && IconComponent}
      {children && <Typography variant="subtitle-2">{children}</Typography>}
      {icon && position === 'right' && IconComponent}
    </Component>
  )
}
