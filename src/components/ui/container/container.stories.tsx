import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './container'

const meta = {
  title: 'Components/Container',
  component: Container,
  tags: ['autodocs'],
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

// stories
export const ContainerExample: Story = {}
