import { useForm } from 'react-hook-form'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { ControlledCheckbox } from '@/components/ui/controlled/controlledCheckbox/controlledCheckbox'
import { DevTool } from '@hookform/devtools'
import { Card } from '@/components/ui/card'
import s from './signIn.module.scss'
import { useState } from 'react'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

const emailRegex =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false)

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = handleSubmit(data => {
    console.log('data', data)
  })

  const toggleShowPassword = () => setShowPassword(!showPassword)

  return (
    <Card className={s.signIn}>
      <form onSubmit={onSubmit} className={s.form}>
        <h3>Sign In</h3>
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
          className={s.input}
        />
        <Input
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 3, message: 'Password has to be at least 3 characters long' },
          })}
          label={'Password'}
          error={errors.password?.message}
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
          className={s.input}
        />
        <ControlledCheckbox
          label={'Remember me'}
          control={control}
          name={'rememberMe'}
          className={s.rememberMe}
        />
        <a href="#" className={s.forgotPassword}>
          Forgot Password?
        </a>
        <Button type="submit" fullWidth>
          Sign In
        </Button>
        <a href="#" className={s.dontHaveAnAccount}>
          Don't have an account?
        </a>
        <a href="#" className={s.signUp}>
          Sign In
        </a>
      </form>
    </Card>
  )
}
