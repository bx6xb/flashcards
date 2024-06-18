import { ComponentPropsWithoutRef } from 'react'
import s from './input.module.scss'

type InputProps = {
  type: 'textfield' | 'password' | 'search'
} & ComponentPropsWithoutRef<'input'>

export const Input = ({ type = 'textfield', ...restProps }: InputProps) => {
  if (type === 'password') {
    return <input type="password" placeholder="Input" className={s.input} {...restProps} />
  }
  if (type === 'search') {
    return <input {...restProps} />
  }
  return <input {...restProps} />
}
