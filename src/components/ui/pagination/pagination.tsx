import { Icon } from '../icon'
import s from './pagination.module.scss'
import { Select } from '../select'

export type PaginationProps = {
  currentPage: number
  portion: Portion
  itemsCount: number
  pageOnChange: (page: number) => void
  portionOnChange: (portion: Portion) => void
  className?: string
}

export type Portion = 10 | 20 | 30 | 50 | 100

function createItems(...values: string[]) {
  return values.map(value => ({
    value,
    className: s.item,
  }))
}

export const Pagination = (props: PaginationProps) => {
  const { currentPage, portion, itemsCount, pageOnChange, portionOnChange, className = '' } = props

  const portionOnChangeHandler = (portion: string) => {
    portionOnChange(+portion as Portion)
  }

  const pages = Math.ceil(itemsCount / portion)
  let content: Array<number | 'leftDots' | 'rightDots'>

  if (pages < 6) {
    content = Array.from({ length: pages }, (_, i) => i + 1)
  } else if (currentPage < 3) {
    content = [1, 2, 3, 'rightDots', pages]
  } else if (currentPage === 3) {
    content = [1, 2, 3, 4, 'rightDots', pages]
  } else if (currentPage > pages - 2) {
    content = [1, 'leftDots', pages - 2, pages - 1, pages]
  } else if (currentPage === pages - 2) {
    content = [1, 'leftDots', pages - 3, pages - 2, pages - 1, pages]
  } else {
    content = [1, 'leftDots', currentPage - 1, currentPage, currentPage + 1, 'rightDots', pages]
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
      <span
        key={key}
        className={s.threeDots}
        onClick={() => pageOnChange(currentPage - (v === 'leftDots' ? 3 : -3))}
      >
        ...
      </span>
    )
  })

  const isLeftArrowDisabled = currentPage - 3 < 1
  const isRightArrowDisabled = currentPage + 3 > pages

  return (
    <div className={`${s.pagination} ${className}`}>
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
        Show
        <Select
          placeholder={portion.toString()}
          options={createItems('10', '20', '30', '50', '100')}
          onValueChange={portionOnChangeHandler}
          triggerStyleId={s.trigger}
        />
        per page
      </div>
    </div>
  )
}
