import * as SliderRadix from '@radix-ui/react-slider'
import s from './slider.module.scss'
import { ChangeEvent, ComponentPropsWithoutRef } from 'react'
import { Input } from '../input'

export type SliderValue = [number] | [number, number]
export type SliderProps = {
  value: SliderValue
  onValueChange: (value: SliderValue) => void
} & ComponentPropsWithoutRef<typeof SliderRadix.Root>

export const Slider = (props: SliderProps) => {
  const { value, onValueChange, className = '', ...rest } = props

  const isLengthIs2 = value.length === 2

  const minValueOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValues = [+event.currentTarget.value]
    if (isLengthIs2) {
      inputValues.push(value[1])
    }
    onValueChange(inputValues as SliderValue)
  }
  const maxValueOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onValueChange([value[0], +event.currentTarget.value])
  }

  return (
    <form className={s.form}>
      <Input
        className={s.input}
        type="number"
        value={value[0].toString()}
        onChange={minValueOnChange}
      />

      <SliderRadix.Root
        className={`${s.sliderRoot} ${className}`}
        value={value}
        onValueChange={onValueChange}
        {...rest}
      >
        <SliderRadix.Track className={s.sliderTrack}>
          <SliderRadix.Range className={s.sliderRange} />
        </SliderRadix.Track>

        <SliderRadix.Thumb className={s.sliderThumb} />
        {isLengthIs2 && <SliderRadix.Thumb className={s.sliderThumb} />}
      </SliderRadix.Root>

      {isLengthIs2 && (
        <Input
          className={s.input}
          type="number"
          value={value[1].toString()}
          onChange={maxValueOnChange}
        />
      )}
    </form>
  )
}
