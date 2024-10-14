import * as TabsRadix from '@radix-ui/react-tabs'
import { ComponentPropsWithoutRef, ReactNode } from 'react'
import s from './tabs.module.scss'

export type Tab = {
  label: string
  content?: ReactNode
  isDisabled?: boolean
}

export type TabsProps = {
  tabs: Tab[]
  onTabClick: (label: string) => void
} & ComponentPropsWithoutRef<typeof TabsRadix.Root>

export const Tabs = (props: TabsProps) => {
  const { tabs, onTabClick, ...rest } = props

  const tabOnClickHandler = (label: string) => {
    onTabClick(label)
  }

  const tabSwitchers = tabs.map(({ label, isDisabled }) => (
    <TabsRadix.Trigger
      key={label}
      value={label}
      className={s.switcher}
      disabled={isDisabled}
      onClick={() => tabOnClickHandler(label)}
    >
      {label}
    </TabsRadix.Trigger>
  ))

  const tabContent = tabs.map(({ label, content }) => (
    <TabsRadix.Content key={label} value={label}>
      {content}
    </TabsRadix.Content>
  ))

  return (
    <TabsRadix.Root {...rest}>
      <TabsRadix.List>{tabSwitchers}</TabsRadix.List>
      {tabContent}
    </TabsRadix.Root>
  )
}
