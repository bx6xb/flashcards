import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledEmailInput } from '@/components/ui/controlled/controlledEmailInput'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { useForm } from 'react-hook-form'
import s from './forgotPassword.module.scss'

export type ForgotPasswordFormValues = {
  email: string
}
type ForgotPasswordProps = {
  onSubmit: (data: ForgotPasswordFormValues) => void
}

export const ForgotPassword = ({ onSubmit }: ForgotPasswordProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    defaultValues: {
      email: '',
    },
  })

  const onFormSubmit = handleSubmit(data => {
    onSubmit(data)
  })

  return (
    <Card className={s.forgotPassword}>
      <form onSubmit={onFormSubmit}>
        <DevTool control={control} />

        <Typography variant="h1">Forgot your password?</Typography>

        <ControlledEmailInput
          // useController props
          control={control}
          // input props
          error={errors.email?.message}
          fullWidth
        />

        <Typography variant="body-2" className={s.info}>
          Enter your email address and we will send you further instructions
        </Typography>

        <Button type="submit" fullWidth>
          Send Instructions
        </Button>

        <Typography variant="body-2" className={s.info2}>
          Did you remember your password?
        </Typography>

        <a className={s.logInLink} href="#">
          Try logging in
        </a>
      </form>
    </Card>
  )
}
