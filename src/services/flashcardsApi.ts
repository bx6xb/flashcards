import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DecksListResponse, DecksQueryParams } from './decks/decks.types'

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
    getDecks: builder.query<DecksListResponse, DecksQueryParams | void>({
      query: args => ({
        url: `v2/decks`,
        params: args ?? undefined,
      }),
    }),
  }),
})

export const { useGetDecksQuery } = flashcardsApi
