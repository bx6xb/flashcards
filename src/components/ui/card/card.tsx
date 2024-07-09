import { ComponentPropsWithoutRef } from 'react'
import s from './card.module.scss'

type CardProps = ComponentPropsWithoutRef<'div'>

export const Card = (props: CardProps) => {
  return <div className={`${s.card} ${props.className}`} {...props} />
}
