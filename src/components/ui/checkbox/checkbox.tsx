import * as CheckboxRadix from '@radix-ui/react-checkbox'
import s from './checkbox.module.scss'
import { ComponentPropsWithoutRef, useId } from 'react'
import { CheckIcon } from '@radix-ui/react-icons'
import { Typography } from '../typography'

export type CheckboxProps = {
  label?: string
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = (props: CheckboxProps) => {
  const { label, ...rest } = props

  const id = useId()

  return (
    <div className={s.checkboxWrapper}>
      <CheckboxRadix.Root className={s.checkboxRoot} id={id} {...rest}>
        <CheckboxRadix.Indicator>
          <CheckIcon className={s.checkboxIcon} />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      {label && (
        <label htmlFor={id}>
          <Typography text={label} variant="body-2" />
        </label>
      )}
    </div>
  )
}
