import { ComponentPropsWithoutRef } from 'react'
import s from './avatar.module.scss'

type AvatarProps = Omit<ComponentPropsWithoutRef<'img'>, 'alt'>

export const Avatar = (props: AvatarProps) => {
  const { className = '', ...rest } = props
  return <img alt="avatar" className={`${s.avatar} ${className}`} {...rest} />
}
