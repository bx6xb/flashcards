import { ComponentPropsWithoutRef } from 'react'
import s from './container.module.scss'

type ContainerProps = ComponentPropsWithoutRef<'div'>

export const Container = ({ className = '', ...rest }: ContainerProps) => (
  <div className={`${s.container} ${className}`} {...rest} />
)
