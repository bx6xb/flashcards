import { useForm } from 'react-hook-form'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { ControlledCheckbox } from '@/components/ui/controlled/controlledCheckbox/controlledCheckbox'
import { DevTool } from '@hookform/devtools'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

const emailRegex =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

export const LoginForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = handleSubmit(data => {
    console.log('data', data)
  })

  return (
    <form onSubmit={onSubmit}>
      <DevTool control={control} />
      <Input
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: emailRegex,
            message: 'Invalid email',
          },
        })}
        label={'Email'}
        error={errors.email?.message}
      />
      <Input
        {...register('password', {
          required: 'Password is required',
          minLength: { value: 3, message: 'Password has to be at least 3 characters long' },
        })}
        label={'Password'}
        error={errors.password?.message}
      />
      <ControlledCheckbox label={'Remember me'} control={control} name={'rememberMe'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
