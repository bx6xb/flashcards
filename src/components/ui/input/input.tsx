import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'
import s from './input.module.scss'
import { Typography } from '../typography'
import { Icon } from '../icon'

export type InputProps = {
  label?: string
  icon?: {
    iconId: string
    side: 'left' | 'right'
  } & ComponentPropsWithoutRef<'button'>
  error?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, icon, error, disabled, className, ...rest } = props

  let iconButton: ReactNode

  if (icon) {
    const { iconId, side, ...restIconProps } = icon
    iconButton = (
      <button
        className={`${s.inputBtn} ${side === 'left' ? s.iconOnLeftSide : s.iconOnRightSide}`}
        disabled={disabled}
        {...restIconProps}
      >
        <Icon id={iconId} width={20} height={20} viewBox="0 0 22 22" />
      </button>
    )
  }

  return (
    <div className={s.inputRoot}>
      {!!label && <Typography variant="body-2" color="var(--color-dark-100)" text={label} />}
      <div className={`${s.inputWrapper} ${className || ''}`}>
        <input
          className={`${s.input} ${error ? s.error : ''} ${
            icon?.side === 'left'
              ? s.inputPaddingOnLeftSide
              : icon?.side === 'right'
              ? s.inputPaddingOnRightSide
              : ''
          }`}
          disabled={disabled}
          ref={ref}
          {...rest}
        />

        {iconButton}
      </div>

      {!!error && <Typography variant="caption" color="var(--color-danger-300)" text={error} />}
    </div>
  )
})
