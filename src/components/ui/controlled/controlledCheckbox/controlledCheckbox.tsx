import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { Checkbox, CheckboxProps } from '@/components/ui/checkbox'

export type ControlledCheckboxProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<CheckboxProps, 'onChange' | 'value' | 'id'>

export const ControlledCheckbox = <TFieldValues extends FieldValues>({
  name,
  rules,
  shouldUnregister,
  control,
  defaultValue,
  ...restCheckboxProps
}: ControlledCheckboxProps<TFieldValues>) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    rules,
    shouldUnregister,
    control,
    defaultValue,
  })

  return (
    <Checkbox
      {...{
        onCheckedChange: onChange,
        checked: value,
        id: name,
        ...restCheckboxProps,
      }}
    />
  )
}
