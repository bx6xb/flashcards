import * as SelectRadix from '@radix-ui/react-select'
import s from './select.module.scss'
import { Icon } from '../icon'
import { ComponentPropsWithoutRef } from 'react'

export type SelectProps = {
  placeholder: string
  items: Item[]
  label?: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

type Item = { value: string; label: string }

export const Select = (props: SelectProps) => {
  const { placeholder, items, label, disabled, ...rest } = props

  const mappedItems = items.map(i => (
    <SelectRadix.Item className={s.item} value={i.value} key={i.value}>
      <SelectRadix.ItemText>{i.label}</SelectRadix.ItemText>
    </SelectRadix.Item>
  ))

  return (
    <div className={s.select}>
      {label && <span className={`${s.label} ${disabled ? s.disabled : ''}`}>{label}</span>}

      <SelectRadix.Root disabled={disabled} {...rest}>
        <SelectRadix.Trigger className={s.trigger} aria-label="Food">
          <SelectRadix.Value placeholder={placeholder} />
          <SelectRadix.Icon>
            <Icon
              className={s.icon}
              id="arrow-ios-Down-outline"
              width={16}
              height={16}
              viewBox="0 0 24 24"
            />
          </SelectRadix.Icon>
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
