import { ComponentPropsWithoutRef } from 'react'
import s from './card.module.scss'

export type CardProps = ComponentPropsWithoutRef<'div'>

export const Card = (props: CardProps) => {
  const { className = '', ...rest } = props

  return <div className={`${s.card} ${className}`} {...rest} />
}
