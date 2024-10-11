import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DecksListResponse } from './decks/decks.types'

export const flashcardsApi = createApi({
  reducerPath: 'flashcardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => ({
    getDecks: builder.query<DecksListResponse, void>({
      query: () => `v2/decks`,
    }),
  }),
})

export const { useGetDecksQuery } = flashcardsApi
