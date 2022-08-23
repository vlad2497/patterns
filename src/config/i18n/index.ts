import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import movies from './movies'

const resources = {
  en: {
    translation: {
      movies: movies.en,
    },
  },
  ru: {
    translation: {
      movies: movies.ru,
    },
  },
}
i18next.use(initReactI18next).init({
  resources,
  lng: 'ru',
  interpolation: {
    escapeValue: false,
  },
})

export default i18next
