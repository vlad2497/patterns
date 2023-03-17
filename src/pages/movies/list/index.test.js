/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import { Provider as ReduxProvider } from 'react-redux'
import theme from 'themes'
import { store } from 'store'
import 'config/i18n'
import { server } from 'mocks/server'
import { getPopular, ResponseType } from 'mocks/modules/movies'
import MoviesListFacade from '.'

const getMaterialUIThemeProvider = (ui) => {
  return <ThemeProvider theme={theme}>{ui}</ThemeProvider>
}

const getReduxProvider = (ui) => {
  return <ReduxProvider store={store}>{ui}</ReduxProvider>
}

describe('movies facade', () => {
  test('should render reload on error', async () => {
    server.use(
      getPopular({
        type: ResponseType.Error,
        status: 500,
      })
    )
    render(getReduxProvider(getMaterialUIThemeProvider(<MoviesListFacade />)))
    const listElement = await screen.findByTestId('popular-movies-reload')
    expect(listElement).toBeInTheDocument()
  })

  test('should render shimmer', async () => {
    render(getReduxProvider(getMaterialUIThemeProvider(<MoviesListFacade />)))
    const emptyDataElement = await screen.findByTestId('popular-movies-shimmer')
    expect(emptyDataElement).toBeInTheDocument()
  })

  test('should render list on success', async () => {
    render(getReduxProvider(getMaterialUIThemeProvider(<MoviesListFacade />)))
    const listElement = await screen.findByTestId('popular-movies-list')
    expect(listElement).toBeInTheDocument()
  })

  test('should render header', async () => {
    render(getReduxProvider(getMaterialUIThemeProvider(<MoviesListFacade />)))
    const headerElement = await screen.findByTestId('movies-page-header')
    expect(headerElement).toBeInTheDocument()
  })

  test('should render genre select', async () => {
    render(getReduxProvider(getMaterialUIThemeProvider(<MoviesListFacade />)))
    const genreSelectElement = await screen.findByTestId('movies-genre-select')
    expect(genreSelectElement).toBeInTheDocument()
  })
})
