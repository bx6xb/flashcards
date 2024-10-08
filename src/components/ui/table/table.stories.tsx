import type { Meta, StoryObj } from '@storybook/react'
import { Table } from './table'
import { useMemo, useState } from 'react'
import { Order, TableHeadContent } from './tableHead/tableHead'

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  args: {
    tableHeadValues: [],
    tableBodyValues: [],
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

// stories
export const TableExample: Story = {
  render() {
    const [orderObj, setOrderObj] = useState<{ [key: string]: Order }>({
      name3: 'asc',
      name6: 'desc',
    })

    const tableHeadValues: TableHeadContent[] = [
      'Name 1',
      'Name 2',
      {
        value: 'Name 3',
        order: orderObj.name3,
        onSortChange(order: Order) {
          setOrderObj({ ...orderObj, name3: order })
        },
      },
      'Name 4',
      'Name 5',
      {
        value: 'Name 6',
        order: orderObj.name6,
        onSortChange(order: Order) {
          setOrderObj({ ...orderObj, name6: order })
        },
      },
    ]

    const tableBodyValues = useMemo(
      () =>
        Array(6)
          .fill(null)
          .map((_, i) =>
            Array(6)
              .fill(null)
              .map(() => `Content ${i + 1}`)
          ),
      []
    )

    return <Table tableHeadValues={tableHeadValues} tableBodyValues={tableBodyValues} />
  },
}
