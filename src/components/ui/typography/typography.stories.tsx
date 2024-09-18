import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from '.'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  args: {
    color: 'light',
    text: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

// stories

export const H1: Story = {
  args: {
    variant: 'h1',
  },
}
export const H2: Story = {
  args: {
    variant: 'h2',
  },
}
export const H3: Story = {
  args: {
    variant: 'h3',
  },
}
export const H4: Story = {
  args: {
    variant: 'h4',
  },
}
export const Body1: Story = {
  args: {
    variant: 'body-1',
  },
}
export const Body2: Story = {
  args: {
    variant: 'body-2',
  },
}
export const Subtitle1: Story = {
  args: {
    variant: 'subtitle-1',
  },
}
export const Subtitle2: Story = {
  args: {
    variant: 'subtitle-2',
  },
}
export const Caption: Story = {
  args: {
    variant: 'caption',
  },
}
export const Overline: Story = {
  args: {
    variant: 'overline',
  },
}
export const Link1: Story = {
  args: {
    variant: 'link-1',
  },
}
export const Link2: Story = {
  args: {
    variant: 'link-2',
  },
}
