import * as CheckboxRadix from '@radix-ui/react-checkbox'
import s from './checkbox.module.scss'
import { ComponentPropsWithoutRef, useId } from 'react'
import { CheckIcon } from '@radix-ui/react-icons'

type CheckboxProps = {
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const Checkbox = ({ label, disabled, checked }: CheckboxProps) => {
  const id = useId()

  return (
    <div className={s.checkboxWrapper}>
      <CheckboxRadix.Root className={s.checkboxRoot} disabled={disabled} checked={checked} id={id}>
        <CheckboxRadix.Indicator>
          <CheckIcon className={s.checkboxIcon} />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
    </div>
  )
}
