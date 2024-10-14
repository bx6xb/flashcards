import { configureStore } from '@reduxjs/toolkit'
import { flashcardsApi } from './flashcardsApi'
import { useDispatch, useSelector } from 'react-redux'
import { decksPageSlice } from './stateSlices/decksPageSlice'

export const store = configureStore({
  reducer: {
    [flashcardsApi.reducerPath]: flashcardsApi.reducer,
    [decksPageSlice.reducerPath]: decksPageSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(flashcardsApi.middleware),
})

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
