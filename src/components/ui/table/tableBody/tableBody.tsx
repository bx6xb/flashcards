import { ReactNode } from 'react'
import './tableBody.module.scss'

type TableBodyProps = {
  card: ReactNode[]
}

export const TableBody = ({ card }: TableBodyProps) => {
  const mappedCard = card.map((v, i) => <td key={i}>{v}</td>)

  return <tr>{mappedCard}</tr>
}
