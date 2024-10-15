import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  isAppInitialized: boolean
  isUserAuthorized: boolean
}

const initialState: AppState = {
  isAppInitialized: false,
  isUserAuthorized: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppProperty<K extends keyof AppState>(
      state: AppState,
      action: PayloadAction<{ property: K; value: AppState[K] }>
    ) {
      const { property, value } = action.payload
      state[property] = value
    },
  },
})

export const { setAppProperty } = appSlice.actions
