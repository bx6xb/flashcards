import { DeckType } from '@/services/decks/decks.types'
import { Typography } from '../../typography'
import s from './deck.module.scss'
import { Icon } from '../../icon'

type DeckDataProps = {
  deck: DeckType
}

const icons = ['play-circle-outline', 'edit-2-outline', 'trash-outline']

export const Deck = ({ deck }: DeckDataProps) => {
  const { id, name, cardsCount, author, updated } = deck

  const updatedAt = new Date(updated).toLocaleDateString('ru-RU')

  const mappedDeckData = Object.entries({
    name,
    cardsCount,
    updatedAt,
    authorName: author.name,
  }).map(([_, v], i) => (
    <td key={id + v + i}>
      <Typography variant="subtitle-2">{v}</Typography>
    </td>
  ))

  const mappedIcons = icons.map(icon => (
    <Icon key={icon} id={icon} width={16} height={16} viewBox="0 0 22 22" />
  ))

  return (
    <tr key={id}>
      {mappedDeckData}

      <td className={s.icons}>{mappedIcons}</td>
    </tr>
  )
}
