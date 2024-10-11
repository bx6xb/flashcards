import { configureStore } from '@reduxjs/toolkit'
import { flashcardsApi } from './flashcardsApi'

export const store = configureStore({
  reducer: {
    [flashcardsApi.reducerPath]: flashcardsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(flashcardsApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
