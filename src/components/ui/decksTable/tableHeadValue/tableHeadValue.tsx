import { Typography } from '../../typography'

type TableHeadValueProps = {
  value: string
}

export const TableHeadValue = ({ value }: TableHeadValueProps) => (
  <th key={value}>
    <Typography variant="subtitle-2">{value}</Typography>
  </th>
)
