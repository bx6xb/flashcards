import { useForm } from 'react-hook-form'
import { Button } from '../../ui/button'
import { DevTool } from '@hookform/devtools'
import { Card } from '@/components/ui/card'
import s from './signUp.module.scss'
import { ControlledPasswordInput } from '@/components/ui/controlled/controlledPasswordInput'
import { ControlledEmailInput } from '@/components/ui/controlled/controlledEmailInput'
import { Typography } from '@/components/ui/typography'

export type SignUpFormValues = {
  email: string
  password: string
  confirmPassword: string
}
type SignUpProps = {
  onSubmit: (data: SignUpFormValues) => void
}

export const SignUp = ({ onSubmit }: SignUpProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignUpFormValues>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onFormSubmit = handleSubmit(onSubmit)

  let confirmPasswordError = ''
  const { password, confirmPassword } = getValues()

  if (password !== confirmPassword) {
    confirmPasswordError = 'Passwords must match'
  }

  return (
    <Card className={s.signIn}>
      <form onSubmit={onFormSubmit}>
        <Typography variant="h1">Sign Up</Typography>

        <DevTool control={control} />

        <div className={s.inputs}>
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

          <ControlledPasswordInput
            // useController props
            name="confirmPassword"
            control={control}
            // input props
            label={'Confirm Password'}
            error={confirmPasswordError}
            className={s.input}
          />
        </div>

        <Button type="submit" fullWidth>
          Sign In
        </Button>

        <div className={s.links}>
          <Typography variant="link-1" href="#">
            Already have an account?
          </Typography>

          <a href="#">Sign Up</a>
        </div>
      </form>
    </Card>
  )
}
