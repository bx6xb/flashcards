import { ItemsPerPage } from '@/components/ui/pagination'
import { SliderValue } from '@/components/ui/slider'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type OrderBy = 'name' | 'cardsCount' | 'updated'
type OrderValue = 'asc' | 'desc'

interface DecksPageState {
  name: string
  minAndMaxCardsCount: SliderValue
  orderBy: `${OrderBy}-${OrderValue}` | 'null'
  currentPage: number
  itemsPerPage: ItemsPerPage
  activeTab: 'My Cards' | 'All Cards'
}

const initialState: DecksPageState = {
  name: '',
  minAndMaxCardsCount: [0, 100],
  orderBy: 'null',
  currentPage: 1,
  itemsPerPage: 10,
  activeTab: 'All Cards',
}

export const decksPageSlice = createSlice({
  name: 'decksPage',
  initialState: { ...initialState }, // to reuse initial state object with initial values in reset state action
  reducers: {
    setProperty<K extends keyof DecksPageState>(
      state: DecksPageState,
      action: PayloadAction<{ property: K; value: DecksPageState[K] }>
    ) {
      state[action.payload.property] = action.payload.value
    },
    resetState() {
      return { ...initialState }
    },
  },
})

export const { setProperty, resetState } = decksPageSlice.actions
