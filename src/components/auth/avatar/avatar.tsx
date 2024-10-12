import { ComponentPropsWithRef, forwardRef } from 'react'
import s from './avatar.module.scss'

type AvatarProps = Omit<ComponentPropsWithRef<'img'>, 'alt'>

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>((props, ref) => {
  const { className = '', ...rest } = props

  return <img alt="avatar" className={`${s.avatar} ${className}`} ref={ref} {...rest} />
})
