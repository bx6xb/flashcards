import { DecksTable } from '@/components/ui/decksTable'
import { Typography } from '@/components/ui/typography'
import { useGetDecksQuery } from '@/services/flashcardsApi'
import s from './decks.page.module.scss'
import { Button } from '@/components/ui/button'
import { Pagination, ItemsPerPage } from '@/components/ui/pagination'
import { useAppDispatch, useAppSelector } from '@/services/store'
import { setProperty } from '@/services/decks/decksPageSlice'
import { Filters } from './filters/filters'

export function DecksPage() {
  const {
    name,
    minAndMaxCardsCount: [minCardsCount, maxCardsCount],
    orderBy,
    currentPage,
    itemsPerPage,
    activeTab,
  } = useAppSelector(state => state.decksPage)
  const dispatch = useAppDispatch()

  const { data, isLoading, error } = useGetDecksQuery({
    name,
    minCardsCount,
    maxCardsCount,
    orderBy,
    authorId: activeTab === 'My Cards' ? 'caller' : '',
    currentPage,
    itemsPerPage,
  })

  if (isLoading) {
    return <Typography variant="h1">Loading...</Typography>
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  const onPageChange = (value: number) => {
    dispatch(setProperty({ property: 'currentPage', value }))
  }
  const onItemsPerPageChange = (value: ItemsPerPage) => {
    dispatch(setProperty({ property: 'itemsPerPage', value }))
  }

  return (
    <>
      <div className={s.header}>
        <Typography variant="h1">Decks list</Typography>
        <Button>Add New Deck</Button>
      </div>

      <Filters
        dispatch={dispatch}
        name={name}
        activeTab={activeTab}
        minCardsCount={minCardsCount}
        maxCardsCount={maxCardsCount}
      />

      <DecksTable decks={data!.items} className={s.decksTable} />

      <Pagination
        currentPage={currentPage}
        itemsCount={data?.pagination.totalItems || 100}
        onPageChange={onPageChange}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        className={s.pagination}
      />
    </>
  )
}
