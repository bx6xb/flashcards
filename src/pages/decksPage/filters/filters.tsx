import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Slider, SliderValue } from '@/components/ui/slider'
import { Typography } from '@/components/ui/typography'
import { resetState, setProperty } from '@/services/stateSlices/decksPageSlice'
import { ChangeEvent } from 'react'
import s from './filters.module.scss'
import { Tabs } from '@/components/ui/tabs'
import { Dispatch } from '@reduxjs/toolkit'

type FiltersProps = {
  dispatch: Dispatch
  name: string
  activeTab: string
  minCardsCount: number
  maxCardsCount: number
}

export const Filters = (props: FiltersProps) => {
  const { dispatch, name, activeTab, minCardsCount, maxCardsCount } = props

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setProperty({ property: 'name', value: e.currentTarget.value }))
  }
  const onTabClick = (value: string) => {
    dispatch(setProperty({ property: 'activeTab', value }))
  }
  const onSliderChange = (value: SliderValue) => {
    dispatch(setProperty({ property: 'minAndMaxCardsCount', value }))
  }
  const clearStateHandler = () => {
    dispatch(resetState())
  }

  return (
    <div className={s.filters}>
      <Input
        placeholder="Search by name"
        icon={{ iconId: 'search-outline', side: 'left' }}
        value={name}
        onChange={onNameChange}
      />

      <div className={s.filterWithLabel}>
        <Typography variant="body-2">Show decks cards</Typography>
        <Tabs
          tabs={[
            {
              label: 'My Cards',
            },
            {
              label: 'All Cards',
            },
          ]}
          onTabClick={onTabClick}
          value={activeTab}
        />
      </div>

      <div className={s.filterWithLabel}>
        <Typography variant="body-2">Number of cards</Typography>
        <Slider
          value={[minCardsCount, maxCardsCount]}
          onValueChange={onSliderChange}
          min={0}
          max={100}
        />
      </div>

      <Button onClick={clearStateHandler} variant="secondary" icon={{ id: 'trash-outline' }}>
        Clear Filter
      </Button>
    </div>
  )
}
