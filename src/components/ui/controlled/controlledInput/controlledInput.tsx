import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { Input, InputProps } from '../../input'

export type ControlledInputProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<InputProps, 'onChange' | 'value' | 'id'>

export const ControlledInput = <TFieldValues extends FieldValues>({
  name,
  rules,
  shouldUnregister,
  control,
  defaultValue,
  ...restInputProps
}: ControlledInputProps<TFieldValues>) => {
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
    <Input
      {...{
        onChange,
        value,
        id: name,
        ...restInputProps,
      }}
    />
  )
}
