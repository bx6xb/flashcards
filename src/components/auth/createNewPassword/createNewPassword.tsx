import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { useForm } from 'react-hook-form'
import s from './createNewPassword.module.scss'
import { ControlledPasswordInput } from '@/components/ui/controlled/controlledPasswordInput'

export type CreateNewPasswordFormValues = {
  password: string
}
type CreateNewPasswordProps = {
  onSubmit: (data: CreateNewPasswordFormValues) => void
}

export const CreateNewPassword = ({ onSubmit }: CreateNewPasswordProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateNewPasswordFormValues>({
    defaultValues: {
      password: '',
    },
  })

  const onFormSubmit = handleSubmit(data => {
    onSubmit(data)
  })

  return (
    <Card className={s.createNewPassword}>
      <form onSubmit={onFormSubmit}>
        <DevTool control={control} />

        <Typography variant="h1">Create new password</Typography>

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

        <Typography variant="body-2" className={s.info}>
          Create new password and we will send you further instructions to email
        </Typography>

        <Button type="submit" fullWidth>
          Send Instructions
        </Button>
      </form>
    </Card>
  )
}
