import { ComponentPropsWithoutRef } from 'react'
import s from './input.module.scss'
import { Typography } from '../typography'
import { Icon } from '../icon'

type InputProps = {
  label?: string
  icon?: {
    iconId: 'eye' | 'search' | string
    side: 'left' | 'right'
  } & ComponentPropsWithoutRef<'button'>
  error?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = (props: InputProps) => {
  const { label, icon, error, disabled, ...rest } = props

  return (
    <div className={s.inputRoot}>
      {!!label && <Typography variant="body-2" color="var(--color-dark-100)" text={label} />}
      <div>
        <input
          className={`${s.input} ${s.password} ${error ? s.error : ''} ${
            icon?.side === 'left' ? s.inputPaddingOnLeftSide : s.inputPaddingOnRightSide
          }`}
          disabled={disabled}
          {...rest}
        />

        {icon && (
          <button
            className={`${s.inputBtn} ${
              icon.side === 'left' ? s.iconOnLeftSide : s.iconOnRightSide
            }`}
            disabled={disabled}
            {...icon}
          >
            <Icon id={icon.iconId} width={20} height={20} />
          </button>
        )}
      </div>

      {!!error && <Typography variant="caption" color="var(--color-danger-300)" text={error} />}
    </div>
  )
}
