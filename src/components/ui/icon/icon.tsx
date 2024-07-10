import { ComponentPropsWithoutRef } from 'react'
import sprite from '../../../assets/sprite.svg'

type IconProps = {
  id: string
  width: number
  height: number
} & ComponentPropsWithoutRef<'svg'>

export const Icon = (props: IconProps) => {
  const { id, width, height, ...rest } = props

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <use xlinkHref={`${sprite}#${id}`} />
    </svg>
  )
}
