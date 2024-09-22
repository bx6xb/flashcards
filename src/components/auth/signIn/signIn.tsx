import { useForm } from 'react-hook-form'
import { Button } from '../../ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlledCheckbox/controlledCheckbox'
import { DevTool } from '@hookform/devtools'
import { Card } from '@/components/ui/card'
import s from './signIn.module.scss'
import { ControlledPasswordInput } from '@/components/ui/controlled/controlledPasswordInput'
import { ControlledEmailInput } from '@/components/ui/controlled/controlledEmailInput'

export type SignInFormValues = {
  email: string
  password: string
  rememberMe: boolean
}
type SignInProps = {
  onSubmit: (data: SignInFormValues) => void
}

export const SignIn = ({ onSubmit }: SignInProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  const onFormSubmit = handleSubmit(onSubmit)

  return (
    <Card className={s.signIn}>
      <form onSubmit={onFormSubmit} className={s.form}>
        <h3>Sign In</h3>
        <DevTool control={control} />

        <ControlledEmailInput
          // useController props
          control={control}
          // input props
          error={errors.email?.message}
          className={s.input}
        />

        <ControlledPasswordInput
          // useController props
          name="password"
          rules={{
            required: 'Password is required',
            minLength: { value: 3, message: 'Password has to be at least 3 characters long' },
          }}
          control={control}
          // input props
          label={'Password'}
          error={errors.password?.message}
          className={s.input}
        />

        <ControlledCheckbox
          control={control}
          name={'rememberMe'}
          label={'Remember me'}
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
