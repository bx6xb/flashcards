import { ComponentPropsWithoutRef } from 'react'
import s from './input.module.scss'
import { Typography } from '../typography'

type InputProps = {
  type?: 'textfield' | 'password' | 'search'
  error?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = ({ type = 'textfield', error, ...rest }: InputProps) => {
  if (type === 'password') {
    return <input type="password" placeholder="Input" className={s.input} {...rest} />
  }
  if (type === 'search') {
    return <input {...rest} />
  }
  return (
    <div className={s.inputWrapper}>
      <input className={`${s.input} ${error ? s.error : ''}`} {...rest} />
      {error && <Typography variant="caption" color="var(--color-danger-300)" text={error} />}
    </div>
  )
}
