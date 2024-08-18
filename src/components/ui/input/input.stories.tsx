import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '.'
import { useState } from 'react'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Input placeholder',
    value: '',
    onChange: () => {},
    disabled: false,
    error: '',
    icon: {
      iconId: '',
      side: 'right',
      onClick: () => {
        alert('Click')
      },
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// hook
function useValueAndSubmit() {
  const [value, setValue] = useState('')

  const submit = () => {
    alert(value)
    setValue('')
  }

  return {
    value,
    setValue,
    submit,
  }
}

// stories
export const InputBaseExample: Story = {}
export const PasswordInput: Story = {
  render() {
    const { value, setValue } = useValueAndSubmit()
    const [showPassword, setShowPassword] = useState(false)

    const showPasswordHandler = () => setShowPassword(true)
    const hidePasswordHandler = () => setShowPassword(false)

    return (
      <Input
        label="Password"
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
        placeholder="Password"
        type={showPassword ? 'text' : 'password'}
        icon={{
          iconId: 'eye-outline',
          side: 'right',
          onMouseDown: showPasswordHandler,
          onMouseUp: hidePasswordHandler,
        }}
      />
    )
  },
}
export const SearchInput: Story = {
  render() {
    const { value, setValue, submit } = useValueAndSubmit()

    return (
      <Input
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
        placeholder="Search"
        onKeyDown={e => e.key === 'Enter' && submit()}
        icon={{
          iconId: 'search',
          side: 'left',
          onClick: submit,
        }}
      />
    )
  },
}
export const ErrorInput: Story = {
  render() {
    const { value, setValue, submit } = useValueAndSubmit()

    return (
      <Input
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
        placeholder="Error"
        onKeyDown={e => e.key === 'Enter' && submit()}
        error="Invalid value"
      />
    )
  },
}
