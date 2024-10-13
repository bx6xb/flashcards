import type { Meta, StoryObj } from '@storybook/react'
import { Pagination, Portion } from './pagination'
import { useState } from 'react'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    currentPage: 3,
    itemsCount: 510,
    portion: 20,
    pageOnChange(page: number) {
      alert(page)
    },
    portionOnChange(portion: Portion) {
      alert(portion)
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
    const [portion, setPortion] = useState<Portion>(10)

    return (
      <Pagination
        {...args}
        itemsCount={200}
        currentPage={page}
        pageOnChange={setPage}
        portion={portion}
        portionOnChange={setPortion}
      />
    )
  },
}
