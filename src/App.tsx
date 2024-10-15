import { Router } from '@/router'
import { useAppDispatch } from './services/store'
import { Header } from './components/layout/header'
import { Container } from './components/ui/container'
import { useMeQuery } from './services/flashcardsApi'
import { setAppProperty } from './services/app/appSlice'
import { useEffect } from 'react'

export function App() {
  const dispatch = useAppDispatch()

  const { data, isLoading, error } = useMeQuery()

  useEffect(() => {
    if (data) {
      dispatch(setAppProperty({ property: 'isAppInitialized', value: true }))
      dispatch(setAppProperty({ property: 'isUserAuthorized', value: data.isEmailVerified }))
    }
  }, [data])

  if (isLoading) {
    return 'ZenOw...'
  }

  if (error) {
    console.error(error)
  }

  return (
    <>
      <Header />
      <Container className="appContentWrapper">
        <Router />
      </Container>
    </>
  )
}
