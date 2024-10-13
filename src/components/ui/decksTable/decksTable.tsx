import { Icon } from '../icon'
import { Typography } from '../typography'
import s from './decksTable.module.scss'
import { Deck } from '@/services/decks/decks.types'

type DecksTableProps = {
  decks: Deck[]
  className?: string
}

const theadValues = ['Name', 'Cards', 'Last Updated', 'Created By']
const icons = ['play-circle-outline', 'edit-2-outline', 'trash-outline']

export const DecksTable = ({ decks, className = '' }: DecksTableProps) => {
  const mappedTheadValues = theadValues.map(v => (
    <th key={v}>
      <Typography variant="subtitle-2">{v}</Typography>
    </th>
  ))

  const mappedIcons = icons.map(icon => (
    <Icon key={icon} id={icon} width={16} height={16} viewBox="0 0 22 22" />
  ))

  const mappedDecks = decks.map(deck => {
    const { id, name, cardsCount, author, updated } = deck

    const updatedAt = new Date(updated).toLocaleDateString('ru-RU')

    const mappedDeckData = Object.entries({
      name,
      cardsCount,
      updatedAt,
      authorName: author.name,
    }).map(([_, v]) => (
      <td key={v}>
        <Typography variant="subtitle-2">{v}</Typography>
      </td>
    ))

    return (
      <tr key={id}>
        {mappedDeckData}

        <td className={s.icons}>{mappedIcons}</td>
      </tr>
    )
  })

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
