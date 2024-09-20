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
  itemStyleId?: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

type Item = { value: string; label?: string }

export const Select = (props: SelectProps) => {
  const {
    placeholder,
    items,
    label,
    disabled,
    className = '',
    triggerStyleId = '',
    itemStyleId = '',
    ...rest
  } = props

  const mappedItems = items.map(i => (
    <SelectRadix.Item id={itemStyleId} className={s.item} value={i.value} key={i.value}>
      <SelectRadix.ItemText>{i.label || i.value}</SelectRadix.ItemText>
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
