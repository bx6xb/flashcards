import { Button } from '@/components/ui/button'
import { ControlledInput } from '@/components/ui/controlled/controlledInput'
import { useForm } from 'react-hook-form'
import s from './editProfileForm.module.scss'

export type EditProfileFormValues = {
  nickname: string
}
type EditProfileFormProps = {
  onSubmit: (data: EditProfileFormValues) => void
}

export const EditProfileForm = (props: EditProfileFormProps) => {
  const { onSubmit } = props

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileFormValues>({
    defaultValues: {
      nickname: '',
    },
  })

  const onFormSubmit = handleSubmit(data => onSubmit(data))

  return (
    <form onSubmit={onFormSubmit} className={s.form}>
      <ControlledInput
        // useController props
        control={control}
        name="nickname"
        error={errors.nickname?.message}
        // input props
        label="Nickname"
        fullWidth
      />

      <Button fullWidth type="submit">
        Save Changes
      </Button>
    </form>
  )
}
