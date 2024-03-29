import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { store } from 'store'
import theme from 'themes'
import 'config/i18n'
import { MOCKER } from 'config/api'
import { worker } from 'mocks/browser'
import App from './app'
import './fonts.css'
import './global.css'

// Запуск моккера
if (MOCKER) worker.start()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
)
