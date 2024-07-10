import { ComponentPropsWithoutRef, useState } from 'react'
import s from './input.module.scss'
import { Typography } from '../typography'
import { Icon } from '../icon'

type InputProps = {
  type?: 'textfield' | 'password' | 'search'
  error?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = (props: InputProps) => {
  const { type = 'textfield', error, disabled, ...rest } = props

  const [showPassword, setShowPassword] = useState(false)

  const inputIconOnMouseDown = () => setShowPassword(true)
  const inputIconOnMouseUp = () => setShowPassword(false)

  if (type === 'password') {
    return (
      <div className={s.inputRoot}>
        <div className={s.inputWrapper}>
          <input
            type={showPassword ? 'text' : 'password'}
            className={`${s.input} ${s.password} ${error ? s.error : ''}`}
            disabled={disabled}
            {...rest}
          />

          <button className={s.showPasswordBtn} disabled={disabled}>
            <Icon
              id="eye"
              width={20}
              height={20}
              onMouseDown={inputIconOnMouseDown}
              onMouseUp={inputIconOnMouseUp}
            />
          </button>
        </div>

        <InputError error={error} />
      </div>
    )
  }
  if (type === 'search') {
    return (
      <div className={s.inputRoot}>
        <div className={s.inputWrapper}>
          <input
            className={`${s.input} ${s.search} ${error ? s.error : ''}`}
            disabled={disabled}
            {...rest}
          />

          <button className={s.searchBtn} disabled={disabled}>
            <Icon id="search" width={20} height={20} />
          </button>
        </div>

        <InputError error={error} />
      </div>
    )
  }
  return (
    <div className={s.inputRoot}>
      <input className={`${s.input} ${error ? s.error : ''}`} disabled={disabled} {...rest} />
      <InputError error={error} />
    </div>
  )
}

// Input error
type InputErrorProps = {
  error: string | undefined
}

const InputError = ({ error }: InputErrorProps) => {
  return error ? (
    <Typography variant="caption" color="var(--color-danger-300)" text={error} />
  ) : null
}
