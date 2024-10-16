import { useForm } from 'react-hook-form'
import { Button } from '../../ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlledCheckbox/controlledCheckbox'
import { DevTool } from '@hookform/devtools'
import { Card } from '@/components/ui/card'
import s from './signIn.module.scss'
import { ControlledPasswordInput } from '@/components/ui/controlled/controlledPasswordInput'
import { ControlledEmailInput } from '@/components/ui/controlled/controlledEmailInput'
import { Typography } from '@/components/ui/typography'
import { Link } from 'react-router-dom'
import { useLoginMutation } from '@/services/flashcardsApi'
import { useAppDispatch } from '@/services/store'
import { setAppProperty } from '@/services/app/appSlice'

export type SignInFormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const SignIn = () => {
  const dispatch = useAppDispatch()
  const [signIn, { isLoading }] = useLoginMutation()

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignInFormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  const onFormSubmit = handleSubmit(async (formData: SignInFormValues) => {
    try {
      const response = await signIn(formData).unwrap()
      console.log(response)
    } catch (e) {
      const message = e.data.message
      setError('email', { message })
      setError('password', { message })
    }
    // dispatch(setAppProperty({property: 'isUserAuthorized', }))
  })

  return (
    <Card className={s.signIn}>
      <form onSubmit={onFormSubmit}>
        <h3>Sign In</h3>
        <DevTool control={control} />

        <ControlledEmailInput
          // useController props
          control={control}
          // input props
          error={errors.email?.message}
          fullWidth
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
          fullWidth
        />

        <ControlledCheckbox
          control={control}
          name={'rememberMe'}
          label={'Remember me'}
          className={s.rememberMe}
        />

        <Typography variant="body-2" className={s.forgotPassword}>
          <Link to={'/forgot-password'}>Forgot Password?</Link>
        </Typography>

        <Button type="submit" fullWidth>
          Sign In
        </Button>

        <Typography variant="body-2" className={s.dontHaveAnAccount}>
          Don't have an account?
        </Typography>

        <Link to={'/sign-up'}>Sign Up</Link>
      </form>
    </Card>
  )
}
