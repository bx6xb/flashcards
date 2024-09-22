import { FieldValues, Path } from 'react-hook-form'
import { ControlledInput, ControlledInputProps } from '../controlledInput'

const emailRegex =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

type ControlledEmailInputProps<TFieldValues extends FieldValues> = Omit<
  ControlledInputProps<TFieldValues>,
  'name' | 'rules' | 'label'
>

export const ControlledEmailInput = <TFieldValues extends FieldValues>(
  props: ControlledEmailInputProps<TFieldValues>
) => {
  return (
    <ControlledInput
      // useController prop
      name={'email' as Path<TFieldValues>}
      rules={{
        required: 'Email is required',
        pattern: {
          value: emailRegex,
          message: 'Invalid email',
        },
      }}
      // input props
      label={'Email'}
      {...props}
    />
  )
}
