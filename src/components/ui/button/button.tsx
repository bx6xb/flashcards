import { ComponentPropsWithoutRef, ElementType } from 'react'
import s from './button.module.scss'
import { Typography } from '../typography'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    variant = 'primary',
    fullWidth,
    className = '',
    as: Component = 'button',
    children,
    ...rest
  } = props

  return (
    <Component
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...rest}
    >
      <Typography text={children} variant="body-2" />
    </Component>
  )
}
