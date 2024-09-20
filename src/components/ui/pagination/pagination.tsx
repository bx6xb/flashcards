import { Icon } from '../icon'
import s from './pagination.module.scss'
import { Select } from '../select'

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

  const portionOnChangeHandler = (portion: string) => {
    portionOnChange(+portion as Portion)
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
        <Select
          placeholder={portion.toString()}
          items={[
            {
              value: '10',
            },
            {
              value: '20',
            },
            {
              value: '30',
            },
            {
              value: '50',
            },
            {
              value: '100',
            },
          ]}
          onValueChange={portionOnChangeHandler}
          triggerStyleId={s.trigger}
          itemStyleId={s.item}
        />
        на странице
      </div>
    </div>
  )
}
