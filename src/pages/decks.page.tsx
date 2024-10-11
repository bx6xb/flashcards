import { DecksTable } from '@/components/ui/decksTable'
import { Typography } from '@/components/ui/typography'
import { useGetDecksQuery } from '@/services/flashcardsApi'

export function DecksPage() {
  const { data, isLoading, error } = useGetDecksQuery()

  if (isLoading) {
    return <Typography variant="h1">Loading...</Typography>
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  return <DecksTable decks={data!.items} />
}
