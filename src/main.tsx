import ReactDOM from 'react-dom/client'
import { App } from '@/App'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import './styles/index.scss'
import { Provider } from 'react-redux'
import { store } from './services/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
