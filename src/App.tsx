import { Router } from '@/router'
import { Provider } from 'react-redux'
import { store } from './services/store'
import { Header } from './components/layout/header'
import { Container } from './components/ui/container'

export function App() {
  return (
    <Provider store={store}>
      <Header />
      <Container className="appContentWrapper">
        <Router />
      </Container>
    </Provider>
  )
}
