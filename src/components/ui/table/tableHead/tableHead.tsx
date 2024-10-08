import { Icon } from '../../icon'
import './tableHead.module.scss'

export type Order = 'asc' | 'desc'
export type TableHeadContent =
  | string
  | { value: string; order: Order; onSortChange: (order: Order) => void }
type TableHeadProps = {
  content: TableHeadContent
}

export const TableHead = ({ content }: TableHeadProps) => {
  if (typeof content === 'string') {
    return (
      <th key={content}>
        <span>{content}</span>
      </th>
    )
  }

  const { value, order, onSortChange } = content

  const onClickHandler = () => {
    onSortChange(order === 'asc' ? 'desc' : 'asc')
  }

  return (
    <th onClick={onClickHandler} key={value}>
      <span>
        {value}
        <Icon
          id="arrow-ios-forward"
          width={12}
          height={12}
          viewBox="0 0 24 24"
          data-order={order}
        />
      </span>
    </th>
  )
}
