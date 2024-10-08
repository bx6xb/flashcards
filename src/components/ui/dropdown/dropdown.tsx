import { Fragment, ReactNode } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import s from './dropdown.module.scss'

export type DropdownProps = {
  options: ReactNode[]
  iconButton: ReactNode
}

export const Dropdown = (props: DropdownProps) => {
  const { options, iconButton } = props

  const mappedOptions = options.map((o, i) => (
    <Fragment key={i}>
      <DropdownMenu.Item className={s.item}>{o}</DropdownMenu.Item>
      {i + 1 !== options.length && <DropdownMenu.Separator className={s.separator} />}
    </Fragment>
  ))

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{iconButton}</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.content} sideOffset={5}>
          {mappedOptions}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
