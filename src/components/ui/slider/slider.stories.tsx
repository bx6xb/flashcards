import type { Meta, StoryObj } from '@storybook/react'
import { Slider, SliderValue } from './slider'
import { useState } from 'react'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  args: {
    value: [20, 60],
    onValueChange: () => {},
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const SliderExample: Story = {
  render(args) {
    const [value, setValue] = useState<SliderValue>(args.value)

    const onValueChange = (value: SliderValue) => {
      setValue(value)
    }

    const sliderProps = { value, onValueChange }

    return <Slider {...sliderProps} />
  },
}
