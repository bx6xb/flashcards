import * as TabsRadix from '@radix-ui/react-tabs'
import { ComponentPropsWithoutRef, ReactNode } from 'react'
import s from './tabs.module.scss'

export type Tab = {
  id: string
  name: string
  content: ReactNode
  isDisabled?: boolean
}

export type TabsProps = {
  tabs: Tab[]
} & ComponentPropsWithoutRef<typeof TabsRadix.Root>

export const Tabs = (props: TabsProps) => {
  const { tabs, ...rest } = props

  const tabSwitchers = tabs.map(t => (
    <TabsRadix.Trigger key={t.id} value={t.id} className={s.switcher} disabled={t.isDisabled}>
      {t.name}
    </TabsRadix.Trigger>
  ))
  const tabContent = tabs.map(t => (
    <TabsRadix.Content key={t.id} value={t.id}>
      {t.content}
    </TabsRadix.Content>
  ))

  return (
    <TabsRadix.Root defaultValue="account" {...rest}>
      <TabsRadix.List>{tabSwitchers}</TabsRadix.List>
      {tabContent}
    </TabsRadix.Root>
  )
}
