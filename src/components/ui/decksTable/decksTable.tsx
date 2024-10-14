import { Deck } from './deck/deck'
import s from './decksTable.module.scss'
import { DeckType } from '@/services/decks/decks.types'
import { TableHeadValue } from './tableHeadValue/tableHeadValue'

type DecksTableProps = {
  decks: DeckType[]
  className?: string
}

const theadValues = ['Name', 'Cards', 'Last Updated', 'Created By']

export const DecksTable = ({ decks, className = '' }: DecksTableProps) => {
  const mappedTheadValues = theadValues.map(v => <TableHeadValue key={v} value={v} />)
  const mappedDecks = decks.map(deck => <Deck key={deck.id} deck={deck} />)

  return (
    <table className={`${s.decksTable} ${className}`}>
      <thead>
        <tr>
          {mappedTheadValues}
          <th />
        </tr>
      </thead>
      <tbody>{mappedDecks}</tbody>
    </table>
  )
}
