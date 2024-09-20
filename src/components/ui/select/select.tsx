import * as SelectRadix from '@radix-ui/react-select'
import s from './select.module.scss'
import { Icon } from '../icon'
import { ComponentPropsWithoutRef } from 'react'

export type SelectProps = {
  placeholder: string | number
  items: Item[]
  label?: string
  className?: string
  triggerStyleId?: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

type Item = { value: string; label?: string } & ComponentPropsWithoutRef<typeof SelectRadix.Item>

export const Select = (props: SelectProps) => {
  const {
    placeholder,
    items,
    label,
    disabled,
    className = '',
    triggerStyleId = '',
    ...rest
  } = props

  const mappedItems = items.map(({ value, label, className = '', ...rest }) => (
    <SelectRadix.Item className={`${s.item} ${className}`} value={value} key={value} {...rest}>
      <SelectRadix.ItemText>{label || value}</SelectRadix.ItemText>
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
