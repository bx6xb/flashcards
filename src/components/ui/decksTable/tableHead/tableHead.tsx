import { useAppDispatch, useAppSelector } from '@/services/store'
import { Typography } from '../../typography'
import { setProperty } from '@/services/decks/decksPageSlice'
import s from './tableHead.module.scss'
import { Icon } from '../../icon'

type TableHeadValue =
  | {
      value: string
      trackingCategory: string
      onClick: () => void
    }
  | string

export const TableHead = () => {
  const orderBy = useAppSelector(state => state.decksPage.orderBy)
  const dispatch = useAppDispatch()

  const theadValues: TableHeadValue[] = [
    {
      value: 'Name',
      trackingCategory: 'name',
      onClick() {
        dispatch(
          setProperty({
            property: 'orderBy',
            value: orderBy === 'null' ? 'name-asc' : orderBy === 'name-asc' ? 'name-desc' : 'null',
          })
        )
      },
    },
    {
      value: 'Cards',
      trackingCategory: 'cardsCount',
      onClick() {
        dispatch(
          setProperty({
            property: 'orderBy',
            value:
              orderBy === 'null'
                ? 'cardsCount-asc'
                : orderBy === 'cardsCount-asc'
                ? 'cardsCount-desc'
                : 'null',
          })
        )
      },
    },
    {
      value: 'Last Updated',
      trackingCategory: 'updated',
      onClick() {
        dispatch(
          setProperty({
            property: 'orderBy',
            value:
              orderBy === 'null'
                ? 'updated-asc'
                : orderBy === 'updated-asc'
                ? 'updated-desc'
                : 'null',
          })
        )
      },
    },
    'Created By',
  ]

  const mappedTableHeadValues = theadValues.map(v => {
    if (typeof v === 'string') {
      return (
        <th key={v}>
          <Typography variant="subtitle-2">{v}</Typography>
        </th>
      )
    }

    const { value, trackingCategory, onClick } = v

    const [orderByName, orderByValue] = orderBy.split('-')
    const shouldAddIcon = orderByName === trackingCategory

    return (
      <th key={value} className={s.clickable}>
        <Typography variant="subtitle-2" onClick={onClick}>
          {value}
          {shouldAddIcon && (
            <Icon
              data-sort-by={orderByValue}
              id="arrow-ios-Up"
              width={12}
              height={12}
              viewBox="0 0 22 22"
            />
          )}
        </Typography>
      </th>
    )
  })

  return (
    <thead>
      <tr>
        {mappedTableHeadValues}
        <th />
      </tr>
    </thead>
  )
}
