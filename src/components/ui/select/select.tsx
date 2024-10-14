import * as SelectRadix from '@radix-ui/react-select'
import s from './select.module.scss'
import { Icon } from '../icon'
import { ComponentPropsWithoutRef } from 'react'

export type SelectProps = {
  options: ComponentPropsWithoutRef<typeof SelectRadix.Item>[]
  label?: string
  className?: string
  triggerStyleId?: string
  placeholder?: string | number
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const Select = (props: SelectProps) => {
  const {
    placeholder = '',
    options,
    label,
    disabled,
    className = '',
    triggerStyleId = '',
    ...rest
  } = props

  const mappedItems = options.map(({ value, className = '', ...rest }) => (
    <SelectRadix.Item className={`${s.option} ${className}`} value={value} key={value} {...rest}>
      <SelectRadix.ItemText>{value}</SelectRadix.ItemText>
    </SelectRadix.Item>
  ))

  return (
    <div className={s.select}>
      {label && <span className={`${s.label} ${disabled ? s.disabled : ''}`}>{label}</span>}

      <SelectRadix.Root disabled={disabled} {...rest}>
        <SelectRadix.Trigger
          className={`${s.trigger} ${className}`}
          id={triggerStyleId}
          aria-label="Portion"
        >
          <SelectRadix.Value placeholder={placeholder} />
          <Icon id="arrow-ios-Down-outline" width={16} height={16} viewBox="0 0 24 24" />
        </SelectRadix.Trigger>

        <SelectRadix.Portal>
          <SelectRadix.Content className={s.content} position="popper">
            <SelectRadix.Viewport>
              <SelectRadix.Group>{mappedItems}</SelectRadix.Group>
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </div>
  )
}
