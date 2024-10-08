import { ReactNode } from 'react'
import s from './table.module.scss'
import { TableHead, TableHeadContent } from './tableHead/tableHead'
import { TableBody } from './tableBody/tableBody'

type TableProps = {
  tableHeadValues: TableHeadContent[]
  tableBodyValues: ReactNode[][]
}

export const Table = (props: TableProps) => {
  const { tableHeadValues, tableBodyValues } = props

  const mappedTableHeadValues = tableHeadValues.map((content, i) => (
    <TableHead content={content} key={i} />
  ))

  const mappedTableBodyValues = tableBodyValues.map((card, i) => <TableBody card={card} key={i} />)

  return (
    <table className={s.table}>
      <thead>
        <tr>{mappedTableHeadValues}</tr>
      </thead>
      <tbody>{mappedTableBodyValues}</tbody>
    </table>
  )
}
