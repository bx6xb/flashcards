import { DecksTable } from '@/components/ui/decksTable'
import { Typography } from '@/components/ui/typography'
import { useGetDecksQuery } from '@/services/flashcardsApi'
import s from './decks.page.module.scss'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs } from '@/components/ui/tabs'
import { ChangeEvent, useState } from 'react'
import { Slider, SliderValue } from '@/components/ui/slider'
import { Pagination, Portion } from '@/components/ui/pagination'

export function DecksPage() {
  const [search, setSearch] = useState('')
  const [activeTab, setActiveTab] = useState('All Cards')
  const [numberOfCards, setNumberOfCards] = useState<SliderValue>([2, 8])
  const [page, setPage] = useState(1)
  const [portion, setPortion] = useState<Portion>(10)

  const { data, isLoading, error } = useGetDecksQuery({ name: search })

  console.log(data)

  if (isLoading) {
    return <Typography variant="h1">Loading...</Typography>
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }
  const tabOnClick = (label: string) => {
    setActiveTab(label)
  }
  const sliderOnChange = (value: SliderValue) => {
    setNumberOfCards(value)
  }
  const pageOnChange = (page: number) => {
    setPage(page)
  }
  const portionOnChange = (portion: Portion) => {
    setPortion(portion)
  }

  return (
    <>
      <div className={s.header}>
        <Typography variant="h1">Decks list</Typography>
        <Button>Add New Deck</Button>
      </div>

      <div className={s.filters}>
        <Input
          placeholder="Input search"
          icon={{ iconId: 'search-outline', side: 'left' }}
          value={search}
          onChange={onSearchChange}
        />

        <div className={s.filterWithLabel}>
          <Typography variant="body-2">Show decks cards</Typography>
          <Tabs
            tabs={[
              {
                label: 'My Cards',
                onClick: tabOnClick,
              },
              {
                label: 'All Cards',
                onClick: tabOnClick,
              },
            ]}
            defaultActiveLabel={activeTab}
          />
        </div>

        <div className={s.filterWithLabel}>
          <Typography variant="body-2">Number of cards</Typography>
          <Slider value={numberOfCards} onValueChange={sliderOnChange} min={0} max={10} />
        </div>

        <Button variant="secondary" icon={{ id: 'trash-outline' }}>
          Clear Filter
        </Button>
      </div>

      <DecksTable decks={data!.items} className={s.decksTable} />

      <Pagination
        currentPage={data?.pagination.currentPage || 1}
        itemsCount={data?.pagination.totalItems || 100}
        pageOnChange={pageOnChange}
        portion={(data?.pagination.itemsPerPage || 10) as Portion}
        portionOnChange={portionOnChange}
        className={s.pagination}
      />
    </>
  )
}
