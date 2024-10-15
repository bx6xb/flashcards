import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DecksListResponse, DecksQueryParams } from './decks/decks.types'
import { Me } from './auth/auth.types'

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
    me: builder.query<Me, void>({
      query: () => 'v1/auth/me',
    }),
    getDecks: builder.query<DecksListResponse, DecksQueryParams | void>({
      query: args => ({
        url: `v2/decks`,
        params: args ?? undefined,
      }),
    }),
  }),
})

export const { useMeQuery, useGetDecksQuery } = flashcardsApi
