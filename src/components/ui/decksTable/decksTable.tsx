import { Deck } from './deck/deck'
import s from './decksTable.module.scss'
import { DeckType } from '@/services/decks/decks.types'
import { TableHead } from './tableHead/tableHead'

type DecksTableProps = {
  decks: DeckType[]
  className?: string
}

export const DecksTable = ({ decks, className = '' }: DecksTableProps) => {
  const mappedDecks = decks.map(deck => <Deck key={deck.id} deck={deck} />)

  return (
    <table className={`${s.decksTable} ${className}`}>
      <TableHead />
      <tbody>{mappedDecks}</tbody>
    </table>
  )
}
