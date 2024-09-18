import { ChangeEvent } from 'react'
import { Icon } from '../icon'
import s from './pagination.module.scss'

export type PaginationProps = {
  currentPage: number
  portion: Portion
  itemsCount: number
  pageOnChange: (page: number) => void
  portionOnChange: (portion: Portion) => void
}

export type Portion = 10 | 20 | 30 | 50 | 100

export const Pagination = (props: PaginationProps) => {
  const { currentPage, portion, itemsCount, pageOnChange, portionOnChange } = props

  const portionOnChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    portionOnChange(+e.currentTarget.value as Portion)
  }

  const lastPage = Math.ceil(itemsCount / portion)
  const content: Array<number | string> = [1]

  if (currentPage < 4) {
    content.push(2, 3, 4, 5, '...', lastPage)
  } else {
    content.push('...', currentPage - 1, currentPage)

    if (currentPage !== lastPage) {
      const nextPage = currentPage + 1
      nextPage === lastPage ? content.push(lastPage) : content.push(nextPage, '...', lastPage)
    }
  }

  const mappedContent = content.map((v, i) => {
    const key = `${v}${i}`
    return typeof v === 'number' ? (
      <button
        key={key}
        className={`${s.contentItem} ${v === currentPage ? s.selected : ''}`}
        onClick={() => pageOnChange(v)}
      >
        {v}
      </button>
    ) : (
      <span key={key}>{v}</span>
    )
  })

  const isLeftArrowDisabled = currentPage - 3 < 1
  const isRightArrowDisabled = currentPage + 3 > lastPage

  return (
    <div className={s.pagination}>
      <button
        className={s.arrows}
        onClick={() => pageOnChange(currentPage - 3)}
        disabled={isLeftArrowDisabled}
      >
        <Icon id="arrow-ios-back-outline" width={16} height={16} viewBox="0 0 24 24" />
      </button>

      {mappedContent}

      <button
        className={s.arrows}
        onClick={() => pageOnChange(currentPage + 3)}
        disabled={isRightArrowDisabled}
      >
        <Icon id="arrow-ios-forward-outline" width={16} height={16} viewBox="0 0 24 24" />
      </button>

      <div className={s.portion}>
        Показать
        <select onChange={portionOnChangeHandler} defaultValue={portion}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        на странице
      </div>
    </div>
  )
}
