import type { Meta, StoryObj } from '@storybook/react'
import { Pagination, ItemsPerPage } from './pagination'
import { useState } from 'react'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    currentPage: 3,
    itemsCount: 510,
    itemsPerPage: 20,
    onPageChange(page: number) {
      alert(page)
    },
    onItemsPerPageChange(itemsPerPage: ItemsPerPage) {
      alert(itemsPerPage)
    },
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

// stories
export const PaginationBaseExample: Story = {}
export const ClickablePagination: Story = {
  render(args) {
    const [page, setPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState<ItemsPerPage>(10)

    return (
      <Pagination
        {...args}
        itemsCount={200}
        currentPage={page}
        onPageChange={setPage}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={setItemsPerPage}
      />
    )
  },
}
