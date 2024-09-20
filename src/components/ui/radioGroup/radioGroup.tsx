import * as RadioGroupRadix from '@radix-ui/react-radio-group'
import s from './radioGroup.module.scss'
import { ComponentPropsWithoutRef } from 'react'

export type RadioGroupProps = {
  items: Item[]
} & ComponentPropsWithoutRef<typeof RadioGroupRadix.Root>

type Item = {
  value: string | number
  label?: string | number
} & ComponentPropsWithoutRef<typeof RadioGroupRadix.Item>

export const RadioGroup = (props: RadioGroupProps) => {
  const { items, ...rest } = props

  const mappedItems = items.map(({ value, label, disabled, ...rest }) => (
    <label className={s.radio} key={value} data-disabled={disabled}>
      <RadioGroupRadix.Item
        className={s.item}
        value={value.toString()}
        disabled={disabled}
        {...rest}
      >
        <RadioGroupRadix.Indicator className={s.indicator} />
      </RadioGroupRadix.Item>
      {label || value}
    </label>
  ))

  return (
    <form>
      <RadioGroupRadix.Root
        className={s.root}
        defaultValue="default"
        aria-label="View density"
        {...rest}
      >
        {mappedItems}
      </RadioGroupRadix.Root>
    </form>
  )
}
