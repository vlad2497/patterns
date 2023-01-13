/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import theme from 'themes'
import Title from '.'

const getMaterialUIThemeProvider = (ui) => {
  return <ThemeProvider theme={theme}>{ui}</ThemeProvider>
}

describe('movies list', () => {
  describe('title', () => {
    beforeEach(() =>
      render(getMaterialUIThemeProvider(<Title>Проверка</Title>))
    )

    test('title was rendered', () => {
      const titleElement = screen.getByText('Проверка')
      expect(titleElement).toBeInTheDocument()
    })
  })
})
