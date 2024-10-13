import * as TabsRadix from '@radix-ui/react-tabs'
import { ComponentPropsWithoutRef, ReactNode } from 'react'
import s from './tabs.module.scss'

export type Tab = {
  label: string
  content?: ReactNode
  isDisabled?: boolean
  onClick: (label: string) => void
}

export type TabsProps = {
  tabs: Tab[]
  defaultActiveLabel: string
} & Omit<ComponentPropsWithoutRef<typeof TabsRadix.Root>, 'defaultValue'>

export const Tabs = (props: TabsProps) => {
  const { tabs, defaultActiveLabel, ...rest } = props

  const tabSwitchers = tabs.map(({ label, isDisabled, onClick }) => {
    const tabOnClick = () => {
      onClick(label)
    }

    return (
      <TabsRadix.Trigger
        key={label}
        value={label}
        className={s.switcher}
        disabled={isDisabled}
        onClick={tabOnClick}
      >
        {label}
      </TabsRadix.Trigger>
    )
  })

  const tabContent = tabs.map(({ label, content }) => (
    <TabsRadix.Content key={label} value={label}>
      {content}
    </TabsRadix.Content>
  ))

  return (
    <TabsRadix.Root defaultValue={defaultActiveLabel} {...rest}>
      <TabsRadix.List>{tabSwitchers}</TabsRadix.List>
      {tabContent}
    </TabsRadix.Root>
  )
}
