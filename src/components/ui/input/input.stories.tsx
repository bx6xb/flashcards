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

export const InputBaseExample: Story = {}
export const PasswordInput: Story = {
  render() {
    const [value, setValue] = useState('')
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
          iconId: 'eye',
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
    const [value, setValue] = useState('')

    const submit = () => {
      alert(value)
      setValue('')
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
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
      </div>
    )
  },
}
