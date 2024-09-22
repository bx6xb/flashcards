import { useState } from 'react'
import { ControlledInput, ControlledInputProps } from '../controlledInput'
import { FieldValues } from 'react-hook-form'

type ControlledPasswordInputProps<TFieldValues extends FieldValues> = Omit<
  ControlledInputProps<TFieldValues>,
  'type' | 'icon'
>

export const ControlledPasswordInput = <TFieldValues extends FieldValues>(
  props: ControlledPasswordInputProps<TFieldValues>
) => {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => setShowPassword(!showPassword)

  return (
    <ControlledInput
      type={showPassword ? 'text' : 'password'}
      icon={{
        iconId: 'eye-outline',
        side: 'right',
        onMouseDown() {
          toggleShowPassword()
        },
        onMouseUp() {
          toggleShowPassword()
        },
      }}
      {...props}
    />
  )
}
