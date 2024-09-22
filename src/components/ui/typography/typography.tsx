import { ComponentPropsWithoutRef } from 'react'
import s from './typography.module.scss'

export type TypographyProps = {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body-1'
    | 'body-2'
    | 'subtitle-1'
    | 'subtitle-2'
    | 'caption'
    | 'overline'
    | 'link-1'
    | 'link-2'
} & ComponentPropsWithoutRef<'h1' | 'h2' | 'h3' | 'h4' | 'h6' | 'p' | 'span' | 'a'>

const Tags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  'body-1': 'p',
  'body-2': 'p',
  'subtitle-1': 'h6',
  'subtitle-2': 'h6',
  caption: 'span',
  overline: 'span',
  'link-1': 'a',
  'link-2': 'a',
} as {
  [key: string]: keyof HTMLElementTagNameMap
}

export const Typography = ({ variant, children, className = '' }: TypographyProps) => {
  const TagName = Tags[variant]

  return <TagName className={`${s[variant]} ${className}`}>{children}</TagName>
}
